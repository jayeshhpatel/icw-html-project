// class="mybackgroundimagediv icw-lazybg" data-lazybg="xx"
let lazyObjectObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            let lazyObject = entry.target;
            if(!(lazyObject.dataset.lazybg == '')){
                bgsrc = lazyObject.dataset.lazybg;
                lazyObject.style.backgroundImage = 'url('+bgsrc+')';
                lazyObject.classList.remove("icw-lazybg");
                lazyObject.dataset.lazybg = '';
                lazyObjectObserver.unobserve(lazyObject);
            }
        }
    });
},{ rootMargin: "0px 0px 0px 0px" });

document.addEventListener("DOMContentLoaded", function() {
var lazyObjects = [].slice.call(document.querySelectorAll(".icw-lazybg"));
lazyObjects.forEach(function(lazyObject) {
    lazyObjectObserver.observe(lazyObject);
});
});


document.addEventListener("DOMContentLoaded", function() {
	var lazyloadImages = document.querySelectorAll("img.icw-lazy");    
	var lazyloadThrottleTimeout;

	function lazyload () {
	  if(lazyloadThrottleTimeout) {
		clearTimeout(lazyloadThrottleTimeout);
	  }    
	  
	  lazyloadThrottleTimeout = setTimeout(function() {
		  var scrollTop = window.pageYOffset;
		  lazyloadImages.forEach(function(img) {
			  if(img.offsetTop < (window.innerHeight + scrollTop)) {
				img.src = img.dataset.src;
				img.classList.remove('icw-lazy');
			  }
		  });
		  if(lazyloadImages.length == 0) { 
			document.removeEventListener("scroll", lazyload);
			window.removeEventListener("resize", lazyload);
			window.removeEventListener("orientationChange", lazyload);
		  }
	  }, 20);
	}

	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
});