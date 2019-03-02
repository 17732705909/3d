// 入口函数
$(function () {
    // 设置节流阀为开
    var flag = true;
    // 获取prev元素 注册点击事件
    var index = 0;
    $('.prev').on('click', function () {
        if(!flag) return
        // 设置节流阀关
        flag = false
        // li依次旋转90度
        index--;
        var angle = 90 * index + 'deg';
        $('li').css({
            'transition': 'all 1s',
            'transform': 'rotateX(' + angle + ')'
        }).each(function(i,item) {
            $(item).css({
                'transition-delay': 0.25 * i + 's'
            })
        })
    })
    $('.next').on('click', function () {
        if(!flag) return
        flag = false;
        index++;
        var angle = 90 * index + 'deg'
        $('li').css({
            'transition': 'all 1s',
            'transform': 'rotateX(' + angle + ')'
        }).each(function(i,item) {
            $(item).css({
                'transition-delay': 0.25 * i + 's'
            })
        })
    })
    // 当最后一个li归位，打开节流阀
    $('li:last-child').on('transitionend', function() {
        flag = true;
    })
})