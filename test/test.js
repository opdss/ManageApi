/**
 * Created by wuxin on 16/4/29.
 */
var nodemailer  = require("nodemailer");
var user = 'wuxin@kuaiyong.net',
    pass = '12345';

var smtpTransport = nodemailer.createTransport("SMTP", {
    host : 'smtp.kuaiyong.net',
    port: 25, // port for secure SMTP
    auth: {
        user: user,
        pass: pass
    }
});
smtpTransport.sendMail({
    from    : 'Fred Foo<wuxin@kuaiyong.net>'
    , to      : 'opdss@qq.com'
    , subject : 'Node.JS通过SMTP协议从QQ邮箱发送邮件'
    , html    : '这是一封测试邮件 <br> '
}, function(err, res) {
    console.log(err, res);
});