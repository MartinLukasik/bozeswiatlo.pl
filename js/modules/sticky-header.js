import logo from '../../img/logo/logo.png';
import logoWhite from '../../img/logo/logo-white.png';

const pageHeader = document.querySelector('.page-header');
const logoImage = document.querySelector('.logo__img');

if (window.scrollY) {
  pageHeader.classList.add('sticky');
  logoImage.src = logo;
}

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    pageHeader.classList.add('sticky');
    logoImage.src = logo;
  } else {
    pageHeader.classList.remove('sticky');
    logoImage.src = logoWhite;
  }
});
