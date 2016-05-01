/**
 * Created by wuxin on 16/4/27.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    'title' : {type: String},    //名称
    'content' : {type: String, default: ''},     //组说明
    'params' : {type: String, default: ''}, //组全局params
    'header' : {type: String, default: ''}, //组全局header
    //'authorId' : {type: ObjectId},   //创建者
    'description' : {type: String, default: ''},   //组描述
    'createTime' : {type: Date, default: Date.now},     //创建时间
    'isDel' : {type: Boolean, default: false}, //伪删除
});

mongoose.model('Items', ItemsSchema);