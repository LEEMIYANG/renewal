$(function () {

    // navigation 
   $(".navgnb").mouseover(function(){
    $(".sub-menu").addClass("on");
   })
   $(".navgnb").mouseout(function(){
    $(".sub-menu").removeClass("on");
   })

    // visual 영역 함수
    let $btn = $('#visual .btn');
    let $prev = $('#visual .prev');
    let $next = $('#visual .next');
    let $banner = $('#visual .banner');
    let $bannerli = $('#visual .banner li');
    let current = 0,
        old = 0;
        timer = null,
        interval = 5000,
        size = $bannerli.length;
    timer = setInterval(make, interval);
     // 비쥬얼 배너 자동 슬라이드 함수
    function make() {
        current++;
        if (current > size - 1) {
            current = 0;
        }
        if (current != old) {
            $bannerli
                .eq(current)
                .css({left: '100%'})
                .animate({
                    left: 0
                }, 600);
            $bannerli
                .eq(old)
                .css({left: 0})
                .animate({
                    left: '-100%'
                }, 600);
            old = current;
        }else{
            
        }
    }

    // 비쥬얼 배너 자동 슬라이드 일시정지
    $('#visual .banner-slide i.xi-pause')
    .on('click', function () {
        clearInterval(timer);
        $('#visual .banner-slide i.xi-pause').css({'display': 'none'});
        $('#visual .banner-slide i.xi-play').css({'display': 'block'});
    });
    // 비쥬얼 배너 자동슬라이드 시작
    $('#visual .banner-slide i.xi-play').on('click', function () {
        timer = setInterval(make, interval);
        $('#visual .banner-slide i.xi-pause').css({'display': 'block'});
        $('#visual .banner-slide i.xi-play').css({'display': 'none'});
    });


    // content1 - 이전 버튼 누르면 다음 신제품 보여주기
    let current_n = 0;
    $('.main .con1 .btn .prev')
        .unbind('click')
        .bind('click', function () {
            current_n--;
            if (current_n >= 1) {
                $('.main .con1 .c1 .new').animate({
                    left: '+=305px'
                }, 500)
            }
            if (current_n < 1) {
                current_n = 0;
            }
        })

    // content1 - 다음 버튼 누르면 다음 신제품 보여주기
    $('.main .con1 .btn .next')
    .unbind('click')
    .bind('click', function () {
        current_n++;
        if (current_n < $('.main .con1 .c1 .new li').length - 3) {
            $('.main .con1 .c1 .new').animate({
                left: '-=305px'
            }, 500)
        }
        if (current_n > $('.main .con1 .c1 .new li').length - 3) {
            current_n = $('.main .con1 .c1 .new li').length - 3;
        }
    })
            

    // content3 - 각 제품을 누르면 해당 제품 베스트아이템 순위를 보여줌
    let current1 = 0;
    $('.main .con3 .list li')
        .on('click', function () {
            current1 = $(this).index();
            $('.con3 .list>li').removeClass('on');
            $('.con3 .list>li').eq(current1).addClass('on');
            $('.con3 .best>li').removeClass('on');
            $('.con3 .best>li').eq(current1).addClass('on');
    });
            

    // content8 - 베스트 리뷰 함수
    let current8 = 0;
    // 이전 버튼을 누르면 이전 베스트 리뷰를 보여줌
    $('.breview p.btn .prev').unbind('click').bind('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        current8--;
        console.log(current8);
        if (current8 >= 1) {
            $('.slide .review').animate({
                left: '+=310px'
            }, 500)
        }
        if (current8 < 1) {
            current8 = 0;
        }
    });
    // 다음 버튼을 누르면 다음 베스트 리뷰를 보여줌
    $('.breview>p.btn>.next').unbind('click').bind('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        current8++;
        console.log(current8);
        if (current8 < $('.review li').length - 1) {
            $('.slide .review').animate({
                left: '-=310px'
            }, 500)
        }
        if (current8 > $('.review li').length - 1) {
            current8 = $('.review li').length - 1;
        }
    });
    
})