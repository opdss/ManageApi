$(function(){
    function shadowPosition(){
        var h = $(document).height();
        var w = $(window).width();
        var gW = $('.giftBox').width();
        var recordW = $('.recording').width();
        $('.shadow').height(h);
        $('.giftBox').css({
            left:(w-gW)/2+'px'
        });
        $('.recording').css({
            left:(w-recordW)/2+'px'
        });

    }
    shadowPosition();
    //选择游戏
    function selectGame(){
        $('.select').click(function(){
            $('.game_list').show().find('a').click(function(){
                var val = $(this).text();
                $('.game_input').text(val);
                $('.game_list').hide();
				//如果选择的游戏礼包码领取完毕，显示提示文字gift_tips，不能点击确定按钮
				//$('.gift_tips').show();
				$('.cdk_btn').click(function(){
                        $(this).hide();
                        $('.cdk_input').show();
                    });
            });
        });
    }

    $(window).resize(function(){
        shadowPosition();
    });

    /**随机显示图片**/
    //1虚拟2红包3实物
    function random(n,m){
        return Math.floor(Math.random()*(m-n+1)+n);
    }
    var giftArr = [
        {
            title:'礼包码',
            key:'1',
            URL:'gamecdk.jpg'
        },
        {
            title:'5.1元红包',
            key:'2',
            URL:'money.jpg'
        },
        {
            title:'小米移动电源',
            key:'3',
            URL:'power.jpg'
        }
    ];

    $('.giftImg img').each(function(){
        var n = random(0,2);
        $(this).attr('src','images/n_'+giftArr[n].URL);
        $(this).attr('_src','images/'+giftArr[n].URL);
        $(this).attr('title',giftArr[n].title);
        $(this).attr('key',giftArr[n].key);
    });
/**随机显示图片end**/


    //点击翻牌
    $('.cardBox ul li').click(function(){
        $(".cardBox ul li").unbind('click');//连续翻动
        var _this = $(this);
        var num = _this.find('.giftImg img').attr('key');
        var test = _this.find('.giftImg img').attr('title');
        _this.addClass('change');
        setTimeout(function(){

            $('.shadow').show();
            //设置奖品弹窗的图片和文字
            $('.gift_text span').text(test);
            shadowPosition();
            if(num == 1){//判断奖品类型显示个人信息或者选择游戏
                $('.u_game').show();
                //$('.u_info').hide();
                //$('.u_btn').hide()
            }else if(num == 2){
                //$('.u_game').hide();
                //$('.u_info').hide();
                $('.u_btn').show()
            }else if(num == 3){
                //$('.u_game').hide();
                $('.u_info').show();
                //$('.u_btn').hide()
            }

        },500);

        $('.recording').hide();
        $('.u_gift').show();
        selectGame();

    });
    //关闭弹窗
    $('.closed').click(function(){
        $('.shadow').hide();
    });

    //查看获奖记录
    $('.query_btn').click(function(){
        $('.shadow').show();
        shadowPosition();
        $('.recording').show();
        $('.u_gift').hide();
        $('.u_infobox').hide();
    });
    
});
