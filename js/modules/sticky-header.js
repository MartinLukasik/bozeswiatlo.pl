const pageHeader = document.querySelector('.page-header');

if (window.scrollY) {
  pageHeader.classList.add('sticky');
}

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    pageHeader.classList.add('sticky');
  } else {
    pageHeader.classList.remove('sticky');
  }
});
