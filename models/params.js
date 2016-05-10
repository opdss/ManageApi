/**
 * Created by wuxin on 16/4/28.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var ParamsSchema = new Schema({
    'title' : {type: String},    //名称
    'field' : {type: String},  //参数名称 如 page
    'isMust': {type: Boolean, default: false},  //是否必须
    'type': {type: String, default: 'string'}, //参数类型
    'description' : {type: String},  //参数说明
    //'authorId': {type: ObjectId}, //创建者
    'retCount': {type: Number, default: 0}, //接口引用数量
    'itemId': {type: ObjectId}, //所属组
    'createTime': {type: Date, default: Date.now}, //创建时间
});


mongoose.model('Params', ParamsSchema);