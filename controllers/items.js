/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../proxy').Items;
var ItemsModel = require('../models').Items;
var EventProxy = require('eventproxy');
var verify = require('../common/verify.js');
var config = require('../config.js');

exports.list = function(req, res, next){
    var page = parseInt(req.query.page, 10) || 1;
    page = page > 0 ? page : 1;
    var limit = parseInt(req.query.limit, 10) || config.pageSize;
    limit = limit > 0 ? limit : config.pageSize;
    var options = { skip: (page - 1) * limit, limit: limit};

    Items.getList({'isDel': false}, options, function(err,data){
        if(!err){
            res.json({'errno': 0, 'errmsg': 'success', data: data});
        }else{
            res.json({'errno': 1, 'errmsg': err});
        }
    })
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
        'authorId' : req.session.userInfo._id,   //创建者
        'description' : req.body.description || '',   //组描述
        'createTime' : Date.now(),     //创建时间
        'isDel' : false, //伪删除
    }
    if(!verify.item(data)) {
        return res.json({'errno': 1, 'errmsg': '输入信息有误'});
    }
    Items.add(data, function (err) {
        if (err) {
            res.json({'errno': 1, 'errmsg': err.message});
        } else {
            res.json({'errno': 0, 'errmsg': 'success'});
        }
    });
}

exports.del = function(req, res, next) {
    var itemId = req.query.itemId;
    Items.delById(itemId, function(err, doc){
        if(err){
            res.json({'errno': 1, 'errmsg': err.message});
        }else{
            res.json({'errno': 0, 'errmsg': 'success', data: doc});
        }
    })
}

exports.edit = function(req, res, next){
    var itemId = req.query.itemId;
    var data = {
        'title' : req.body.title,    //名称
        'content' : req.body.content || '',     //组说明
        'params' : req.body.params || null, //组全局params
        'header' : req.body.header || null, //组全局header
        'authorId' : req.session.userInfo._id,   //创建者
        'description' : req.body.description || '',   //组描述
        'createTime' : Date.now(),     //创建时间
        'isDel' : false, //伪删除
    }
    if(!itemId || !verify.item(data)) {
        return res.json({'errno': 1, 'errmsg': '输入信息有误'});
    }
    Items.updateById(itemId, data, function (err, doc) {
        if (err) {
            res.json({'errno': 1, 'errmsg': err.message});
        } else {
            res.json({'errno': 0, 'errmsg': 'success', data: doc});
        }
    });
}

exports.info = function(req, res, next){
    res.send(req.host+req.port+req.url);
}