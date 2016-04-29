/**
 * Created by wuxin on 16/4/27.
 */

var config = {
    //调试模式开关
    debug : process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
    //名称
    name : 'api调试管理',
    //程序运行端口
    port : 3000,
    //数据库链接
    db : 'mongodb://10.211.55.6/ManageApi',
}

if(config.debug){
    config.db =  'mongodb://10.211.55.6/ManageApi';
}

module.exports = config;