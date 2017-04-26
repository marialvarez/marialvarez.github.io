$(document).ready(function(){
    
    $(this).scrollTop(0);
    
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   
    $('body').scrollspy({target: "#down-chevron", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a, #down-chevron").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
         // Prevent default anchor click behavior
            event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        }  // End if
    });
    
        $(".hover").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
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


