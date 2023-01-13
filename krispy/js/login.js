$(function(){
    login();
})


function login(){
    $('#nav .gnb>li').hover(function () {
        current3 = $(this).index();
        $('#nav .gnb>li .sub').eq(current3).addClass('on');
    })
    $('#nav .gnb>li').on('mouseleave', function () {
        $('#nav .gnb>li .sub').removeClass('on');
    })
}