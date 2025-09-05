const slidesContainer = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  // move carousel-slides left by percentage
  slidesContainer.style.left = `-${currentSlide * 100}%`;

  // update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

leftArrow.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

rightArrow.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.getAttribute('data-slide'));
    showSlide(slideIndex);
    resetInterval();
  });
});

// auto advance every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// Initial setup
showSlide(currentSlide);
