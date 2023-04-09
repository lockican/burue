$( document ).ready(function() {
    $('.menu-btn').click(function(){
        $(this).toggleClass('open');
        $('.header').toggleClass('header--opened'); 
    })
 
});