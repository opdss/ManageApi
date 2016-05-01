/**
 * Created by vanki on 16/5/1.
 */
$(function () {
    setNavAndBodyMargin(20);
});

/**
 * 设置导航栏与主体间距
 * @param height 主体距导航栏间隔高度
 */
var setNavAndBodyMargin = function (height) {
    var nav_height = $('.v_navbar').css('height');  // 导航栏高度
    $('.v_head').css('margin-bottom',
        (Number(nav_height.replace('px', '')) + height) + 'px');
}