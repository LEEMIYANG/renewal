$(function () {
    mainBanner();
    tech();
    busi();
})

// visual banner 함수
function mainBanner() {
    let current = 0,
        total = 0,
        timer = null,
        interval = 6000,
        cnt = 0;
    let $bannerli = $('#visual .slide-img li');
    let $next = $('#header .next');
    let $prev = $('#header .prev');
    let $btn = $('#header .page .btn')
    let $btni = $('#header .page .btn i');
    total = $bannerli.length;
    document.querySelector('#header .page p.paging').innerText = current + 1 + '/' + total;
    timer = setInterval(make, interval);
    function make() {
        current++;
        if (current > total - 1) {
            current = 0;
        }
        document.querySelector('#header .page p.paging').innerText = current + 1 + '/' + total;
        banner();
    }
    $next
        .click(function () {
            current++;
            if (current > total - 1) {
                current = 0;
            }
            document.querySelector('#header .page p.paging').innerText = current + 1 + '/' + total;
            banner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        })
        $prev
        .click(function () {
            current--;
            if (current < 0) {
                current = total - 1;
            }
            document.querySelector('#header .page p.paging').innerText = current + 1 + '/' + total;
            banner();
            clearInterval(timer);
            timer = setInterval(make, interval);
        })
        $btni
        .click(function () {
            if (cnt == 0) {
                $btni.removeClass();
                $btni.addClass('xi-play');
                clearInterval(timer);
                cnt = 1;
            } else {
                $btni.removeClass();
                $btni.addClass('xi-pause');
                timer = setInterval(make, interval);
                cnt = 0;
            }
        })
    function banner() {
        $bannerli.fadeOut();
        $bannerli.eq(current).fadeIn();
    }
}

// tech 영역 함수
function tech() {
    let $next = $('.main .con1 .title .slide .next');
    let $prev = $('.main .con1 .title .slide .prev');
    let $techno = $('.main .con1 .tech');
    let $technoli = $('.main .con1 .tech li');
    let first = '',
        last = '';
    first = $('.main .con1 .tech li').first();
    $techno.prepend(first);
    $techno.css({marginLeft: '0'});
    $prev.on('click', function () {
        $techno.animate({
            marginLeft: '+=541'
        }, 400, function () {
            last = $('.main .con1 .tech li').last();
            $techno.prepend(last);
            $techno.css({marginLeft: '-=541'})
        })
    })
    $next.on('click', function () {
        $techno.animate({
            marginLeft: '-=541'
        }, 400, function () {
            first = $('.main .con1 .tech li').first();
            $techno.append(first);
            $techno.css({marginLeft: '+=541'})
        })
    })
}

// business 영역
function busi() {
    let first = '',
        last = '',
        current = 0,
        old = 0,
        n = 0,
        isplay = true;
    let $imgli = $('.con2 .bs li');
    let $img = $('.con2 .bs li img');
    let $bs = $('.con2 .bs');
    let $bstxtli = $('.con2 .bs-txt li');
    let $btn = $('.con2 .bs-txt li button');
    let $txt = $('.con2 .bs li .txt');
    let w = 0;
    last = $('.con2 .bs li').last();
    $bs.prepend(last);
    $bs.css({marginLeft: '-=w'});
    $bstxtli.on('click', function () {
        current = $(this).index();
        w = $imgli.eq(current).width();
        if (current > old) {
            n = current - old;
            for (let i = 0; i < n; i++) {
                first = $('.con2 .bs li').first();
                $bs.append(first);
                if (current == 0) {
                    $bs.css({
                        marginLeft: - w
                    });
                } else {
                    $bs.css({
                        marginLeft: 400 - w
                    });
                }
            }
            old = current;
        } else if (current < old) {
            n = old - current;
            for (let i = 0; i < n; i++) {
                last = $('.con2 .bs li').last();
                $bs.prepend(last);
                $bs.css({
                    marginLeft: 400 - w
                });
            }
            old = current;
        }
        $bstxtli.removeClass('on');
        $bstxtli.eq(current).addClass('on');
        $imgli.removeClass('on');
        $imgli.eq(current).addClass('on');
        old = current;
    })
}

// 페이지섹션 빠른이동버튼 함수
$(function () {
    $(window).scroll(function () {
        var navbar = $(this).scrollTop();
        var $page = $('#header .page');
        var $header = $('header');
        var $slideup = $('#header .slide-up');
        let $slidelia = $('#header .slide li a');
        let $slideliaon = $('#header .slide li.on a');
        let $slideliaspan = $('#header .slide li a span');
        let $slideli = $('#header .slide li');
        let h = $('header').height();
        let ty = 0,
            top = 0;
        let posY = [];
        let current = 0;
        if (navbar > 0) {
            $page.css("display", "none");
            $slideup.css('display', 'none');
        } else {
            $page.css("display", "block");
            $slideup.css("display", "block");
        } $slideli.on('click', function () {
            current = $(this).index();
            $slideli.removeClass();
            $slideli.eq(current).addClass('on');
        })
        posY[0] = 0;
        for (let i = 0; i < 7; i++) {
            posY[i + 1] = $('.con-box')
                .eq(i)
                .offset()
                .top;
        }
        $(window).on('scroll', function () {
            top = $(window).scrollTop();
            if (top <= posY[1] && top >= posY[0]) {
                $slideli.removeClass('on');
                $slideli.eq(0).addClass('on');
            }
            for (let i = 1; i < 8; i++) {
                if (top > posY[i]) {
                    $slideli.removeClass('on');
                    $slideli.eq(i).addClass('on');
                }
            }
        })
        if (navbar > 860) {
            $header.addClass('down');
        } else {
            $header.removeClass('down');
        }
    })
})