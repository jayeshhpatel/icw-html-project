jQuery(document).ready(function ($) {
  function isMobile() {
    return $(window).width() < 1024;
  }

  $(".features-wrapper").on("click", function () {
    $(this).toggleClass("active");
    $(this).find(".feature-image").toggle();
  });

  if($(".twitter-tweert").length) {
    $(".twitter-tweert iframe").attr("scrolling", "yes");
  }

  if($(".hljs-keyword").length) {
    $(".hljs-keyword").prepend("<br>");
  }

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  function throttle(fn, wait) {
    var time = Date.now();
    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  }
 
  if($("#background-video-footer").length) {
    $(window).on(
      "resize scroll",
      throttle(function () {
        $("#background-video-footer").each(function () {
          let id = $(this).attr("id");
          let played = $(this).attr("played");

          if ($("#background-video-footer").isInViewport()) {
            if (played == "false") {
              $(this)[0].play();
              $(this).attr("played", "true");
            }
          } else {
            $(this).attr("played", "false");
            this.currentTime = 0;
          }
        });
      }, 1000)
    );
  }

  let SwiperTop = new Swiper(".swiper--top", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    slidesPerView: 'auto',
    // breakpoints: {
    //   1023: {
    //     slidesPerView: 6,
    //   },
    //   767: {
    //     slidesPerView: 4,
    //   },
    //   200: {
    //     slidesPerView: 2,
    //   },
    // },
  });
  let SwiperStrip = new Swiper(".swiper--strip", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    // breakpoints: {
    //   1023: {
    //     slidesPerView: 6,
    //   },
    //   767: {
    //     slidesPerView: 5,
    //   },
    //   200: {
    //     slidesPerView: 3,
    //   },
    // },
  });
  $(".swiper--strip .swiper-container").each(function (elem, target) {
    var swp = target.swiper;
    $(this).hover(
      function () {
        swp.autoplay.stop();
      },
      function () {
        swp.autoplay.start();
      }
    );
  });
  let SwiperTestimonial = new Swiper(".join-one", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    effect: "fade",
    speed: 0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  let SwiperTestimonial2 = new Swiper(".join-two", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    effect: "fade",
    speed: 0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  let SwiperTestimonial3 = new Swiper(".join-three", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    effect: "fade",
    speed: 0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  let SwiperTestimonial4 = new Swiper(".join-four", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    effect: "fade",
    speed: 0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  let SwiperTestimonial5 = new Swiper(".join-five", {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    effect: "fade",
    speed: 0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  let SwiperTestimonialMobile = new Swiper(".slide-mobile .slide-con", {
    spaceBetween: 50,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    allowTouchMove: true,
    disableOnInteraction: true,
    // effect: "fade",
    // speed:0.1,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });


  $(".mobile-menu-trigger").on("click", function () {
    $(".mobile-menu-wrapper").fadeToggle(400).toggleClass("active");
  });

  // header-sticky
  if ($("#site-header").length) {
    if (jQuery(this).scrollTop() > 100) {
      $("#site-header").addClass("header-active");
    } else {
      $("#site-header").removeClass("header-active");
    }

    $(window).scroll(function () {
      if (jQuery(this).scrollTop() > 100) {
        $("#site-header").addClass("header-active");
      } else {
        $("#site-header").removeClass("header-active");
      }
    });
  }

  // menu-collpase
  $("#main-menu").accessibleDropDown();
  if ($("li.menu-item-has-children").length) {
    $("li.menu-item-has-children > a").after(
      '<button type="button" class="arrow" tabindex="-1" aria-label="Dropdown Menu"></button>'
    );

    $("li.menu-item-has-children > a[rel]").each(function (index, value) {
      $(this)
        .parents("li.menu-item-has-children")
        .find("ul.sub-menu")
        .attr("data-rel", this.rel);
    });
  }

  $(".menu-item-has-children .arrow").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("is-active");
    $(this).parent().find(".sub-menu").first().toggle(300);
    $(this).parent().siblings().find(".sub-menu").hide(200);
  });

  $("ul.faq > li > .question").on("click", function () {
    let toOpen = $(this).siblings("p");
    if ($(this).parents("li").hasClass("active")) {
      if (isMobile()) {
        toOpen.slideUp("fast");
      } else {
        $("ul.faq > li > .answer").slideUp("fast");
        toOpen.slideUp("fast");
      }
      $(this).parents("li").removeClass("active");
      $(this).find(".title-icon img").css("transform", "scale(1)");
    } else {
      //$('ul.faq > li').removeClass('active');
      //$('ul.faq > li > .answer').slideUp(300);
      if (isMobile()) {
        toOpen.slideDown("fast");
      } else {
        $("ul.faq > li > .answer").slideUp("fast");
        $("ul.faq > li").removeClass("active");
        toOpen.slideDown("fast");
      }
      $(this).parents("li").addClass("active");
      $(this).find(".title-icon img").css("transform", "scale(-1)");
    }
  });

  $(".more-faq, .more-angels").on("click", function (e) {
    $(".faq li, .angelcard").css("display", "block");
    $(".more-faq, .more-angels").css("display", "none");
    $(".close-faq, .close-angels").css("display", "flex");
    e.preventDefault();
  });

  $(".close-angels").on("click", function (e) {
    $(".faq li:nth-child(n+8), .angelcard:nth-child(n+9)").css(
      "display",
      "none"
    );
    $(".more-angels").css("display", "flex");
    $(".close-angels").css("display", "none");
    e.preventDefault();
  });

  $(".close-faq").on("click", function (e) {
    $(".faq li:nth-child(n+4), .angelcard:nth-child(n+5)").css(
      "display",
      "none"
    );
    $(".more-faq").css("display", "flex");
    $(".close-faq").css("display", "none");
    e.preventDefault();
  });

  $('.hash-target').click(function(){
      $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 81
      }, 100);
      return false;
  });

  if($('.play-iframe').length){
    $('.play-iframe').click(function(ev){	
        videourl = $(this).data('videosrc')+"?api=1&autoplay=1&muted=1&rel=0&enablejsapi=1";
        if($(this).data('ext') == 'mp4'){
            video = '<div class="video-wrap"><video class="embed-responsive-item" controls autoplay controlsList="nodownload" oncontextmenu="return false;"><source src="'+videourl+'" type="video/mp4"></video></div>';
        } else {
            video = '<div class="video-wrap"><iframe class="embed-responsive-item play-in_iframe" src="'+videourl+'" controls="0" scrolling="no" autoplay="false" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
        $(this).html(video);
        //$(this).parents('.play-video-block').html(video);
        ev.preventDefault();
    });
  }

  if($('.icw-gallery-sider').length){
    var swiperGallery = new Swiper(".icw-gallery-sider", {
      spaceBetween: 20,
      autoHeight: true,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".icw-swiper-button-next",
        prevEl: ".icw-swiper-button-prev"
      },
      grabCursor: true,
      // effect: "creative",
      // creativeEffect: {
      //   prev: {
      //     // shadow: true,
      //     translate: [0, 0, -400],
      //   },
      //   next: {
      //     translate: ["100%", 0, 0],
      //   },
      // },
    });
  }

  if($('.customer-review--slider').length){
    var swiperVsReview = new Swiper(".customer-review--slider", {
      grabCursor: true,
      slidesPerView: "auto",
      navigation: {
          nextEl: '.icw-swiper-button-next',
          prevEl: '.icw-swiper-button-prev',
      },
    });
  }

  if($('.features--slider').length){
    var swiperFeaturesReview;
    function swiperFeaturesReviewSlider() {
        swiperFeaturesReview= new Swiper(".features--slider", {
        grabCursor: true,
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: ".icw-swiper-scrollbar",
          hide: true,
        },
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      });
      
    }
    if ($(window).width() < 1200) {
      swiperFeaturesReviewSlider();
    }

    $(window).resize(function() {
      if ($(window).width() < 1200) {
        swiperFeaturesReviewSlider();
      } else {
        this.location.reload(false);
        swiperFeaturesReview.disable();
        swiperFeaturesReview.destroy();
      }
    });

    /*
    var swiperFeaturesReview = new Swiper(".features--slider", {
      grabCursor: true,
      slidesPerView: "auto",
      freeMode: true,
      scrollbar: {
        el: ".icw-swiper-scrollbar",
        hide: true,
      },
    });
    */
  }

  if($('.reviewSlider').length){
    var swiper = new Swiper(".reviewSlider", {
      pagination: {
          el: ".icw-swiper-pagination",  
          clickable: true,              
      }, 
      loop: true,
      autoplay: {
          delay: 6000
      },
  });
  }

  // $.fn.isInViewport = function () {
  //   var elementTop = $(this).offset().top;
  //   var elementBottom = elementTop + $(this).outerHeight();

  //   var viewportTop = $(window).scrollTop();
  //   var viewportBottom = viewportTop + $(window).height();

  //   return elementBottom > viewportTop && elementTop < viewportBottom;
  // };

  if (!isMobile()) {
    /*
    var swiperLottie = new Swiper(".lottie-section", {
      //direction: "vertical",
      spaceBetween: 220,
      loop: true,
      // effect: "fade",
      speed: 0,
      // fadeEffect: {
      //   crossFade: true,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        activeIndexChange: function () {
          if (this.activeIndex > 3) {
            this.el
              .querySelectorAll(".swiper-slide")
              [this.activeIndex].classList.add("show-op");
            setTimeout(() => {
              this.el
                .querySelectorAll(".swiper-slide")
                [this.activeIndex].classList.remove("show-op");
            }, 3000);
          }
        },
      },
    });
  */

    var swiperLottie = new Swiper(".lottie-section-product", {
      autoplay: {
        delay: 12000
      },
      spaceBetween: 20,
      
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      on: {
        activeIndexChange: function () {
          if (this.activeIndex >= 3) {
            this.el
              .querySelectorAll(".swiper-slide")
              [this.activeIndex].classList.add("show-op");
            setTimeout(() => {
              this.el
                .querySelectorAll(".swiper-slide")
                [this.activeIndex].classList.remove("show-op");
            }, 1000);
          }
        },
      },
      breakpoints: {
        1200: {
          spaceBetween: 220,
        },
        767: {
          spaceBetween: 20,
        },
        200: {
          spaceBetween: 20,
        },
      },
    });
  
    let start = false;
    const player = document.querySelectorAll("lottie-player");
      if ($("lottie-player").length) {
        $(window).on(
          "resize scroll",
          throttle(function () {
            if ($("lottie-player").isInViewport()) {
              if ($("lottie-player").data("played") == "false") {
                player[swiperLottie.activeIndex].play();
  
                $("lottie-player").data("played", "true");
              }
              start = true;
            } else {
              $("lottie-player").data("played", "false");
            }
          }, 500)
        );
      }
  
      swiperLottie.on("slideChange", function () {
        var activeIndex = swiperLottie.realIndex;
        if (player[activeIndex]) {
          player[activeIndex].seek(0);
          player[activeIndex].play();
        }
      });
  
      player.forEach((ply) => {
        ply.addEventListener("complete", () => {
          setTimeout(() => {
            // if (swiperLottie && player[swiperLottie.activeIndex]) {
              swiperLottie.slideNext();
              player[swiperLottie.realIndex].seek(0);
              player[swiperLottie.realIndex].play();
            // }
          }, 0);
        });
      });
      let i = 0;
  }

  if($('.feautre-code-slider').length){
    function initCodeSwiper() {
      var swiperCode = new Swiper(".feautre-code-slider", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 0,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 6000
        },
      });
    }
      // Initialize Swiper on page load
    initCodeSwiper();
  }

  /* scroll page to top */
  if (jQuery('.back-to-top').length) {
    jQuery(window).scroll(function() {
      if(jQuery(this).scrollTop() > 1080) {
          jQuery('.back-to-top').addClass('visible');	
      } else {
          jQuery('.back-to-top').removeClass('visible');
      }
    });
    jQuery('.back-to-top').on('click', function(e){
      e.preventDefault();
      jQuery('body,html').animate({scrollTop:0},50);
    });
  }

  if (jQuery('.grid-swiper-slider').length) {
    new Swiper('.grid-swiper-slider', {
      loop: true,
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 20,
      effect: "fade",
      hashNavigation: {
        watchState: true,
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          delay: 10000,
      },
    });
  }

});

// hide on scroll down, reveal on up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("site-header");
window.addEventListener("scroll", function (e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("slideDown");
    header.classList.add("slideUp");

    // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("slideUp");
    header.classList.add("slideDown");
  }
  new_scroll_position = last_scroll_position;
});

jQuery.fn.accessibleDropDown = function () {
  jQuery("#main-menu a")
    .focus(function () {
      jQuery(this).parents("li").addClass("hover");
    })
    .blur(function () {
      jQuery(this).parents("li").removeClass("hover");
    });
};

// ICW-modal @ jayesh@InCreativeWeb.com (https://codepen.io/jayeshhpatel/pen/QWzrBaR)
if (jQuery('.icw-modal-action').length) {
const icwModelAction = document.querySelectorAll(".icw-modal-action");
// if (icwModelAction.length === 0) {
// Loop through each icwAction to attach click event listeners
icwModelAction.forEach(icwAction => {
    const icwModalId = icwAction.getAttribute("data-modal");
    const icwModal = document.getElementById(icwModalId);
    const icwModalClose = icwModal.querySelector(".icw--modal-close");

    function icwCloseModal() {
        document.querySelector('body').classList.remove('overflow-hidden');
        // document.querySelector('.homepage-hero').style.cssText = `z-index: unset; position: relative;`;
        document.querySelector('.icw--modal-wrapper').style.cssText = `-webkit-animation:gzoomOut .5s ease;animation:gzoomOut .5s ease;`; 
        setTimeout(function () {
            icwModal.classList.remove("show"); 
        }, 100);
    }
    function icwOpenModal() {
        icwModal.classList.add("show"); 
        // document.querySelector('.homepage-hero').style.cssText = `z-index: 1000; position: relative;`;
        document.querySelector('.icw--modal-wrapper').style.cssText = ``; 
        setTimeout(function () {                    
            document.querySelector('body').classList.add('overflow-hidden');
        }, 500);
    }
    icwAction.addEventListener("click", function (e) {
        icwOpenModal();
    });
    icwModalClose.addEventListener("click", function (e) {
        icwCloseModal();
    });
    // modal.addEventListener("click", function (e) {
    //     if (e.target.tagName === "DIALOG") {
    //     icwCloseModal();
    //     }
    // });
});
}