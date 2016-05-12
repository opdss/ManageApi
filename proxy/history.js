/**
 * Created by wuxin on 16/5/9.
 */
var History = require('../models').History;

exports.add = function(data, callback){
    var userInfo =
    callback();
}


exports.getList = getList = function(query, opts, callback) {
    //Items.find().exec(callback);
    History.find(query, null, opts, callback);
}

exports.saveToSession = saveToSession = function(data, callback){

}

exports.saveToHistory = saveToHistory = function(data, callback){
    History.find({'authorId': data['authorId'], 'md5Api': data['md5Api']}, function(err, doc){
        if(doc.length == 0){
            var his = new History(data);
            his.save(callback);
        }else{
            callback({'message': 'exists'});
        }
    });
    //var his = new History(data);
    //his.save(callback);
}