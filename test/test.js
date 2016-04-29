/**
 * Created by wuxin on 16/4/29.
 */
var EventProxy = require('eventproxy');
console.log(EventProxy);
var proxy = new EventProxy();
var render = function (template, data, l10n){
    _.template(template, data);
};
proxy.assign("template", "data", "l10n", render);
$.get("template", function (template) {
    // something
    proxy.trigger("template", template);
});
$.get("data", function (data) {
    // something
    proxy.trigger("data", data);
});
$.get("l10n", function (l10n) {
    // something
    proxy.trigger("l10n", l10n);
});