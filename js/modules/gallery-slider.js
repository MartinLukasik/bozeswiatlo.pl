const slide = document.querySelectorAll('.gallery-slide');
const slideTotal = slide.length - 1;
let slideCurrent = -1;

function initBullets() {
  const bulletContainer = document.querySelector('.bullet-container');
  slide.forEach((el, i) => {
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.addEventListener('click', () => {
      goToIndexSlide(i);
    });
    bulletContainer.appendChild(bullet);
  });
}

function initArrows() {
  document.querySelector('.slider-left').addEventListener('click', () => {
    slideLeft();
  });
  document.querySelector('.slider-right').addEventListener('click', () => {
    slideRight();
  });
}

function slideInit() {
  initBullets();
  initArrows();
  setTimeout(function() {
    slideRight();
  }, 500);
}

function updateBullet() {
  document
    .querySelector('.bullet-container')
    .querySelectorAll('.bullet')
    .forEach((elem, i) => {
      elem.classList.remove('active');
      if (i === slideCurrent) {
        elem.classList.add('active');
      }
    });
}

function slideRight() {
  let preactiveSlide;
  let activeSlide;
  let proactiveSlide;

  slideCurrent = (slideCurrent + 1) % (slideTotal + 1);
  activeSlide = slide[slideCurrent];

  if (slideCurrent > 0) {
    preactiveSlide = slide[slideCurrent - 1];
  } else {
    preactiveSlide = slide[slideTotal];
  }
  if (slideCurrent < slideTotal) {
    proactiveSlide = slide[slideCurrent + 1];
  } else {
    proactiveSlide = slide[0];
  }

  slide.forEach(elem => {
    if (elem.classList.contains('preactive') && elem !== preactiveSlide) {
      elem.classList.remove('preactive');
    }
    if (elem.classList.contains('active') && elem !== activeSlide) {
      elem.classList.remove('active');
    }
    if (elem.classList.contains('proactive') && elem !== proactiveSlide) {
      elem.classList.remove('proactive');
    }
  });

  preactiveSlide.classList.add('preactive');
  activeSlide.classList.add('active');
  proactiveSlide.classList.add('proactive');

  updateBullet();
}

function slideLeft() {
  let proactiveSlide;
  let activeSlide;
  let preactiveSlide;

  slideCurrent-- || (slideCurrent = slideTotal);
  activeSlide = slide[slideCurrent];

  if (slideCurrent < slideTotal) {
    proactiveSlide = slide[slideCurrent + 1];
  } else {
    proactiveSlide = slide[0];
  }
  if (slideCurrent > 0) {
    preactiveSlide = slide[slideCurrent - 1];
  } else {
    preactiveSlide = slide[slideTotal];
  }

  slide.forEach(elem => {
    if (elem.classList.contains('preactive') && elem !== preactiveSlide) {
      elem.classList.remove('preactive');
    }
    if (elem.classList.contains('active') && elem !== activeSlide) {
      elem.classList.remove('active');
    }
    if (elem.classList.contains('proactive') && elem !== proactiveSlide) {
      elem.classList.remove('proactive');
    }
  });

  preactiveSlide.classList.add('preactive');
  activeSlide.classList.add('active');
  proactiveSlide.classList.add('proactive');

  updateBullet();
}

function goToIndexSlide(index) {
  const sliding = slideCurrent > index ? () => slideRight() : () => slideLeft();
  while (slideCurrent !== index) {
    sliding();
  }
}

slideInit();
