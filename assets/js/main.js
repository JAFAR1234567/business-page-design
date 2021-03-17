$('.banner-area').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:true,
	autoplay:true,
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
})
// testimonial owl 
$('.client').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:true,
	autoplay:true,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:2
			}
	}
})

// brands owl 
$('.brands').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:true,
	autoplay:true,
	responsive:{
			0:{
					items:1
			},
			600:{
					items:1
			},
			1000:{
					items:5
			}
	}
})


	// image popup 
	$('.image-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});
//video popup
	$('.video').magnificPopup({
		type:'iframe',
	});

	// counter up
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

/* Sticky Header */
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1) {
			$('.header-area').addClass("sticky");
	} else {
			$('.header-area').removeClass("sticky");
	}
});

/* One Page Nav */

$(document).ready(function() {
	$('#nav').onePageNav();
});
$('.navbar-nav').onePageNav({
	currentClass: 'current',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	easing: 'swing',
	scrollOffset: 60
});

