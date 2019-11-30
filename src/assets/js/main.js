 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

 $("a.fancybox").click(function() { 
	$.fancybox({ 
	   'padding'           : 0, 
	   'overlayShow'   : false, 
	   'href': this.href, 
	   'transitionIn'  : 'elastic', 
	   'transitionOut' : 'elastic', 
	   'titlePosition' : 'over', 
	   'type' : 'image', 
	   'titleFormat'   : function(title, currentArray, 
currentIndex, currentOpts) { 
		return '<span id="fancybox-title-over">' + (currentIndex + 
1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + 
title : '') + '</span>'; 
	   } 
	}); 
	return false; 
}); 

jQuery(document).ready(function($) {
	"use strict";

	//Fancybox korjaa!
	var fancyBox = function(){
		
		$(".fancybox").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none',
			type : "image"
		});
	}

	fancyBox();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
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
	};
	// siteMagnificPopup();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var toggleExpand = function() {
		$('body').on('click', '.swiper-slide-active .btn-toggle-expand', function() {
			if ( $(this).hasClass('active') ) {
				$('.swiper-slide-active .img-info-content').removeClass('active');
				$(this).closest('.img-info').animate({
						height: 60,
						width: 60
					}, 400);	
					$(this).removeClass('active');	
			} else {
				$(this).addClass('active');

				$(this).closest('.img-info').addClass('active')
				$(this).closest('.img-info').animate({
					height: 200,
					width: 400
				}, 400);

				setTimeout(function() {
					$('.swiper-slide-active .img-info-content').addClass('active');
				}, 500);
			}
		}); 

	};
	toggleExpand();

	var swiperEvents = function() {

		var galleryThumbs = new Swiper('.gallery-thumbs', {
			slidesPerView: 10,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 10,
      breakpoints: {
        1024: {
          slidesPerView: 10, 
        },
        768: {
          slidesPerView: 7, 
        },
        640: {
          slidesPerView: 4, 
        },
        320: {
          slidesPerView: 3,
        }
      }
    });
    var galleryTop = new Swiper('.gallery-top', {
    	autoplay: true,
    	effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });

	};

	if ( $('.gallery-thumbs').length > 0 ) {
		swiperEvents();
	}

	// $('.scrollbar-inner').scrollbar();

});