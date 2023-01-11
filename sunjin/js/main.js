$(function () {
    let current = 0,
        old = 0,
        timer = null,
        interval = 6000;
    let $li = $('#visual .slide-img li');
    let $liimg = $('#visual .slide-img li img');
    let $prev = $('#header .btn .prev');
    let $next = $('#header .btn .next');
    timer = setInterval(make, interval)
    // banner 자동으로 넘기기
    function make() {
        current++;
        if (current > $li.length - 1) {
            current = 0;
        }
        banner();
    }
    

    // banner 페이지 버튼 누르면 해당 페이지로 이동 함수
    $('#header .paging li')
        .on('click', function () {
            current = $(this).index();
            banner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        })
        // 이전버튼 누르면 이전페이지로 이동 함수
        $prev
        .on('click', function () {
            current--;
            if (current < 0) {
                current = $li.length - 1;
            }
            banner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        })
        // 다음버튼 누르면 다음페이지로 이동 함수
        $next
        .on('click', function () {
            current++;
            if (current > $li.length - 1) {
                current = 0;
            }
            banner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        })
    // 마지막페이지에 도달했을때 다시 첫 페이지로 이동함수
    function banner() {
        $('#header .paging li').removeClass('on');
        $('#header .paging li').eq(current).addClass('on');
        $liimg.fadeOut();
        $liimg.eq(current).fadeIn(1000);
        old = current;
    }
    
})
// banner

// con2 섹션
$(function () {
    let current = 0;
    let $imgli = $('.main .con2 .img-b li');
    let $slideli = $('.main .con2 .slide-busi li');

    // 버튼 클릭시 해당 사업소개 이미지로 이동 함수
    $slideli.on('click', function () {
        current = $(this).index();
        $imgli.removeClass('on');
        $imgli.eq(current).addClass('on');
        $slideli.removeClass('on');
        $slideli.eq(current).addClass('on');
    })
})

// con3 섹션 - 혁신센터 슬라이드 넘기기 함수
$(function () {
    let current = 0,
        old = 0;
    let $prev = $('.main .con3 .btn .left');
    let $next = $('.main .con3 .btn .right');
    let $list = $('.main .con3 .list');
    let $li = $('.main .con3 .list li');
    let first = '',
        last = '';
    first = $('.main .con3 .list li').first();
    $list.prepend(first);
    $list.css({marginLeft: '1000'});
    $next.on('click', function () {
        current++;
        if (current > $li.length - 1) {
            current = 0;
        }
        $li.removeClass('on');
        $li.eq(current).addClass('on');
        $list.animate({
            marginLeft: '-=1002'
        }, 400, function () {
            first = $('.main .con3 .list li').first();
            $list.append(first);
            $list.css({marginLeft: '+=1002'})
        })
    })
    $prev.on('click', function () {
        current--;
        if (current < 0) {
            current = $li.length - 1;
        }
        $li.removeClass('on');
        $li.eq(current).addClass('on');
        $list.animate({
            marginLeft: '+=1002'
        }, 400, function () {
            last = $('.main .con3 .list li').last();
            $list.prepend(last);
            $list.css({marginLeft: '-=1002'})
        })
    })
})

// con7 섹션 - sns 슬라이드 넘기기
$(function () {
    let current = 0;
    let $prev = $('.main .con7 .btn .left');
    let $next = $('.main .con7 .btn .right');
    let $list = $('.main .con7 .sns');
    let $li = $('.main .con7 .sns li');
    let first = '',
        last = '';
    first = $('.main .con7 .sns li').first();
    $list.prepend(first);
    $list.css({marginLeft: '1000'});
    $next.on('click', function () {
        $list.animate({
            marginLeft: '-=535'
        }, 400, function () {
            first = $('.main .con7 .sns li').first();
            $list.append(first);
            $list.css({marginLeft: '+=535'})
        })
    })
    $prev.on('click', function () {
        $list.animate({
            marginLeft: '+=535'
        }, 400, function () {
            last = $('.main .con7 .list li').last();
            $list.prepend(last);
            $list.css({marginLeft: '-=535'})
        })
    })
})