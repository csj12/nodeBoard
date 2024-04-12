$(document).ready(function(){
    $('#header .gnb ul li ul').hide();
    $('#header .gnb>ul>li>a').mouseenter(function() {
        $(this).addClass('on');
        $('#header .gnb ul li ul').stop().slideDown(500);
    });

    $('#header .gnb>ul>li').mouseleave(function() {
        $('#header .gnb>ul>li>a').removeClass('on');
        $('#header .gnb>ul>li>ul').stop().slideUp(500);
    });

    var imgs = $('#slide>ul>li').length-1;
    var width = $('#slide>ul>li').width();
    var now = 0;
    setInterval(function(){
        now = (now == imgs)?0:now + 1;
        $('#slide>ul').animate({
            left:-(width*now)
        });
    }, 2000);

    $('.news .gallery').hide();
    $('.news .title').click(function(){
        $(this).addClass('on').siblings('.title').removeClass('on');
        $(this).next('ul').show().siblings('ul').hide();
    });

    $('.bg, .popup').hide();
    $('.notice .active').click(function(e){
        e.preventDefault(); // 새로 고침 안 함 , 화면이 꽉 찼을 경우에 스크롤이 생기지 않는다.
        $('.bg, .popup').show();
    });

    $('.popup .close').click(function(){
        $('.bg, .popup').fadeOut(200);
    });    
});