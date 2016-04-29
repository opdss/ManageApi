/**
 * Created by wuxin on 16/4/27.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    'name' : {type: String},    //名称
    //'authorId' : {type: ObjectId},   //创建者
    'description' : {type: String, default: ''},   //接口描述
    'content' : {type: String, default: ''},     //接口说明
    'createTime' : {type: Date, default: Date.now},     //创建时间
});

mongoose.model('Items', ItemsSchema);