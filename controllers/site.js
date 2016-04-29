/**
 * Created by wuxin on 16/4/27.
 */


exports.index = function(req, res, next){
    res.send('Hello World! ');
}

exports.home = function(req, res, next){
    res.send('232');
}

exports.page = function(req, res, next){
    //var f = res.baseUrl+'/public/html/'+req.params.name+'.html';
    //console.log(_path)
    //console.log(req.baseUrl)
    //console.log(f)
    res.sendFile('/Users/wuxin/Projects/WebstormProjects/ManageApi/public/html/'+req.params.name+'.html');
    //res.sendFile('/html/'+req.params.name+'.html');
    //res.send(req.baseUrl)
}