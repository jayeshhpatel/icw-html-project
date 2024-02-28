// Video 
// Video 
function isMobileVideoView() {
  return window.innerWidth <= 767; // You can adjust the value as needed
}

// Pause all videos except the passed video element
function pauseAllVideos(exceptVideo = null) {
  document.querySelectorAll(".is-hover-video video").forEach(video => {
      if (video !== exceptVideo) {
          video.pause();
      }
  });
}

// Function for mouseover event
function onVideoMouseOver(container) {
  const video_player = container.querySelector("video");
  if (video_player) {
      pauseAllVideos(video_player); // Pause all other videos
      video_player.play();
      video_player.parentNode.parentNode.querySelector('.play-icon').classList.add("d-hide");
  }
}

// Function to start the video play (for mobile)
function startVideoPlay(entry) {
  const video_player = entry.target.querySelector("video");
  if (video_player) {
      pauseAllVideos(video_player); // Pause all other videos
      video_player.play();
      entry.target.querySelector('.play-icon').classList.add("d-hide");
  }
}

// Intersection Observer for mobile view
function setupVideoIntersectionObserver() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
  };
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startVideoPlay(entry);
          }
      });
  }, observerOptions);

  const videoPlayerContainers = document.querySelectorAll(".is-hover-video");
  videoPlayerContainers.forEach(container => {
      observer.observe(container);
      container.querySelector('.play-icon').classList.add("d-hide");
  });
}

// Setup event listeners based on view
function setupVideoEventListeners() {
  const videoPlayerContainers = document.querySelectorAll(".is-hover-video");

  // Check if the elements exist
  if (videoPlayerContainers.length === 0) {
      // Exit the function if no elements are found
      return;
  }

  // if (isMobileVideoView()) {
      setupVideoIntersectionObserver();
  // } else {
      // videoPlayerContainers.forEach(videoContainer => {
      //     videoContainer.addEventListener("mouseover", () => onVideoMouseOver(videoContainer));
      //     videoContainer.addEventListener("mouseleave", () => onVideoMouseLeave(videoContainer));
      // });
  // }
}

// Initialize the setup
document.addEventListener("DOMContentLoaded", setupVideoEventListeners);





// jSON

function isMobileLottieView() {
    return window.innerWidth <= 992; // You can adjust the value as needed
  }
  // Function for mouseover event
  function onLottieMouseOver(container) {
    const json_player = container.querySelector("lottie-player");
    if (json_player) {
    json_player.setDirection(1);
    json_player.play();
    }
  }
  // Function for mouseleave event
  function onLottieMouseLeave(container) {
    const json_player = container.querySelector("lottie-player");
    if (json_player) {
    json_player.setDirection(-1);
    json_player.play();
    }
  }
  
  // Function to start the animation (for mobile)
  function startLottieAnimation(entry) {
    const json_player = entry.target.querySelector("lottie-player");
    if (json_player) {
      json_player.setDirection(1);
      json_player.play();
    }
  }
  // Intersection Observer for mobile view
  function setupLottieIntersectionObserver() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startLottieAnimation(entry);
        }
      });
    }, observerOptions);
  
    const json_playerContainers = document.querySelectorAll(".is-hover-json");
    json_playerContainers.forEach(container => {
      observer.observe(container);
    });
  }
  // Setup event listeners based on view
  function setupLottieListeners() {
    const json_playerContainers = document.querySelectorAll(".is-hover-json");
    // Check if the elements exist
    if (json_playerContainers.length === 0) {
        // Exit the function if no elements are found
        return;
    }
    if (isMobileLottieView()) {
      setupLottieIntersectionObserver();
    } else {
      json_playerContainers.forEach(container => {
        container.addEventListener("mouseover", () => onLottieMouseOver(container));
        container.addEventListener("mouseleave", () => onLottieMouseLeave(container));
      });
    }
  }
  // Initialize the setup
  setupLottieListeners();
  // Optional: Re-check on window resize
  window.addEventListener('resize', setupLottieListeners);