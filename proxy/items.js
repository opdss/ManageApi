/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../models').Items;
var EventA

exports.getList = function(query, opts, callback){
    //Items.find().exec(callback);
    Items.find(query, null, opts, callback);
};

exports.add = function(data, callback){
    var items = new Items(data);
    items.save(callback);
};

exports.delById = function(id, callback){

};