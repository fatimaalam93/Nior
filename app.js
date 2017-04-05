$(document).ready(function(){
	new WOW().init();

	$('.owl-carousel').owlCarousel({
		autoplay:true,
    loop:true,
    margin:2,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
});
});