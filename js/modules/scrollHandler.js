import debounce from 'lodash.debounce';
import Slider from './slider';

const pageHeader = document.querySelector('.page-header');
const INTERVAL = 9000;

new Slider(INTERVAL);

function handleScroll() {
  if (window.scrollY) {
    pageHeader.classList.add('sticky');
  } else {
    pageHeader.classList.remove('sticky');
  }
  console.log('called');
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
