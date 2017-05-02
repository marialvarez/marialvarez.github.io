$(document).ready(function(){
    
            // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_h').addClass('sticky');
            } else {
                $('.main_h').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.main_h').removeClass('open-nav');
            } else {
                $('.main_h').addClass('open-nav');
            }
        });

        $('.main_h li a').click(function() {
            if ($('.main_h').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_h').removeClass('open-nav');
            }
        });

        // Navigation Scroll - ljepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });
});

/*---------SCROLL----------*/
$(window).scroll(function(event) {
    if ($(window).scrollTop()>=150) {
        event.preventDefault();
        $('body').addClass('flowers-leaves');
        $('nav').fadeIn(2000);
    } 
    else if ($(window).scrollTop()== 0) {
        $('body').removeClass('flowers-leaves');
        //$('nav').fadeOut(2000);
        $('nav').hide();
        $('.skill span').removeClass("expand ps");
    } 
});

/*---------LOADING----------*/
paceOptions = {
    startOnPageLoad : false,
// Disable the 'elements' source
    elements: false,

 // Only show the progress on regular and ajax-y page navigation,
 // not every request
    restartOnRequestAfter: false
}

/*---------PORTFOLIO----------*/
$(function() {
				$('#dg-container').gallery();
});

/*---------SKILLS----------*/
    // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

};
  
// Hook doAnimations on scroll, and trigger a scroll
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');


