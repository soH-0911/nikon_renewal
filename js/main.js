$(function(){

   /******************** 스와이퍼 ************************/ 
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal" /*넘기는 방향*/,
        loop: true /*true는 루프형식*/,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true /*버튼 클릭시 섹션이동*/,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        scrollbar: {
          el: ".swiper-scrollbar",
        },
    });


    /**************** 추천제품 탭메뉴 구현 ********************/ 
    $('.tab-contents > li').hide();
    $('.tab-contents > li:first-child').show();

    $('.tab-menu li').click(function(){
        var idx = $(this).index();  // 인덱스 번호 정의내리기
        console.log($('.tab-contents li'));
        $('.tab-contents li').hide()
        $('.tab-contents li').eq(idx).show() // 인덱스 번호가 같은것끼리 show처리

        //메뉴 볼드처리
        $('button').removeClass('on');
        $(this).find('button').addClass('on');
    })

});