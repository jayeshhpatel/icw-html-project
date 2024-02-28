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




// jSON
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
  setupLottieIntersectionObserver();
}
// Initialize the setup
setupLottieListeners();
// Optional: Re-check on window resize

window.addEventListener('resize', setupLottieListeners);


// 

function isMobileAutoLottieView() {
  return window.innerWidth <= 1024; // You can adjust the value as needed
}
// Function for mouseover event
function onLottieAutoMouseOver(container) {
  const auto_json_player = container.querySelector("lottie-player");
  if (auto_json_player) {
  auto_json_player.setDirection(1);
  auto_json_player.play();
  }
}
// Function for mouseleave event
function onLottieAutoMouseLeave(container) {
  const auto_json_player = container.querySelector("lottie-player");
  if (auto_json_player) {
  auto_json_player.setDirection(-1);
  auto_json_player.play();
  }
}

// Function to start the animation (for mobile)
function startLottieAutoAnimation(entry) {
  const auto_json_player = entry.target.querySelector("lottie-player");
  if (auto_json_player) {
    auto_json_player.setDirection(1);
    auto_json_player.play();
  }
}
// Intersection Observer for mobile view
function setupLottieAutoIntersectionObserver() {
  const autoObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };
  const josnobserver = new IntersectionObserver((entries, josnobserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startLottieAutoAnimation(entry);
      }
    });
  }, autoObserverOptions);

  const auto_json_playerContainers = document.querySelectorAll(".is-auto-hover-json");
  auto_json_playerContainers.forEach(container => {
    josnobserver.observe(container);
  });
}
// Setup event listeners based on view
function setupLottieAutoListeners() {
  const auto_json_playerContainers = document.querySelectorAll(".is-auto-hover-json");
  // Check if the elements exist
  if (auto_json_playerContainers.length === 0) {
      // Exit the function if no elements are found
      return;
  }
  if (isMobileAutoLottieView()) {
    setupLottieAutoIntersectionObserver();
  } else {
    auto_json_playerContainers.forEach(container => {
      container.addEventListener("mouseover", () => onLottieAutoMouseOver(container));
      container.addEventListener("mouseleave", () => onLottieAutoMouseLeave(container));
    });
  }
}
// Initialize the setup
setupLottieAutoListeners();
// Optional: Re-check on window resize
window.addEventListener('resize', setupLottieAutoListeners);