$(function () {
    let current = 1;
    $('.main .con1 .btn .prev')
        .unbind("click")
        .bind("click", function (e) {
            e.preventDefault();
            current--;
            if (current < 0) {
                current = 0;
            } else {
                $('.main .con1 .c1 .month').animate({
                    left: '+=455px'
                }, 500);
                $('.main .con1 .c1 .month li').removeClass('on');
                $('.main .con1 .c1 .month li').eq(current).addClass('on');
            }
        })
        $('.main .con1 .btn .next')
        .unbind("click")
        .bind("click", function (e) {
            e.preventDefault();
            current++;
            console.log(current);
            if (current >= $('.main .con1 .c1 .month li').length) {
                current = $('.main .con1 .c1 .month li').length - 1;
            } else {
                $('.main .con1 .c1 .month').animate({
                    left: '-=455px'
                }, 500);
                $('.main .con1 .c1 .month li').removeClass('on');
                $('.main .con1 .c1 .month li').eq(current).addClass('on');
            }
        });
    let interval = 3000;
    timer = null,
    cnt = 0,
    first = '';
    timer = setInterval(function () {
        cnt ++;
        if (cnt > $('.main .con3 .ewrap .event li').length - 1) {
            cnt = 0;
        }
        first = $('.main .con3 .ewrap .event li').first();
        $('.main .con3 .ewrap .event').append(first);
    }, interval)
    let current3 = 0;
    $('#nav .gnb>li').hover(function () {
        current3 = $(this).index();
        $('#nav .gnb>li .sub').eq(current3).addClass('on');
    })
    $('#nav .gnb>li').on('mouseleave', function () {
        $('#nav .gnb>li .sub').removeClass('on');
    })
});