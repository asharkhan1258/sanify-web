/* =====================================
Template Name: Precon
Author Name: ThemeLamp
Author URI: http://themelamp.com/
Description: Precon is a Multipurpose Business HTML5 Template.
Version:	1.0
========================================*/

(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		
		/*====================================
			Search Jquery JS
		======================================*/ 	
		$('.search a').on( "click", function(){
			$('.search-form').toggleClass('s-active');
		});
		$('.search-form i').on( "click", function(){
			$('.search-form').toggleClass('active');
		});  	
		
		/*====================================
			Sidebar Menu JS
		======================================*/ 
		$('.icon-bar').on( "click", function(){
			$('.sidebar-quick').toggleClass('active');
		});
		$('.sidebar-quick .remove').on( "click", function(){
			$('.sidebar-quick').toggleClass('active');
		});  
		
		/*====================================
			Mobile Nav JS
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			label: '',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
		
		/* News Single Slider */ 
		$('.single-news.slider .slider-active').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 600,
			arrows: false,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			pauseOnHover: false,
			dots: true,
			draggable: true,
		});

		/* Partner Slider */
		$('.partner-slider').slick({
			autoplay: true,
			autoplaySpeed: 2000,
			speed: 500,
			arrows: false,
			slidesToShow: 6,
			slidesToScroll: 1,
			pauseOnHover: false,
			dots: false,
			draggable: true,
			cssEase: 'linear',
			responsive: [{
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 4,
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
		});	
		
		/*====================================
			Isotop And Masonry Active JS
		======================================*/ 
		$('.isotop-active').masonry({
                // options
                itemSelector: '.grid-item',
            });
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.project-nav li').on('click', function() {
                    $(".project-nav li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
            });
        }
		
		/*====================================
			Counter Js
		======================================*/ 
		$('.counter').counterUp({
			time: 1000
		});
		
		/*======================================
			Parallax JS
		======================================*/ 
		$(window).stellar({
            responsive: true,
            positionProperty: 'position',
			horizontalOffset: 0,
			verticalOffset: 0,
            horizontalScrolling: false
        });
		
		/*=====================================
			Video Popup JS
		======================================*/ 
		$('.video-play').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	
		
		/*====================================
			Footer Height FIX JS
		======================================*/
		$(window).trigger("scroll");
	    $(window).trigger("resize");
		
		var $window = $(window);

		$('<div class="footer-height"></div>').insertAfter('#footer-fixed');

		$window.on('resize', function() {
			$('.footer-height').css('height', $('#footer-fixed').height());
		  })
		  .trigger('resize');

		  if ($('#footer-fixed').length) {

		}
		
		/*====================================
			Scrool Up JS
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-long-arrow-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
		
		/*====================================
			Textillate JS
		======================================*/ 	
		$('.tlt').textillate({
		  // the default selector to use when detecting multiple texts to animate
		  selector: '.texts',
		  loop: true,
		  minDisplayTime: 2000,
		  autoStart: true,
		  type: 'char'
		});
	});	
		/*====================================
			Others JS
		======================================*/ 
		$('.a').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 70
				}, 1000);
			e.preventDefault();
		});
		
		
		/*====================================
			Preloader JS
		======================================*/
		$(window).load(function(){
				$('.preloader-main').fadeOut('slow', function(){
				$(this).remove();
			});
		});
		
		
})(jQuery);

function changeDevice(type) {

  const image = document.getElementById("deviceImage");

  if(type === "mini"){
    image.src = "images/slider/download (3).webp";
  }
  else if(type === "flex"){
    image.src = "images/slider/download (2).webp"; // apni image lagana
  }
  else if(type === "station"){
    image.src = "images/slider/download (1).webp"; // apni image lagana
  }

  // active class toggle
  document.querySelectorAll(".single-choose").forEach(el => el.classList.remove("active-option"));
  event.currentTarget.classList.add("active-option");
}

const products = [
  {
    name: "Clover Flex",
    img: "https://sanifypos.com/images/clover/Clover-Benefits-Duo-1.png",
	link: "about-us.html"
  },
  {
    name: "Clover Mini",
    img: "https://sanifypos.com/images/clover/Clover-Compact-1.png",
	link: "about-us.html"
  },
  {
    name: "Clover Go",
    img: "https://sanifypos.com/images/clover/Clover-Flex-1.png",
	link: "about-us.html"
  },
  {
    name: "NRS POS",
    img: "https://sanifypos.com/images/clover/Clover-flex-pocket-1.png",
	link: "about-us.html"
  },
  {
    name: "A920 Smart Mobile",
    img: "https://sanifypos.com/images/clover/clover-go-1.webp",
	link: "about-us.html"
  },
  {
    name: "Dejavoo QD2",
    img: "https://sanifypos.com/images/home-products/slider/kiosk-3.webp",
	link: "about-us.html"
  },
   {
    name: "Dejavoo QD2",
    img: "https://sanifypos.com/images/clover/Clover-Kitchen-Display-System.png",
	link: "about-us.html"
  },
   {
    name: "Dejavoo QD2",
    img: "https://sanifypos.com/images/clover/Clover-Mini-1.png",
	link: "about-us.html"
  },
   {
    name: "Dejavoo QD2",
    img: "https://sanifypos.com/images/clover/Clover-Solo-Station-1.png",
	link: "about-us.html"
  },
];

const container = document.getElementById("productContainer");

products.forEach((product, index) => {
  container.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="card text-center p-3 shadow-sm product-card" 
           style="cursor:pointer"
           onclick="openModal(${index})">
           
        <img src="${product.img}" class="img-fluid mb-3" style="height:150px; object-fit:contain;">
        <h5>${product.name}</h5>

      </div>
    </div>
  `;
});

function openModal(index) {
  const product = products[index];

  document.getElementById("modalImg").src = product.img;
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalLink").href = product.link;

  new bootstrap.Modal(document.getElementById('productModal')).show();
}

