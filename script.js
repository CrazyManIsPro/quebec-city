document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Show welcome screen for 2 seconds, then fade out
  setTimeout(() => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => {
      loadingScreen.style.display = "none";
      mainContent.classList.remove("hidden");
    }, 1000);
  }, 2000);
});

function toggleInfo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.classList.toggle("hidden");
  }
}

// Carousel image list — now includes the default "montmorency_main.png"
let currentImageIndex = 0;
const images = [
  "montmorency_main.png",                   // Default image
  "montmorency_falls.png",
  "montmorency_ice_climbing.png",
  "montmorency_suspension_bridge.png",
  "montmorency_zip_line.png"
];

function showImage(index) {
  const imageElement = document.getElementById("montmorency-carousel");
  if (imageElement) {
    imageElement.src = images[index];
  }
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}