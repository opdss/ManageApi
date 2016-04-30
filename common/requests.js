/**
 * Created by wuxin on 16/4/30.
 */
var http = require('http');

var qs = require('querystring');
var urlParse = require('url');
var EventProxy = require('eventproxy');

var requests = {};

requests.returnBody = {
    request : {
        'output' : '',
        'method' : '',
        'requestUrl' : '',
        'headers' : {},
        'body' : null,
    },
    response : {
        'output' : '',
        'status' : '200',
        'time' : 55,
        'headers' : {},
        'body' : {}
    }
}


var proxy = new EventProxy();

requests.get = function(url, headers, callback){
    var startTime = Date.now();
    var urlInfo = urlParse.parse(url);
    var options = {
        protocol : urlInfo.protocol,
        hostname : urlInfo.hostname,
        port : urlInfo.port,
        path : urlInfo.path,
        method : 'GET',
        headers : headers,
    }
    proxy.assign('req', 'res', callback)
    var req = http.request(options, function (res) {
        //console.log(res)
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            requests.returnBody.response = {
                //'output' : req.output,
                'output' : '',
                'status' : res.statusCode,
                'time' : Date.now()-startTime,
                'headers' : res.headers,
                'body' : chunk
            }
            proxy.trigger('res', requests.returnBody.response);
        });
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    req.end();
    requests.returnBody.request = {
        //'output' : req.output,
        'output' : req._header,
        'method' : req.method,
        'requestUrl' : url,
        'headers' : req._headers,
        'body' : null,
    }
    proxy.trigger('req', requests.returnBody.request);
}

module.exports = requests