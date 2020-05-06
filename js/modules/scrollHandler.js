import debounce from 'lodash.debounce';

const pageHeader = document.querySelector('.page-header');

const IMPORT_FLAG = {
  bg: 0,
  lg: 0,
};

function handleScroll() {
  // Importing js
  if (!IMPORT_FLAG.bg && window.scrollY > 1800) {
    IMPORT_FLAG.bg = 1;
    import('./background-animation').then((code) => code.init());
  }

  if (!IMPORT_FLAG.lg && window.scrollY > 3000) {
    IMPORT_FLAG.lg = 1;
    import(
      '../../node_modules/lightgallery.js/dist/js/lightgallery.min.js'
    ).then(() => lightGallery(document.getElementById('mp-gallery')));
  }

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
