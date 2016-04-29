/**
 * Created by wuxin on 16/4/6.
 */


var http = require('http');
//var iconv = require('iconv-lite');

var option = {
    hostname: "www.baidu.com",
    path: ""
};

var req = http.request(option, function(res) {
    res.on("data", function(chunk) {
        console.log(chunk)  ;
    });
}).on("error", function(e) {
    console.log(e.message);
});

req.end();