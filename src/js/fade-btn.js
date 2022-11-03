$(document).ready(function(){
    $('.top').hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            // perform this if true
            $('.top').fadeIn();
        } else {
            // perform this if not true
            $('.top').fadeOut();
        }
    });

});