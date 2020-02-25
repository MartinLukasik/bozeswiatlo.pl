export default class Slider {
  constructor(interval) {
    this.slides = document.querySelectorAll('.slide');
    this.intervalID = setInterval(this.nextSlide, interval);

    document.getElementById('next').addEventListener('click', () => {
      this.nextSlide();
      clearInterval(this.intervalID);
      this.intervalID = setInterval(this.nextSlide, interval);
    });
    document.getElementById('prev').addEventListener('click', () => {
      this.prevSlide();
      clearInterval(this.intervalID);
      this.intervalID = setInterval(this.nextSlide, interval);
    });
    this.intervalID = setInterval(this.nextSlide, interval);
  }

  nextSlide() {
    const current = document.querySelector('.current');
    current.firstElementChild.classList.remove('animation-paused');
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
    } else {
      this.slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  }

  prevSlide() {
    const current = document.querySelector('.current');
    current.classList.remove('animation-paused');
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
    } else {
      this.slides[this.slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
  }
}
