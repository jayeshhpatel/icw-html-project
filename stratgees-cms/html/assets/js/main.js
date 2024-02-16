jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
 
    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
       $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
       e.preventDefault();
    });
 
    if ($('.main-header').length) {
       if (jQuery(this).scrollTop() > 100) {
          $(".main-header").addClass("fixed-header");
       } else {
          $(".main-header").removeClass("fixed-header");
       }
 
       $(window).scroll(function () {
          if (jQuery(this).scrollTop() > 100) {
             $(".main-header").addClass("fixed-header");
          } else {
             $(".main-header").removeClass("fixed-header");
          }
       });
    }

   $('.categories-btn').on('click', function(){
      $(this).toggleClass('active');
   })
})


// if ($('.logo-slider').length) {
//    var logoslider = new Splide( '.logo-slider', {
//       arrows: true,  
//       perPage: 5,
//       autoWidth: true,
//       autoScroll: {
//          speed: 1
//       },
//       breakpoints: {
//          400: {
//             perPage: 2,
//          },
//          768: {
//             perPage: 3,
//          }
//      },
//    });
   
//    logoslider.mount();
// };

if ($('.testimonial-slider').length) {
   var teamSlider = new Splide( '.testimonial-slider', {
      perMove: 1,
      perPage: 3,
      pagination : false,
      arrows: true,
      start: 0,
      autoScroll: {
         speed: 1
      },
      classes: {
         arrow : 'custom-splide__arrow',
         prev  : 'splide__arrow--prev splide-prev',
		   next  : 'splide__arrow--next splide-next',
     },
      breakpoints: {
         768: {
            perPage: 1.2,
         },
         992:{
            perPage: 2,
         },
     },
   });
   
   teamSlider.mount();
};
if ($('.casestudy-slider').length) {
   var caseStudySlider = new Splide( '.casestudy-slider', {
      perMove: 1,
      perPage: 2,
      pagination : false,
      arrows: true,
      start: 0,
      autoScroll: {
         speed: 1
      },
      classes: {
         arrow : 'custom-splide__arrow',
         prev  : 'splide__arrow--prev splide-prev',
		   next  : 'splide__arrow--next splide-next',
     },
      breakpoints: {
         768: {
            perPage: 1.2,
         },
         992:{
            perPage: 2,
         },
     },
   });
   
   caseStudySlider.mount();
};
changebuttons();
function changebuttons(){
$('.custom-splide__arrow').html(`<svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M92.149 65.095L4.1742 3.53005L4.1742 119.99L92.149 65.095Z" fill="#64B9C2"/>
                                    <path d="M32.0979 117.198L115.846 64.9414L32.0979 6.81996L32.0979 117.198Z" stroke="#64B9C2" stroke-width="3"/>
                                    </svg>`);
}
$(".result-progress").each(function(){
  
   var $bar = $(this).find(".bar");
   var $val = $(this).find(".result-value span");
   var perc = parseInt( $val.attr('data-count'), 10);
   $({p:0}).animate({p:perc}, {
     duration: 3000,
     easing: "swing",
     step: function(p) {
       $bar.css({
         transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
         // 45 is to add the needed rotation to have the green borders at the bottom
       });
       $val.text(p|0);
     }
   });
 });

 // animation
function changeHeight(){
   var sentenceHeight = 0;
   // var realPadding = $('.text-animation-section').css('padding-bottom');
   $('.word').each(function(i, obj) {
      if(sentenceHeight < $(this).height()){
         sentenceHeight = $(this).height();
      }
   });
   $('.animation-text-content').css('height', `${ sentenceHeight}px`);
}


var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;
var delay = 6000;

if(document.getElementsByClassName('word').length > 0){
   words[currentWord].style.opacity = 1;
   for (var i = 0; i < words.length; i++) {
      splitLetters(words[i]);
      delay = (words[i].getAttribute('data-delay'))*1000;
   }
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    let lastWord = (words.length) - 1;
      for(let i = 0; i <= lastWord; i++) {
         if(i != currentWord) {
            words[i].style.opacity = 0;
         }
      }
}

function animateLetterOut(cw, i) {
    setTimeout(function() {
            cw[i].className = 'letter out';
    }, i*50);
}

function animateLetterIn(nw, i) {
    setTimeout(function() {
            nw[i].className = 'letter in';
    }, 340+(i*80));
}

function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
// for (var i = 0; i < content.length; i++) {
//     var letter = document.createElement('span');
//     letter.className = 'letter';
//     if(content.charAt(i) == ' '){
//         letter.innerHTML = ' &nbsp;';
//     } else {
//         letter.innerHTML = content.charAt(i);
//     }
//     word.appendChild(letter);
//     letters.push(letter);
// }

let words = content.split(' ');
console.log(words.length, '==', word);
// console.log(words[length], '==', word);
for (var i = 0; i < words.length; i++) {
   var letter = document.createElement('span');
   letter.className = 'letter';
   letter.innerHTML = `${words[i]}&nbsp;`;
   word.appendChild(letter);
   letters.push(letter);
}

wordArray.push(letters);
}

if(document.getElementsByClassName('word').length > 0){
   changeHeight();
   changeWord();
   setInterval(changeWord, delay);
}

$(window).on('resize', function(){
   changeHeight();
   changebuttons();
});