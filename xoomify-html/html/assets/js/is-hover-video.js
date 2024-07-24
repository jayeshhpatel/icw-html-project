// Video 
// Video 
function isMobileVideoView() {
  return window.innerWidth <= 1024; // You can adjust the value as needed
}
// Function for mouseover event
function onVideoMouseOver(container) {
  const video_player = container.querySelector("video");
  if (video_player) {
  video_player.play();
  video_player.parentNode.parentNode.querySelector('.play-icon').classList.add("d-hide");
  }
}
// Function for mouseleave event
function onVideoMouseLeave(container) {
  const video_player = container.querySelector("video");
  if (video_player) {
  video_player.pause();
  video_player.parentNode.parentNode.querySelector('.play-icon').classList.remove("d-hide");
  }
}

// Function to start the animation (for mobile)
function startVideoPlay(entry) {
  const video_player = entry.target.querySelector("video");
  if (video_player) {
      // player.setDirection(1);
      video_player.play();
      video_player.parentNode.parentNode.querySelector('.play-icon').classList.add("d-hide");
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

  setupVideoIntersectionObserver();
  if (isMobileVideoView()) {
  
  } else {
  videoPlayerContainers.forEach(videoContainer => {
      videoContainer.addEventListener("mouseover", () => onVideoMouseOver(videoContainer));
      videoContainer.addEventListener("mouseleave", () => onVideoMouseLeave(videoContainer));
  });
  }
}
// Initialize the setup
setupVideoEventListeners();
// Optional: Re-check on window resize
window.addEventListener('resize', setupVideoEventListeners);