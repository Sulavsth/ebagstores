// Product Hover Effects
const productCards = document.querySelectorAll('.featured-item');
productCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Image Carousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function displayImage() {
  carouselImages.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  displayImage();
}

setInterval(nextImage, 5000);

