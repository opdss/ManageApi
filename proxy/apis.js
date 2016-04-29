/**
 * Created by wuxin on 16/4/27.
 */
var Apis = require('../models').Apis

exports.add = function(data, callback){
    var apis = new Apis(data);
    apis.save(callback);
}