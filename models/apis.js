/**
 * Created by wuxin on 16/4/27.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var ApisSchema = new Schema({
    'title': {type: String}, //名称
    'url': {type: String},  //接口地址
    'method': {type: String},  //请求方法. 如 get
    'description': {type: String, default: ''}, //简介说明
    'params' : {type: String, default: []},  //参数组
    'reqBody' : {type: String, default: ''},  //请求body
    'resBody' : {type: String, default: ''},  //响应body
    'reqHeader' : {type: String, default: ''}, //请求header
    'resHeader' : {type: String, default: ''}, //响应header
    'authorId': {type: ObjectId}, //创建者
    'itemId': {type: ObjectId}, //所属组
    'createTime': {type: Date, default: Date.now}, //创建时间
});

ApisSchema.index({'api': 1});

mongoose.model('Apis', ApisSchema);