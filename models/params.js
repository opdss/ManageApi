/**
 * Created by wuxin on 16/4/28.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParamsSchema = new Schema({
    'field' : {type: String},  //参数名称 如 page
    'description' : {type: String},  //参数说明
    'isMust': {type: Boolean, default: false},  //是否必须
    'type': {type: String, default: 'string'}, //参数类型
    //'authorId': {type: ObjectId}, //创建者
    'itemId': {type: Schema.Types.ObjectId}, //所属项目
    'createTime': {type: Date, default: Date.now}, //创建时间
});


mongoose.model('Params', ParamsSchema);