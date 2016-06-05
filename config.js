/**
 * Created by wuxin on 16/4/27.
 */

var config = {
    //调试模式开关
    debug : process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development',
    //名字
    name: 'api管理',
    //描述
    description: '专业的api管理工具',
    //关键字
    keywords: 'api, 管理, 工具, 专业, 管理工具',
    //每页数据量
    pageSize : 9,
    //session_secret
    session_secret : 'this is a session_secret',
    //名称
    name : 'api调试管理',
    //程序运行端口
    port : 3000,
    //数据库链接
    db : 'mongodb://10.211.55.6/ManageApi'
}

if(config.debug){
    config.db =  'mongodb://10.211.55.6/ManageApi';
}

module.exports = config;