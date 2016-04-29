/**
 * Created by wuxin on 16/4/27.
 */

exports.list = function(req, res, next){
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