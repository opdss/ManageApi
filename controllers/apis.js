/**
 * Created by wuxin on 16/4/27.
 */

var Apis = require('../proxy').Apis;
var Params = require('../proxy').Params;
var EventProxy = require('eventproxy');

exports.index = function(req, res, next){
    //列表布局展示当前itemId的接口列表, 没有itemId就展示history列表, 没有history就默认为空
    var ItemsId = req.query.itemId || null;
    //调试布局展示当前接口信息, 没有apiId就取列表的第一位,都没有也为空
    var apiId = req.query.apiId || null;

    res.send(req.host+req.port+req.url);
}

//ajax get 获取对应item的所有接口
exports.list = function(req, res, next){
    var itemId = req.query.itemId || null;
    if(itemId) {
        Apis.getListByItemId(itemId, function (err, data) {
            if (err) {
                res.send({'errno': 1, 'errmsg': err.message});
            } else {
                res.send({'errno': 0, 'errmsg': 'success', 'data': data});

            }
        });
    }else{
        res.send({'errno': 1, 'errmsg': 'params error'});
    }
}

//ajax get 获取对应接口的详细信息
exports.info = function(req, res, next){
    var apiId = req.query.apiId || null;
    if(apiId) {
        Apis.getInfoById(apiId, function (err, data) {
            if (err) {
                res.send({'errno': 1, 'errmsg': err.message});
            } else {
                if (!data) {
                    res.send({'errno': 2, 'errmsg': 'no data'});
                } else {
                    res.send({'errno': 0, 'errmsg': 'success', 'data': data});
                }
            }
        });
    }else{
        res.send({'errno': 1, 'errmsg': 'params error'});
    }
}

exports.add = function(req, res, next){
    //var proxy = new EventProxy();
    //for(var x in req.body.params){
    //    var params = new Params(req.body.params[x],function(err){})
    //}

    //proxy.assign('params',function(params){
        var data = {
            'name': req.body.name, //名称
            'api': req.body.api,  //接口名. 如 item/del
            'method': req.body.method,  //请求方法. 如 get
            'description': req.body.description || '', //简介说明
            'params' : '',  //参数组
            'reqBody' : req.body.reqBody || '',  //请求body
            'resBody' : req.body.resBody || '',  //响应body
            'reqHeader' : req.body.reqHeader || '', //请求header
            'resHeader' : req.body.resHeader || '', //响应header
            //'authorId': {type: ObjectId}, //创建者
            'itemId': req.body.itemId, //所属组
            'createTime': Date.now(), //创建时间
            'isDel' : false, //伪删除
        }
    //})
    Apis.add(data, function(err){
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
exports.debug = function(req, res, next){

    requests.get('http://www.baidu.com',{},function(reqInfo, resInfo){
        res.send(resInfo);
    })
}