$(function () {
    const allmenu = document.querySelector('#nav .all-menu');
    const gnb = document.querySelector('#nav .gnb');
    const icons = document.querySelector('#nav .icons');
    allmenu.addEventListener('click', function (e) {
        e.preventDefault();
        gnb.classList.toggle('on');
    });
    // navigation function
    menu();
    newitems();
});

// menu function
function menu() {
    var gnbli = $('#nav .gnb>li')
    var menu = $('#header .menu');
    gnbli.on('mouseover', function (e) {
        e.preventDefault();
        menu.addClass('on');
    })
    menu.on('mouseleave', function (e) {
        e.preventDefault();
        menu.removeClass('on');
    })
}

// newitems section function
function newitems() {
    let $li = $('#new .items>li');
    let $prev = $('#new .btn .prev');
    let $next = $('#new .btn .next');
    let current = 0;
    let timer = null,
        interval = 6000;
    timer = setInterval(make, interval);
    function make() {
        current++;
        if (current > $li.length - 1) {
            current = 0;
        }
        $li.fadeOut(300);
        $li.eq(current).fadeIn(300);
        clearInterval(timer);
        timer = setInterval(make, interval);
    }
    $prev.on('click', function () {
        current--;
        if (current < 0) {
            current = $li.length - 1;
        }
        $li.fadeOut(300);
        $li.eq(current).fadeIn(300);
        clearInterval(timer);
        timer = setInterval(make, interval);
    })
    $next.on('click', function () {
        current++;
        if (current > $li.length - 1) {
            current = 0;
        }
        $li.fadeOut(300);
        $li.eq(current).fadeIn(300);
        clearInterval(timer);
        timer = setInterval(make, interval);
    })
};