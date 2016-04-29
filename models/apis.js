/**
 * Created by wuxin on 16/4/27.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApisSchema = new Schema({
    'name': {type: String}, //名称
    'api': {type: String},  //接口名. 如 iface/del
    'description': {type: String, default: ''}, //简介说明
    'resSample' : {type: String, default: ''},  //返回示例
    'params' : {type: [Schema.Types.ObjectId], default: []},  //参数组
    //'authorId': {type: ObjectId}, //创建者
    'itemId': {type: Schema.Types.ObjectId}, //创建者
    'createTime': {type: Date, default: Date.now}, //创建者
});

ApisSchema.index({'api': 1});

mongoose.model('Apis', ApisSchema);