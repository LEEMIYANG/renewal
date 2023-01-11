$(function(){

    question();
    fav();
});

function question(){
    $(".question").on("click",function(){
        $(this).next(".answer").stop().slideToggle(300);
        $(this).toggleClass("on").siblings().removeClass("on");
        $(this).next(".answer").siblings(".answer").slideUp(300);
        //1개씩 펼치기
    })
}

function fav(){
    $(window).on("scroll",function(){
        if($("html,body").scrollTop()>=2160){
            $(".circle").addClass("on");
        } 

    })
}