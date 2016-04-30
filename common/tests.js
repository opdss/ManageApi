/**
 * Created by wuxin on 16/4/29.
 */
var request = require('request');
var url = 'http://localhost:3000/apis?a=232';

var returnBody = {
    request : {
        'method' : '',
        'requestUrl' : '',
        'header' : {},
        'body' : '',
    },
    response : {
        'status' : '200',
        'time' : 55,
        'header' : {},
        'body' : {}
    }
}
var req = request(url, function(err, response, body){
    console.log(err);
    console.log(response);
    console.log(response.caseless.dict);
    //console.log(body);
})
console.log(req)