/**
 * Created by wuxin on 16/5/9.
 */
var History = require('../proxy').History;

exports.add = function(req, res, next){
    //var username = req.session.userInfo.username || null;
    var hisData = {
        'title': req.body.title, //名称
        'api': req.body.api,  //接口名. 如 item/del
        'method': req.body.method,  //请求方法. 如 get
        'description': req.body.description || '', //简介说明
        'params' : req.body.params || '',  //参数组
        'reqBody' : req.body.reqBody || '',  //请求body
        'resBody' : req.body.resBody || '',  //响应body
        'reqHeader' : req.body.reqHeader || '', //请求header
        'resHeader' : req.body.resHeader || '', //响应header
        //'authorId': {type: ObjectId}, //创建者
        'itemId': req.body.itemId, //所属组
        'md5Api': '123456789', //所属组
    }
    var userInfo = req.session.userInfo || null;
    //var userInfo = null;
    if(userInfo){
        hisData['username'] = userInfo.username;
        History.saveToHistory(hisData, function(err, data){
            if(err){
                res.send(err);
            }else {
                res.send(data);
            }
        });
    }else{
        //res.send('aaa');
        var history = req.session.history || [];
        //res.send(history);
        history = history.concat(hisData);
        req.session.history = history;
        res.send(history);
    }
    //res.send('bbbb');
}

exports.list = function(req, res, next){
    var username = req.session.userInfo.username || null;
    res.send(username);
}

exports.info = function(req, res, next){
    var username = req.session.userInfo.username || null;
    res.send(username);
}

exports.edit = function(req, res, next){
    var username = req.session.userInfo.username || null;
    res.send(username);
}

exports.del = function(req, res, next){
    var username = req.session.userInfo.username || null;
    res.send(username);
}