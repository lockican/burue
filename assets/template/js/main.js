$( document ).ready(function() {
    $('.menu-btn').click(function(){
        $(this).toggleClass('open');
        $('.header').toggleClass('header--opened'); 
    })

    $('.introduction-slider').slick({
        infinite: false,
        slidesToShow: 4,
        swipeToSlide: true
      });
});