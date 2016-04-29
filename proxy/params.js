/**
 * Created by wuxin on 16/4/28.
 */
var Params = require('../models').Params

exports.add = function(data, callback){
    var params = new Params(data);
    params.save(callback);
}