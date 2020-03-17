const INTERVAL = 9000;

const Slider = interval => {
  const slides = document.querySelectorAll('.slide');

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    clearInterval(intervalID);
    intervalID = setInterval(nextSlide, interval);
  });
  document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    clearInterval(intervalID);
    intervalID = setInterval(nextSlide, interval);
  });

  intervalID = setInterval(nextSlide, interval);

  const nextSlide = () => {
    const current = document.querySelector('.current');
    const newCurrent = current.nextElementSibling || slides[0];

    newCurrent.classList.add('current');
    current.classList.remove('current');
    current.firstElementChild.classList.remove('animation-paused');
  };

  const prevSlide = () => {
    const current = document.querySelector('.current');
    const newCurrent =
      current.previousElementSibling || slides[slides.length - 1];

    newCurrent.classList.add('current');
    current.classList.remove('current');
    current.classList.remove('animation-paused');
  };

  let intervalID = setInterval(nextSlide, interval);
  document.addEventListener('keydown', e => {
    if (e.keyCode == '37') {
      prevSlide();
    } else if (e.keyCode == '39') {
      nextSlide();
    }
  });
};

Slider(INTERVAL);
