/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../proxy').Items

var EventProxy = require('eventproxy')

var ItemsModel = require('../models').Items

exports.list = function(req, res, next){
    res.send('faefae');
}

exports.showAdd = function(req, res, next){
    Items.add(req.query, function(err){
        if(err){
            res.send(err);
        }else{
            res.send('ok');
        }
    })
}

exports.add = function(req, res, next){
    //console.log(req.body);
    var data = {
        'title' : req.body.title,    //名称
        'content' : req.body.content || '',     //组说明
        'params' : req.body.params || null, //组全局params
        'header' : req.body.header || null, //组全局header
        //'authorId' : {type: ObjectId},   //创建者
        'description' : req.body.description || '',   //组描述
        'createTime' : Date.now(),     //创建时间
        'isDel' : false, //伪删除
    }
    Items.add(data, function(err){
        if(err){
            res.send(err);
        }else{
            res.toJson('ook');
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