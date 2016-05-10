/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../proxy').Items;
var EventProxy = require('eventproxy');
var config = require('../config.js');

exports.index = function(req, res, next){
    //var proxy = new EventProxy();
    //proxy.fail(next)
    var proxy = EventProxy.create();
    var page = parseInt(req.query.page, 10) || 1;
    page = page > 0 ? page : 1;
    var limit = parseInt(req.query.limit, 10) || config.pageSize;
    limit = limit > 0 ? limit : config.pageSize;
    var options = { skip: (page - 1) * limit, limit: limit};

    Items.getList({'isDel': false}, options, function(err,data){
        if(!err){
            res.render(
                'home',
                {
                    title : '主页',
                    items : data,
                    layout : 'layout.ejs'
                }
            )
        }else{
            res.send(err);
        }
    })

};

exports.home = function(req, res, next){
    res.send('232');
};

exports.page = function(req, res, next){
    //var f = res.baseUrl+'/public/html/'+req.params.name+'.html';
    //console.log(_path)
    //console.log(req.baseUrl)
    //console.log(f)
    res.sendFile('/Users/wuxin/Projects/WebstormProjects/ManageApi/public/html/'+req.params.name+'.html');
    //res.sendFile('/html/'+req.params.name+'.html');
    //res.send(req.baseUrl)
};