import debounce from 'lodash.debounce';

const pageHeader = document.querySelector('.page-header');

function handleScroll() {
  if (window.scrollY) {
    pageHeader.classList.add('sticky');
  } else {
    pageHeader.classList.remove('sticky');
  }
  const current = document.querySelector('.current');
  if (window.scrollY) {
    current.firstElementChild.classList.add('animation-paused');
  } else {
    current.firstElementChild.classList.remove('animation-paused');
  }
}

if (window.scrollY) {
  handleScroll();
}

window.addEventListener(
  'scroll',
  debounce(handleScroll, 150, { leading: true, trailing: true })
);
