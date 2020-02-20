const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const intervalTime = 9000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector('.current');
  current.firstElementChild.classList.remove('animation-paused');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  const current = document.querySelector('.current');
  current.classList.remove('animation-paused');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});
prev.addEventListener('click', () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
});

slideInterval = setInterval(nextSlide, intervalTime);

// Animation stoping on scroll
window.addEventListener('scroll', () => {
  const current = document.querySelector('.current');
  if (window.scrollY) {
    current.firstElementChild.classList.add('animation-paused');
  } else {
    current.firstElementChild.classList.remove('animation-paused');
  }
});
