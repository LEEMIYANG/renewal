$(function(){
    $('#header .all-menu').on('click', function(){
        $('#nav').addClass('on');
    })

    $('#nav .close i').on('click', function(){
        $('#nav').removeClass('on');
        $('#nav .gnb li ul').stop().slideUp();
    })
    
    $('#nav .gnb > li > a').on('click', function(){
        $('#nav .gnb li ul').stop().slideUp();
        $(this).find("ul").slideDown();
        // $(this).next().slideDown();
    })
})

$(function(){
    let current=0,old=0,result='';
    $('.main .bs .txt li').on('click',function(){
        
        current=$(this).index();
        $('.main .bs .txt li').removeClass('on');
        $(this).addClass('on');
        result='translate3d('+(45-current*300)+'px,0px,0px)';
        $('.mySwiper2 .swiper-wrapper').css("transform",result);
    })
})

$(function(){
    let result=['135.005','-755.985','-1646.97','-2537.96','-3428.95'];
    // ['45.0079','-254.976','-554.96','-854.944','-1154.93'];
    let cnt=0;
    let result1='';
    $('.mySwiper2 .swiper-wrapper').on('click',function(){
        
        result1=$('.mySwiper2 .swiper-wrapper').css("transform");
        for(let i=0;i<5;i++){
            if(result1=='matrix(1, 0, 0, 1, '+result[i]+', 0)')
            {
                cnt=i;
                break;
                
            }
        }
        console.log(cnt);
        $('.main .bs .txt li').removeClass('on');
        $('.main .bs .txt li').eq(cnt).addClass('on');  
        
    })
    
    
    
})
