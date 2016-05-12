/**
 * Created by wuxin on 16/5/11.
 */
var User = require('../models').User;


exports.checkUser = function(username, password, callback){
    User.findOne({'username': username, 'password': password}, null, null, callback);
}

exports.add = function(data, callback){
    User.find({'username': data['username'], 'email': data['email']}, null, null, function(err, doc){
        if(doc.length == 0){
            var user = new User(data);
            user.save(data, callback);
        }else{
            callback('用户已经存在');
        }
    });
}