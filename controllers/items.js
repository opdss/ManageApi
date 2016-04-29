/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../proxy').Items

var EventProxy = require('eventproxy')

var ItemsModel = require('../models').Items

exports.list = function(req, res, next){
    res.send('faefae');
}

exports.add = function(req, res, next){
    Items.add(req.query, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('ok');
        }
    })
}

exports.del = function(req, res, next) {
    Items.delById(req.query.id, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('ok');
        }
    })
}

exports.edit = function(req, res, next){
    res.send(req.host+req.port+req.url);
}

exports.info = function(req, res, next){
    res.send(req.host+req.port+req.url);
}