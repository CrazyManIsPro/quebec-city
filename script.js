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
  }, 5000);
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

// Vieux Quebec Image Carousel
let vieuxImageIndex = 0;
const vieuxImages = [
  "Cœur de Loup.png",
  "Petit_champlain.png",
  "fresque_P-C.png",
  "street-performers.png"
];

function showVieuxImage(index) {
  const imageElement = document.getElementById("vieux-carousel-img");
  if (imageElement) {
    imageElement.src = vieuxImages[index];
  }
}

function prevVieuxImage() {
  vieuxImageIndex = (vieuxImageIndex - 1 + vieuxImages.length) % vieuxImages.length;
  showVieuxImage(vieuxImageIndex);
}

function nextVieuxImage() {
  vieuxImageIndex = (vieuxImageIndex + 1) % vieuxImages.length;
  showVieuxImage(vieuxImageIndex);
}

function toggleCarousel(id, button) {
  const carousel = document.getElementById(id);
  if (carousel.classList.contains("hidden")) {
    carousel.classList.remove("hidden");
    button.textContent = "Hide";
  } else {
    carousel.classList.add("hidden");
    button.textContent = "Show";
  }
}

// Plains of Abraham Carousel
let abrahamImageIndex = 0;
const abrahamImages = [
  "biking.png",
  "biking2.png",
  "skiing.png",
  "reenactment.png",
  "Montcalm_trying_to_stop_the_massacre.png",
  "fresque_P-C.png",
  "foodtruck.png"
];

function showAbrahamImage(index) {
  const imageElement = document.getElementById("abraham-carousel-img");
  if (imageElement) {
    imageElement.src = abrahamImages[index];
  }
}

function prevAbrahamImage() {
  abrahamImageIndex = (abrahamImageIndex - 1 + abrahamImages.length) % abrahamImages.length;
  showAbrahamImage(abrahamImageIndex);
}

function nextAbrahamImage() {
  abrahamImageIndex = (abrahamImageIndex + 1) % abrahamImages.length;
  showAbrahamImage(abrahamImageIndex);
}

// Observatoire de la Capitale Carousel
let observatoireImageIndex = 0;
const observatoireImages = [
  "quebec-city-observatory-of-the-capital-entry-ticket.png",
  "view.png",
  "Observatoire-4-e1723558703545.png",
  "interactive.png",
  "restaraunt.png"
];

function showObservatoireImage(index) {
  const imageElement = document.getElementById("observatoire-carousel-img");
  if (imageElement) {
    imageElement.src = observatoireImages[index];
  }
}

function prevObservatoireImage() {
  observatoireImageIndex = (observatoireImageIndex - 1 + observatoireImages.length) % observatoireImages.length;
  showObservatoireImage(observatoireImageIndex);
}

function nextObservatoireImage() {
  observatoireImageIndex = (observatoireImageIndex + 1) % observatoireImages.length;
  showObservatoireImage(observatoireImageIndex);
}