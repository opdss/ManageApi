/**
 * Created by vanki on 16/4/30.
 */
$(function () {
    //setCardAutoData();

});

var colors = ['#44BB44', '#11EEEE', '#0099FF', '#FF0099', '#EE113D', '#99667B',
    '#99667B', '#F7F709', '#CC5233', '#00FFFF', '#EE11EE', '#1A94E6'];
/*var setCardAutoData = function () {
    //var size = [];
    var colorSize = colors.length;
    var colorIndex;
    var color;
    while(!color) {
        colorIndex = getScopeRandom(0, colorSize - 1);
        color = colors[colorIndex];
    }

    $('.v_body_card').each(function(index, card) {
        console.info($(card).css('background', color));
    });

}*/

/**
 * 获取一定范围内的随机数
 * @param min
 * @param max
 * @returns {number}
 */
var getScopeRandom = function (min, max) {
    max++;
    return Math.floor(min + Math.random() * (max - min))
}




/*

var begin = getRGB('#33FFAA');
var end = getRGB('#FF0000');
var curColor = getRGB('#33FFAA');
var bo = true;
var rate = getRate(begin, end);

function setCardAutoData()
{
        curColor.r = getCur(begin.r, end.r, curColor.r, bo, rate.r);
        curColor.g = getCur(begin.g, end.g, curColor.g, bo, rate.g);
        curColor.b = getCur(begin.b, end.b, curColor.b, bo, rate.b);

        /!*$('.v_body_card').each(function(index, card) {
            $(card).css('background-color', curColor);
        });*!/

    //console.info(curColor);


        if(curColor.r == begin.r && curColor.g == begin.g && curColor.b == begin.b)
        {
            bo = true;
        }
        if(curColor.r == end.r && curColor.g == end.g && curColor.b == end.b)
        {
            bo = false;
        }
}

function getCur(beginValue, endValue, curValue, bo, rateValue)
{
    if(beginValue == endValue)
    {
        return beginValue;
    }

    rateValue = beginValue < endValue ? rateValue : -rateValue;
    curValue += bo ? rateValue : -rateValue;
    if(curValue < Math.min(beginValue, endValue))
    {
        curValue = Math.min(beginValue, endValue);
    }
    if(curValue > Math.max(beginValue, endValue))
    {
        curValue = Math.max(beginValue, endValue);
    }

    return curValue;
}

function getRate(b, e)
{
    var obj = new Object();
    obj.r = Math.abs(b.r - e.r) / 5;
    obj.g = Math.abs(b.g - e.g) / 5;
    obj.b = Math.abs(b.b - e.b) / 5;

    return obj;
}

function getRGB(color)
{
    var obj = new Object();
    obj.r = parseInt(color.substr(1,2), 16);
    obj.g = parseInt(color.substr(3,2), 16);
    obj.b = parseInt(color.substr(5,2), 16);

    return obj;
}

function getColor(obj)
{
    obj.r = Math.round(obj.r);
    obj.g = Math.round(obj.g);
    obj.b = Math.round(obj.b);
    var color = '#';
    color += (obj.r < 16 ? '0':'') + obj.r.toString(16);
    color += (obj.g < 16 ? '0':'') + obj.g.toString(16);
    color += (obj.b < 16 ? '0':'') + obj.b.toString(16);

    return color;
}
*/
