const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.responsive-nav');
navToggler.addEventListener('click', () => {
  nav.classList.toggle('active-nav');
  navToggler.classList.toggle('active');
});
