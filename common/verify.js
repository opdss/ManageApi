/**
 * Created by wuxin on 16/5/10.
 */

exports.reg = reg = function(str, type){
    var regx = {
        //'mobile' : '/^(13[0-9]{9})|(15[89][0-9]{8})$/',
        'mobile': /^1[0-9]{10}$/,
        'email': /\w@\w*\.\w/,
        'username': /\w{2,20}/,
        'password': /.{6,20}/,
        'default' : /\w+/,
    }
    type = regx[type] ? type : 'default';
    return regx[type].test(str);
}

exports.item = function(data){
    if(!data['title'] || !data['authorId']){
        return false;
    }
    return true;
}

exports.history = function(data){
    if(!data['authorId'] || !data['md5Api']){
        return false;
    }
    return true;
}

exports.api = function(data){
    if(!data['authorId'] || !data['title'] || !data['url'] || !data['method'] || !data['authorId'] || !data['itemId']){
        return false;
    }
    return true;
}

exports.user = function(data, callback){
    if(!reg(data['username'], 'username') || !reg(data['password'], 'password') || !reg(data['email'], 'email') || !reg(data['mobile'], 'mobile')){
        callback('用户信息输入有误!');
    }else{
        callback(null, data);
    }
}

