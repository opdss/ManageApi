/**
 * Created by wuxin on 16/5/2.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    'username' : {type: String},
    'password' : {type: String},
    'email' : {type: String},
    'mobile' : {type: String},
    'createTime' : {type: Date, default: Date.now()}
});

UserSchema.index({'username': 1, 'email': 1}, {unique : true});

UserSchema.statics.findByEmail = function(email, callback){
    this.findOne({'email' : email}, callback);
}

UserSchema.statics.signin = function(username, password, callback){
    this.findOne({'email' : email}, callback);
}

mongoose.model('User', UserSchema);