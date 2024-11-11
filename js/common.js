
$(function(){
    /******************* 헤더 *********************/ 
    
    
    let $firstMenu = $('nav > ul > li'),
        $header = $('header');

    $firstMenu.mouseenter(function(){
        $header.stop().animate({height: '360px', 'background-color' : 'rgba(255, 255, 255, 1)', color: '#262626'}, 300);
        $('.header-right-btn .icon-link').attr({src : './images/header_img/icon-link(k).png'}, 200);
        $('.header-right-btn .icon-heart').attr({src : './images/header_img/icon-heart(k).png'}, 200);
        $('.header-right-btn .icon-search').attr({src : './images/header_img/icon-search(k).png'}, 200);
    })
    .mouseleave(function(){
        $header.stop().animate({height: '104px', 'background-color' : 'rgba(255, 255, 255, 0)', color: '#fff'}, 300);
        $('.header-right-btn .icon-link').attr({src : './images/header_img/icon-link.png'}, 200);
        $('.header-right-btn .icon-heart').attr({src : './images/header_img/icon-heart.png'}, 200);
        $('.header-right-btn .icon-search').attr({src : './images/header_img/icon-search.png'}, 200);
    });




    /******************* 맨 위로 이동 *********************/ 
    $('.go-top').click(function(e){
        e.preventDefault();
        $('html, body').stop(true).animate({scrollTop: 0})
    });


    // 체크박스 2개까지 제한
    $("input[type='checkbox']").on("click", function(){
        let count = $("input:checked[type='checkbox']").length; /*체크된 개체 갯수 구하기*/

        if(count > 2) {
            $(this).prop("checked", false);
            alert("비교 제품은 최대 2개까지만 선택 가능합니다.")
        }

        console.log(count);
    });

    // 하트 찜
    $(".product-item button").click(function(){
        $(this).toggleClass("on");
    });



})