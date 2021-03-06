/**
 * Created by wuxin on 16/4/27.
 */

var Apis = require('../proxy').Apis;
var Params = require('../proxy').Params;
var EventProxy = require('eventproxy');
var verify = require('../common/verify.js');

exports.index = function(req, res, next){/*
    //列表布局展示当前itemId的接口列表, 没有itemId就展示history列表, 没有history就默认为空
    var ItemsId = req.query.itemId || null;
    //调试布局展示当前接口信息, 没有apiId就取列表的第一位,都没有也为空
    var apiId = req.query.apiId || null;

    res.send(req.host+req.port+req.url);*/
    res.render('apis', {'title' : '接口调试页面'});
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
    var data = {
        'title': req.body.title, //名称
        'url': req.body.url,  //接口名. 如 item/del
        'method': req.body.method,  //请求方法. 如 get
        'description': req.body.description || '', //简介说明
        'params' : '',  //参数组
        'reqBody' : req.body.reqBody || '',  //请求body
        'resBody' : req.body.resBody || '',  //响应body
        'reqHeader' : req.body.reqHeader || '', //请求header
        'resHeader' : req.body.resHeader || '', //响应header
        'authorId': req.session.userInfo._id, //创建者
        'itemId': req.body.itemId, //所属组
        'createTime': Date.now(), //创建时间
        'isDel' : false, //伪删除
    }

    var data = {
        'title': '测试地址', //名称
        'url': 'http://localhost:3000/apis/add',  //接口名. 如 item/del
        'method': 'GET',  //请求方法. 如 get
        'description': '本项目的添加接口', //简介说明
        'params' : [],  //参数组
        'reqBody' : {'a':'fwaef','b':'aegae', 'c':'2323r3'},  //请求body
        //'resBody' : '',  //响应body
        'reqHeader' : {'TOKEN':'hoaihfoiuaheaneafphgo','K':'afbh445434563', 'T':'23aefqgq34geagaega'}, //请求header
        //'resHeader' : {}, //响应header
        'authorId': req.session.userInfo._id, //创建者
        'itemId': '572c01e9017a23540c584824', //所属组
        'createTime': Date.now(), //创建时间
        'isDel' : false, //伪删除
    }


    console.log(data);
    if(!verify.api(data)) {
        return res.json({'errno': 1, 'errmsg': '输入信息有误'});
    }
    Apis.add(data, function(err, doc){
        if (err) {
            res.json({'errno': 1, 'errmsg': err.message});
        } else {
            res.json({'errno': 0, 'errmsg': 'success', data: doc});
        }
    })
}

exports.del = function(req, res, next) {
    var apiId = req.query.apiId;
    Apis.delById(apiId, function(err, doc){
        if(err){
            res.json({'errno': 1, 'errmsg': err.message});
        }else{
            res.json({'errno': 0, 'errmsg': 'success', data: doc});
        }
    })
}

exports.edit = function(req, res, next){
    res.send(req.host+req.port+req.url);
}
exports.debug = function(req, res, next){

    requests.get('http://www.baidu.com',{},function(reqInfo, resInfo){
        res.send(resInfo);
    })
}

exports.send = function(req, res, next){
/*
    //不能正确解析json 格式的post参数
    var body = '', jsonStr;
    req.on('data', function (chunk) {
        body += chunk; //读取参数流转化为字符串
    });
    req.on('end', function () {
        //读取参数流结束后将转化的body字符串解析成 JSON 格式
        try {
            jsonStr = JSON.parse(body);
        } catch (err) {
            jsonStr = null;
        }
        console.log(jsonStr);
        res.json({'errno': 0, 'errmsg': 'success', data: jsonStr});
        //res.json({'errno': 0, 'errmsg': 'success', data: body});
    });*/

    console.log(req.body);
    var data = req.body;
    res.json({'errno': 0, 'errmsg': 'success', data: JSON.parse(data.data)});
}