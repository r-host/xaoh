$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
		var header = jQuery('#header');

		if ( top > 300 ) {
			$('.navbar-main').addClass('stiky');
		}else {
			$('.navbar-main').removeClass('stiky'); 
		}
	});
	

	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
		//animation: "fade",
		play: 5000,
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true,
		
	});
	
	/* =================================
	COUNTER
	=================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


	/* =================================
	OWL
	=================================== */
	
	var caro = $("#testimonial");
	caro.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
	});
	
	var owl = $("#owl-testimony");
	owl.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 3,
		//nav: true,
		//navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:3
			}
		}
	});

	var testimony2 = $("#testimony2");
	testimony2.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 2,
		//nav: true,
		//navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});

	var popularPost = $("#popular-post");
	popularPost.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
		margin: 10,
	});
	
	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});  
	
	/* =================================
	ISOTOP
	=================================== */	

	$('.grid').isotope({
		itemSelector: '.grid-item',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer'
		}
	});

	$('.grid2').isotope({
		itemSelector: '.grid-item2',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer2',
			gutter: '.gutter-sizer2'
		}
	});

	var $grid = $('.grid3');
	$grid.isotope({
		itemSelector: '.grid-item3',
		isFitWidth: true,
		masonry: {
			columnWidth: '.grid-sizer3'
		}
	});

	var $gridv1 = $('.grid-v1');
	$gridv1.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.photo',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});
	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv1.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});

 	var $gridv2 = $('.grid-v2');
	$gridv2.isotope({
		itemSelector: '.grid-item-v1',
		isFitWidth: true,
		filter: '.graphic',
		masonry: {
			columnWidth: '.grid-sizer-v1'
		}
	});
	$('.portfolio_filter a').on('click', function() {
 		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');
 
		var selector = $(this).attr('data-filter');
		$gridv2.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine : "jquery"
			}
		});
		return false;
 	});

	/* =================================
	jQuery.YoutubeBackground
	=================================== */
	$('#video').YTPlayer({
	    fitToBackground: true,
	    videoId: '5ZmVn25vs-k'
	});



	/* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

	/* =================================
	SKILLBAR
	=================================== */
	$('.skill-progress .skill').each(function () {
	    var $this = $(this);
	    var myVal = $(this).data("value");
	    var mypercent = $(this).attr("data-percent");
	    var targetbox = $(this).children('.outer-box');
	    $this.appear(function() {
	        $(window).one('scroll', function() {
	            progress(mypercent, $(targetbox));
	        });
	    });

  		function progress(percent, $element) {
          	var myItem = $element.children('div');
          	myItem.append('<span></sapn>');

          	var progressBarWidth = percent * $element.width() / 100;
          	$element.find('div').animate({ width: progressBarWidth }, 2000).find('span').html(percent + "% ");
      	}
  	});

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.grid, .grid-v1, .grid-v2').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '';
			}
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
	

});




  
  