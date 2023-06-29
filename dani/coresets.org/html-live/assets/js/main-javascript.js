/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();
 if ($('.clipboard-btn').length) {
      copykey();
   }

//Counter Animation
var countedAnim = 0;
var counted = 0;
function counterAnim(qSelector, start, end, duration) {
   const target = document.querySelector(qSelector);
   let startTimestamp = null;
   function step (timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = Math.ceil(Math.floor(progress * (end - start) + start)).toLocaleString("en");
      if (progress < 1) {
      window.requestAnimationFrame(step);
      }
   };
   window.requestAnimationFrame(step);
   countedAnim = 1;
};

function icwCounter() {
   $(".counter").each(function () {
      var $this = $(this), countTo = $this.attr("data-number");
      $({
         countNum: $this.text()
      }).animate( {
         countNum: countTo
      }, {
         duration: 850,
         easing: "swing",
         step: function () {
            //$this.text(Math.ceil(this.countNum));
            $this.text(
                  Math.ceil(this.countNum).toLocaleString("en")
            );
         },
         complete: function () {
            $this.text(
                  Math.ceil(this.countNum).toLocaleString("en")
            );
            //alert('finished');
         }
      });
   });
   counted = 1;
}

$(window).scroll(function () {
   if ($('.revert-counter1').length) {
      if($(window).width() >= 992) {
         var oTop = $(".section-counter").offset().top - window.innerHeight;
         var eleHeight = $(".section-counter").offset().top + $(".section-counter").height();
         
         if (countedAnim == 0 && $(window).scrollTop() > oTop &&  $(window).scrollTop() < eleHeight) {
            counterAnim(".revert-counter1", Math.floor(document.querySelector('.revert-counter1').dataset.start), Math.floor(document.querySelector('.revert-counter1').dataset.end), 1000);
            counterAnim(".revert-counter2", Math.floor(document.querySelector('.revert-counter2').dataset.start), Math.floor(document.querySelector('.revert-counter2').dataset.end), 1000);
         }
      } else {
         var top = ($(".section-counter").offset().top - $(".section-counter").offset().top) + ($(".section-counter").height() / 5);
         var height = $(".section-counter").offset().top + $(".section-counter").height();
         if (countedAnim == 0 && $(window).scrollTop() >= top && $(window).scrollTop() && $(window).scrollTop() < height ) {
   
            counterAnim(".revert-counter3", Math.floor(document.querySelector('.revert-counter3').dataset.start), Math.floor(document.querySelector('.revert-counter3').dataset.end), 1000);
            counterAnim(".revert-counter4", Math.floor(document.querySelector('.revert-counter4').dataset.start), Math.floor(document.querySelector('.revert-counter4').dataset.end), 1000);
         }
      }
   }
   icwCounter();
});

// if ($('.copy-content').length) {
var allCopyContent = document.querySelectorAll('.copy-content'); //Select all elements with the id starting by "table_"
var allCopyContentArray= Array.prototype.slice.call(allCopyContent);
allCopyContentArray.forEach(function(element) {
   const textElement = elm.parentElement;

   function copyText(e) {
       window.getSelection().selectAllChildren(textElement);
       document.execCommand("copy");
       e.target.setAttribute("tooltip", "Copied! ✅");
   };
   function resetTooltip(e) {
       e.target.setAttribute("tooltip", "Copy to clipboard");
   };
   elm.addEventListener('click', function(e){
      copyText(e)
   });
   elm.addEventListener('mouseover', function(e){
      resetTooltip(e)
   });
});
// }

function copykey() {
   var allClipboardBtn = document.querySelectorAll('.clipboard-btn'); //Select all elements with the id starting by "table_"
   var allClipboardBtnArray= Array.prototype.slice.call(allClipboardBtn);
   allClipboardBtnArray.forEach(function(elm, indx) {
      const textElement = elm.previousElementSibling;
      function copyText(e) {
          window.getSelection().selectAllChildren(textElement);
          document.execCommand("copy");
          e.target.setAttribute("tooltip", "Copied! ✅");
      };
      function resetTooltip(e) {
          e.target.setAttribute("tooltip", "Copy to clipboard");
      };
      elm.addEventListener('click', function(e){
         copyText(e)
      });
      elm.addEventListener('mouseover', function(e){
         resetTooltip(e)
      });
   });   
}

// is-sticky-header
let lastScroll = 0;
window.addEventListener("scroll", function() {
    let coresetssticky = document.querySelector(".coresets-sticky");
    if(coresetssticky){
      var stickyNavTop = $('#motivation').offset().top - 0;
        let currentScroll = window.pageYOffset;
        if (currentScroll <= stickyNavTop) {
            coresetssticky.classList.remove("scroll-up");
            return;
        }    
        if (currentScroll > lastScroll && !coresetssticky.classList.contains("scroll-down")) {
            // down
            coresetssticky.classList.remove("scroll-up");
            coresetssticky.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && coresetssticky.classList.contains("scroll-down")) {
            // up
            coresetssticky.classList.remove("scroll-down");
            coresetssticky.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
    }
});

var lightbox = GLightbox();
lightbox.on('open', (target) => {
      console.log('lightbox opened');
});

var lightboxGallery = GLightbox({
   selector: '.wp-block-image a'
});