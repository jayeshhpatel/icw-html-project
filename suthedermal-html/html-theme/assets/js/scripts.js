jQuery(document).ready(function ($) {
  let prodGallery = $(".product-gallery-slider");
  let thumbnails = $(".product-gallery-thumbnails-slider .product-image-thumbnail");
  let thumbCont = $(".product-gallery-thumbnails-slider"); 

  prodGallery.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    adaptiveHeight: true,
    asNavFor: '.product-gallery-thumbnails-slider',
    arrows: false
  }); 

  thumbCont.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    speed: 400,
    adaptiveHeight: true,
    asNavFor: '.product-gallery-slider',
    arrows: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: true,
        useCSS: false
      }
    }]
  });

  if (thumbnails.length <= 20) {
    thumbCont.slick('unslick');
    thumbCont.addClass("unslick");
    $(".product-image-thumbnail:first-of-type").addClass("active");
    $(".product-image-thumbnail").on("click", function () {
      let index = $(this).data("slide");
      prodGallery.slick('slickGoTo', index);
      $(".product-image-thumbnail").removeClass("active");
      $(this).addClass("active");
    });
  } 


  $(".hamburger").on("click", function () {
    $(this).toggleClass("open");
    $(".site-content").toggleClass("open");
    $(".nav-menu").toggleClass("open");
  }); 

  let qtyPlus = $('.quantity .qty-plus');
  let qtyMinus = $('.quantity .qty-minus');
  let cartForm = $('form.woocommerce-cart-form');
  let updateCart = $("[name='update_cart']");
  qtyPlus.on("click", function () {
    let input = $(this).siblings('input.qty');
    let currentVal = Number(input.val());
    let newVal = currentVal + 1;
    let qtyMinus = document.querySelector(".qty-minus");
    console.log("plus"); 

    input.val(newVal);

    if (newVal > 1) {
      qtyMinus.style.opacity = "1";
      qtyMinus.style.pointerEvents = "auto";
    } 


    if (cartForm !== undefined && cartForm !== null) {
      updateCart.attr('disabled', false);
      setTimeout(function () {
        updateCart.trigger("click");
      }, 500);
    }
  });
  qtyMinus.on("click", function () {
    let input = $(this).siblings('input.qty');
    let currentVal = Number(input.val());
    let newVal = currentVal - 1;
    let qtyMinus = document.querySelector(".qty-minus");
    input.val(newVal);

    if (newVal <= 1) {
      qtyMinus.style.opacity = "0.2";
      qtyMinus.style.pointerEvents = "none";
    } 


    if (cartForm !== undefined && cartForm !== null) {
      updateCart.attr('disabled', false);
      setTimeout(function () {
        updateCart.trigger("click");
      }, 500);
    }
  }); 

  let timeout;
  $('.woocommerce').on('change', '.product-quantity input', function () {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      $("[name='update_cart']").trigger("click");
    }, 1000);
  }); 

  let form_input = $("input, textarea");
  let form_email = $("input[type=email]"); 

  let form_phone = $(".ginput_container_phone input, .phone-input input");
  form_input.on("focusin", function () {
    $(this).siblings("label").addClass("focus");
    $(this).addClass("focus");
  });
  form_input.on("focusout", function () {
    if ($(this).val()) {
      $(this).siblings("label").addClass("focus");
      $(this).addClass("focus");
    } else {
      $(this).siblings("label").removeClass("focus");
      $(this).removeClass("focus");
    }
  }); 

  let form_input_checkout = $(".woocommerce-checkout input, .woocommerce-checkout textarea, .woocommerce-address-fields input, .woocommerce-address-fields textarea, .woocommerce-form-row input[type=password]");
  form_input_checkout.on("focusin", function () {
    $(this).parent().siblings("label").addClass("focus");
    $(this).addClass("focus");
  });
  form_input_checkout.on("focusout", function () {
    if ($(this).val()) {
      $(this).parent().siblings("label").addClass("focus");
      $(this).addClass("focus");
    } else {
      $(this).parent().siblings("label").removeClass("focus");
      $(this).removeClass("focus");
    }
  });
  form_input_checkout.each(function () {
    checkForInput(this);
  });
  form_email.on("keyup", function () {
    if (validateEmail($(this).val()) === true) {
      $(this).parent().parent().addClass("validated");
    } else {
      $(this).parent().parent().removeClass("validated");
    }
  });
  form_phone.on("keyup", function () {
    if (phonenumber($(this).val()) === true) {
      $(this).parent().parent().addClass("validated");
    } else {
      $(this).parent().parent().removeClass("validated");
    }
  });

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var input = inputtxt.value;
    return phoneno.test(input) === true;
  }

  function checkForInput(element) {
    const $label = $(element).parent().siblings('label');

    if ($(element).val().length > 0) {
      $(this).addClass("focus");
      $label.addClass("focus");
    }
  } 


  let commentForm = $("#review_form_wrapper");
  let commentToggle = $(".toggle-write-review");
  commentToggle.on("click", function () {
    if (commentForm.hasClass("open")) {
      commentForm.removeClass("open");
      $(this).text("Write a Review");
      commentForm.slideUp();
    } else {
      commentForm.addClass("open");
      $(this).text("Cancel");
      commentForm.slideDown();
    }
  }); 

  $(".mobile-dash-menu").on("click", function () {
    $(".woocommerce-MyAccount-navigation").slideToggle();
    $(this).toggleClass("open");
  }); 

  $('.video-lightbox').on("click", function () {
    event.preventDefault();
    console.log(this.dataset);
    ogkLightBox(this.dataset.videosrc, this.querySelector('img').src);
  });
});

function ogkLightBox(vidSrc, vidPoster) {
  let overlay = document.createElement('div');
  overlay.classList.add('ogk-lightbox-overlay');
  overlay.addEventListener("click", function (event) {
    console.log(event.target);

    if (event.target == overlay) {
      overlay.remove();
    }
  });
  let vid = document.createElement('video');
  vid.controls = true;
  vid.disablePictureInPicture = true;
  vid.controlsList = "nodownload noremoteplayback noplaybackrate";
  vid.muted = false;
  vid.poster = vidPoster;
  vid.src = vidSrc;
  overlay.appendChild(vid);
  document.body.appendChild(overlay);
  vid.play();
} 


const resDropLink = document.querySelector(".res-drop a");
const fullWidthDropdown = document.querySelector(".full-width-dropdown");
const header = document.querySelector("header");

if (resDropLink) {
  resDropLink.addEventListener("click", function (event) {
    event.preventDefault();

    if (getComputedStyle(fullWidthDropdown).display === "none") {
      fullWidthDropdown.style.display = "flex";
      header.classList.add("invert-nav-color"); 
    } else {
      fullWidthDropdown.style.display = "none";
      header.classList.remove("invert-nav-color"); 
    }
  });
} 


var labelElement = document.querySelector('th.label');

if (labelElement) {
  labelElement.innerText = 'Choose your Size';
  labelElement.style.visibility = 'visible';
} else {
  console.log('Element with class "label" not found.');
} 


document.addEventListener('DOMContentLoaded', function () {
  if (window.location.href.includes('#product')) {
    var productElement = document.getElementById('product');

    if (productElement) {
      productElement.click();
    } else {
      console.log('Element with id="product" not found.');
    }
  }
}); 

const updateElement2 = () => {
  const element1 = document.querySelector('.woocommerce-variation-price .woocommerce-Price-amount');
  const element2 = document.querySelector('.single_add_to_cart_button');

  if (element1 && element2) {
    element2.innerText = "Add to cart: " + element1.innerText;
  }
}; 


const buttons = document.querySelectorAll('.value ul li');

if (buttons.length > 0) {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(() => {
        if (document.querySelector('.woocommerce-variation-price .woocommerce-Price-amount')) {
          updateElement2();
        }
      }, 500);
    });
  });
}

window.onload = function () {
  updateElement2();
}; 


const elementsWithTooltip = document.querySelectorAll('li[data-wvstooltip]');
const swatchElements = document.querySelectorAll('div[data-swatch]');

if (elementsWithTooltip && elementsWithTooltip.length > 0) {
  elementsWithTooltip.forEach(function (element, index) {
    element.addEventListener("click", function () {
      const tooltipValue = element.getAttribute("data-wvstooltip");
      console.log(tooltipValue);
      swatchElements.forEach(function (swatchValue) {
        if (swatchValue.getAttribute("data-swatch") === tooltipValue) {
          swatchValue.click();
        }
      });
    });
  });
} else {
  console.log("No elements with data-wvstooltip found.");
}