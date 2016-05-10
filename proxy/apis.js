/**
 * Created by wuxin on 16/4/27.
 */
var Apis = require('../models').Apis;

exports.add = function(data, callback){
    var apis = new Apis(data);
    apis.save(callback);
};

exports.getInfoById = function(apiId, callback){
    Apis.findOne({'_id': apiId}).exec(callback);
}

exports.getListByItemId = function(itemsId, callback){
    var query = {
        'itemsId' : itemsId,
        'isDel' : false
    }
    Apis.find(query, null, null, callback);
};

function getList(){
    var query = null;
    var opts = null;
    Apis.find(query, null, opts, callback);
}