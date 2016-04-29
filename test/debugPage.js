/**
 * Created by wuxin on 16/4/7.
 */
var exporess = require('express');
var router = exporess.Router();
var httpHelper = require('./httpHelper.js');

var uid = 2;
//api参数
var apis = [
    {
        'api' : 'msg_send',
        'params' : [
            {'name':'uid','value':uid},
            {'name':'message','value':'测试消息'},
        ]
    },
    {
        'api' : 'msg_list',
        'params' : [
            {'name':'uid','value':uid},
            {'name':'page','value':1},
            {'name':'pageSize','value':10},
        ]
    },
];

router.get('/', function(req, res, next){
    console.log(req.headers);
    res.render(
        __dirname+'/debugPageTpl.ejs',
        {
            'title' : '接口调试页面',
            //'request_url' : req.hostname,
            'request_url' : req.protocol + '://' + req.headers.host,
            'apis' : apis,
        }
    );
});


router.post('/check', function(req, res, next){

    var param_api = req.param('api');
    var request_url = req.param('request_url');
    var request_method = req.param('request_method');
    var header = {
        'Host' : 'localhost',
        'Referer' : 'http://localhost:3000/',
        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:44.0) Gecko/20100101 Firefox/44.0'
    }
    var params = {};
    for(var i=0; i<apis.length; i++){
        if(apis[i].api == param_api){
            var pa = apis[i].params;
            for(var j=0; j<pa.length; j++){
                params[pa[j].name] = req.param(pa[j].name);
            }
            break;
        }
    }
    if(!params){
        res.send('api error');
    }
    console.log(params);
    var url = request_url + '/' + param_api.replace('_', '/');

    function printData(err, data, _res){
        console.log(data);
        res.send(data);
    }

    if(request_method == 'POST'){
        httpHelper.post(url, 30000, params, printData, 'utf-8', header, 'utf-8', true);
    }else{
        var query = '', _and = '';
        for(x in params){
            query += _and + x + '=' + params[x];
            _and = '&';
        }
        httpHelper.get(url + '?' + query, 30000, printData, 'utf-8', header);
    }
});


module.exports = router