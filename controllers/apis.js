/**
 * Created by wuxin on 16/4/27.
 */

var requests = require('../common/requests');

exports.list = function(req, res, next){
    console.log(req.headers);
    res.send(req.host+req.port+req.url);
}

exports.add = function(req, res, next){
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