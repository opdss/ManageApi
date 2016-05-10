/**
 * Created by wuxin on 16/5/9.
 */
var History = require('../models').History;

exports.add = function(data, callback){
    var userInfo =
    callback();
}


exports.saveToSession = saveToSession = function(data, callback){

}

exports.saveToHistory = saveToHistory = function(data, callback){
    var his = new History(data);
    his.save(callback);
}