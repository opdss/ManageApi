/**
 * Created by wuxin on 16/4/28.
 */
var Items = require('../proxy').Items
exports.list = function(req, res, next){
    res.send(req.host+req.port+req.url);
}

exports.add = function(req, res, next){
    Items.add(req.query.name, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('ok');
        }
    })
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