/**
 * Created by wuxin on 16/4/27.
 */
var Items = require('../models').Items;

exports.add = function(data, callback){
    var items = new Items(data);
    items.save(callback);
}

exports.delById = function(id, callback){

}