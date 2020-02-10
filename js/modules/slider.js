const slides = document.querySelectorAll('[class^=bg-]');
let nextSlide = 2;

setTimeout(changeSlide, 9000);

function changeSlide() {
  slides.forEach(item => {
    if (item.className.includes(`bg-${nextSlide}`)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
  nextSlide = (nextSlide % 3) + 1;
  setTimeout(changeSlide, 9000);
}

let isAnimationPaused = false;

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    document.querySelectorAll('[class^=bg]').forEach(item => {
      item.classList.add('animation-paused');
      isAnimationPaused = true;
    });
  } else {
    document.querySelectorAll('[class^=bg]').forEach(item => {
      item.classList.remove('animation-paused');
      isAnimationPaused = false;
    });
  }
});
