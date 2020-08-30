$(document).ready(function(){
  // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid_select',
    });
    // filter items on button click
    $('.isotop_button').on( 'click', 'p', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.testimonial_active').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        // autoplay:true,
        // autoplaySpeed: 4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.counter').counterUp({
		delay: 100,
        time: 10000
	});   
})