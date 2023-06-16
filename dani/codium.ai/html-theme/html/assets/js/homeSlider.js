(function () {
  // your page initialization code here
  // the DOM will be available here

  const spaceHolder = document.querySelector(".space-holder");
  const horizontal = document.querySelector(".horizontal");
  const dots = document.querySelectorAll(".dot");
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectHeight = ref.scrollHeight;
    return objectHeight + 390; // 144 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
  }

  window.addEventListener("scroll", () => {
    const st = window.pageYOffset;
    const sticky = document.querySelector(".sticky");
    let position;
    position =
      Math.floor((sticky.offsetTop * 1) / window.innerHeight) *
      window.innerHeight;
    if (dots.length != 0) {
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      dots[
        Math.floor((sticky.offsetTop * 1) / window.innerHeight)
      ].classList.add("active");
    }
    scrollpos = sticky.offsetTop;
    horizontal.style.transform = `translateY(-${position}px)`;
  });

  window.addEventListener("resize", () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });

  const reavealer = document.querySelectorAll(".revealer");

  revealerObserver = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio > 0) {
        entries[i].target.classList.add("show-revealer");
      } else {
        entries[i].target.classList.remove("show-revealer");
      }
    }
  });
  if (reavealer.length > 0) {
    for (let i = 0; i < reavealer.length; i++) {
      revealerObserver.observe(reavealer[i]);
    }
  }
})();