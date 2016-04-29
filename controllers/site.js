/**
 * Created by wuxin on 16/4/27.
 */


exports.index = function(req, res, next){
    res.send('Hello World! ');
}

exports.home = function(req, res, next){
    res.render(
        'index',
        {
            title: 'Express',
            //title: req,
            contents : req.route
        }
    );
}