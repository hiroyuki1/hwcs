$(function(){
    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('is-active');
    });
  });
  $('.menu__item a[href]').on('click', function(event) {
    $('.menu-btn').trigger('click');
});

// ふわっと
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.scrollanime').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 50) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});
// ふわっとオンロード
window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('effect-scroll');
      }
     });
    }
  };

//ふわっと右から左
$(function(){
    $(window).scroll(function (){
        $('.right-to-left, .down-to-top, .left-to-right, .fade').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 10){
                $(this).addClass('scrollin');
            }
        });
    });
});