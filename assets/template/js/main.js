$( document ).ready(function() {
    $('.menu-btn').click(function(){
        $(this).toggleClass('open');
        $('.header').toggleClass('header--opened'); 
    })
    
    $('.realization_btn').click(function(){
        if($(this).closest('.realization_tab').hasClass('active')){
       
            $(this).closest('.realization_tab').removeClass('active')
            return
        }

        $('.realization_tab').removeClass('active')
        $(this).closest('.realization_tab').addClass('active')
       
    })

  
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});