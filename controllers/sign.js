/**
 * Created by wuxin on 16/5/11.
 */
var User = require('../proxy').User;
var encrypt = require('../common/encrypt.js');
var verify = require('../common/verify.js');
var EventProxy = require('eventproxy');
//登录提交
exports.signin = function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    if(!verify.reg(username, 'username') || !verify.reg(password, 'password')){
        return res.json({'errno': 1, 'errmsg': '帐号或者密码不能为空'});
    }
    password = encrypt.md5(password);
    User.checkUser(username, password, function(err, data){
        if(!data || data.length == 0){
            return res.json({'errno': 1, 'errmsg': '您输入的帐号不存在'});
        }
        req.session.userInfo = data;
        res.json({'errno': 0, 'errmsg': 'ok'});
    });

}
//注册提交
exports.signup = function(req, res, next){
    var data = {
        'username' : req.body.username,
        'password' : req.body.password,
        'repassword' : req.body.repassword,
        'email' : req.body.email,
        'mobile' : req.body.mobile,
    }
    if(data['password'] != data['repassword']){
        return res.json({'errno': 1, 'errmsg': '两次密码输入不一致'});
    }
    var ep = EventProxy.create();
    // verify -> insert -> over
    verify.user(data, function(err, data){
        if(err){
            return ep.emitLater('over', err);
        }
        ep.emitLater('verify', data);
    });
    ep.once('verify', function(data){
        User.add(data, function(err, doc){
            return ep.emit('over', err, doc);
        });
    });

    ep.on('over', function(err,doc){
        if(err) {
            return res.json({'errno': 1, 'errmsg': err});
        }
        res.json({'errno': 0, 'errmsg': 'success', data: doc});
    });
}
//退出
exports.signout = function(req, res, next){
    req.session = null;
    res.redirect('/');
}