/*
*=========================================================
	Author       : ThemeBuskets
	Template Name: Boch | A Solution to your Portfolio
	Version      : 1.0
*=========================================================
*/
(function ($) {
	'use strict';

	/*++++++++++++++++++++++++
	-----Preloader Effect-----
	++++++++++++++++++++++++++*/
	$(window).on('load', function() {
		$('#status').fadeOut();
		$('#preloader').delay(900).fadeOut('slow');
		$('body').delay(900).css({'overflow':'visible'});
		$( ".filter-list li:nth-child(1)" ).trigger( "click" )//isotope
	});
	/*++++++++++++++++++++++++
	-------Typing Effect------
	++++++++++++++++++++++++++*/
	$(".typed-effect").typed({
		strings:
		[
				'Analista',
				'Programador',
				'Coordenador'
		],
		typeSpeed: 50,
		backDelay: 500,
		loop: true
	});
	/*++++++++++++++++++++
	-----One Page Nav-----
	++++++++++++++++++++++*/
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});

	/*++++++++++++++++++++++++++++
	-----Testimonial Carousel-----
	++++++++++++++++++++++++++++++*/
	// var testcarousel = $(".testimonial-carousel");
	// testcarousel.owlCarousel({
	// 	autoPlay : false,
	// 	navigation : false,
	// 	slideSpeed : 300,
	// 	paginationSpeed : 400,
	// 	stopOnHover : false,
	// 	singleItem:true ,
	// 	mouseDrag : false,
	// 	touchDrag : false,
	// });
	// var testpage = $(".testimonial-pagination li");
	// testpage.on( 'click', function() {
	// 	testpage.removeClass("active");
	// 	$(this).addClass("active");
	// 	var JumpSlide = jQuery(this).attr('data-slide');
	// 	testcarousel.trigger('owl.goTo', JumpSlide)
	// });

	/*++++++++++++++++++++++++
	-----Portfolio Sorter-----
	++++++++++++++++++++++++++*/
	// $(".porject-container").isotope({
	// 	itemSelector: '.project-item'
	// });
	// var filterlistli = $(".filter-list li");
	// filterlistli.on( 'click', function() {
	// 	filterlistli.removeClass("active");
	// 	$(this).addClass("active");
	//
	// 		var selector = $(this).attr('data-filter');
	// 		$(".porject-container").isotope({
	// 			filter: selector,
	// 			animationOptions: {
	// 				duration: 750,
	// 				easing: 'linear',
	// 				queue: false,
	// 			}
	// 		});
	// 		return false;
	// });

	/*+++++++++++++++++++++++
	-----For Image PopUp-----
	+++++++++++++++++++++++++*/
	$('.image-popup-link').magnificPopup({
	  type: 'image',
	  mainClass: 'mfp-with-zoom',
	  zoom: {
		enabled: true,
		duration: 300,
		easing: 'ease-in-out',
		opener: function(openerElement) {
		  return openerElement.is('img') ? openerElement : openerElement.find('img');
		}
	  }
	});


	/*++++++++++++++++++++++++
	-----Sticky Menu Code-----
	++++++++++++++++++++++++++*/
	jQuery(window).bind('scroll', function() {

		 if (jQuery(window).scrollTop() > 0) {
			 jQuery('.nav-bar-area').addClass('fixed-top');
		 }
		 else {
			 jQuery('.nav-bar-area').removeClass('fixed-top');

		 }
	});

	/*++++++++++++++++++++++++++++++++++++++++++++
	-----Important for hover on mobile device-----
	+++++++++++++++++++++++++++++++++++++++++++++*/
	$(document).on("touchstart", function (e) {
		var link = $('.project-item');
		if (link.hasClass('hover')) {
			link.removeClass('hover');
		 }
	});

	/*+++++++++++++++++++++++++++++++
	----Mobile Menu hide on click----
	+++++++++++++++++++++++++++++++++*/
	$('.nav a').on('click', function(){
		if ($('#bs-example-navbar-collapse-1').hasClass('in')) {
			 $('.navbar-toggle').trigger( "click" );
		}
	});

	/*+++++++++++++++++++++++
	-----Particle Effect-----
	+++++++++++++++++++++++++*/
	document.addEventListener('DOMContentLoaded', function () {
	  particleground(document.getElementById('home'), {
		dotColor: 'rgb(49, 149, 199,.4)',
		density: 8000,
		lineColor: 'rgba(255,255,255,.1)',
		minSpeedX:.5,
		minSpeedY:.5,
		lineWidth: 2.2,
		particleRadius: 10,

	  });
	}, false);

})(jQuery);
