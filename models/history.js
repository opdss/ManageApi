/**
 * Created by wuxin on 16/5/2.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var HistorySchema = new Schema({
    'title': {type: String}, //名称
    'api': {type: String},  //接口名. 如 item/del
    'method': {type: String},  //请求方法. 如 get
    'description': {type: String, default: ''}, //简介说明
    'params' : {type: String, default: ''},  //参数组
    'reqBody' : {type: String, default: ''},  //请求body
    'resBody' : {type: String, default: ''},  //响应body
    'reqHeader' : {type: String, default: ''}, //请求header
    'resHeader' : {type: String, default: ''}, //响应header
    'authorId': {type: ObjectId}, //创建者
    'itemId': {type: ObjectId}, //所属组
    'createTime': {type: Date, default: Date.now}, //创建时间
    'md5Api' : {type: String}, //记录指纹 api+method+params+reqBoy+reqHeader+itemId
});

//HistorySchema.index({authorId : 1, md5Api : -1});
HistorySchema.index({authorId : 1});

mongoose.model('History', HistorySchema);