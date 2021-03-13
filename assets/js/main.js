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

	// magnifiy popup 
	$('.image-popup').magnificPopup({
		type:'image',
		gallery:{
			enabled:true
		}
	});

	// counter up
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});