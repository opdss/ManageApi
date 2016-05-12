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

exports.getListByItemId = function(itemId, callback){
    var query = {
        'itemId' : itemId,
        'isDel' : false
    }
    Apis.find({}, null, null, callback);
};

function getList(){
    var query = null;
    var opts = null;
    Apis.find(query, null, opts, callback);
}

exports.delById = function(id, callback){
    Apis.remove({_id: id}, callback);
};