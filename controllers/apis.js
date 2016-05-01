/**
 * Created by wuxin on 16/4/27.
 */

var Apis = require('../proxy').Apis
var Params = require('../proxy').Params
var EventProxy = require('eventproxy')

exports.list = function(req, res, next){
    console.log(req.headers);
    res.send(req.host+req.port+req.url);
}

exports.add = function(req, res, next){
    var proxy = new EventProxy();
    for(var x in req.body.params){
        var params = new Params(req.body.params[x],function(err){})
    }


    proxy.assign('params',function(params){
        var data = {
            'name': req.body.name, //名称
            'api': req.body.api,  //接口名. 如 item/del
            'method': req.body.method,  //请求方法. 如 get
            'description': req.body.description || '', //简介说明
            'params' : params,  //参数组
            'reqBody' : req.body.reqBody || '',  //请求body
            'resBody' : req.body.resBody || '',  //响应body
            'reqHeader' : req.body.reqHeader || '', //请求header
            'resHeader' : req.body.resHeader || '', //响应header
            //'authorId': {type: ObjectId}, //创建者
            'itemId': req.body.itemId, //所属组
            'createTime': Date.now(), //创建时间
            'isDel' : false, //伪删除
        }
    })
    Apis.add(data, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('ok');
        }
    })
    res.send(req.host+req.port+req.url);
}

exports.del = function(req, res, next) {
    res.send(req.host+req.port+req.url);
}

exports.edit = function(req, res, next){
    res.send(req.host+req.port+req.url);
}

exports.info = function(req, res, next){
    res.send(req.host+req.port+req.url);
}

exports.debug = function(req, res, next){

    requests.get('http://www.baidu.com',{},function(reqInfo, resInfo){
        res.send(resInfo);
    })
}