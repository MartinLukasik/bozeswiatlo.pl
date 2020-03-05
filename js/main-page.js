import './modules/css-custom-props';
import './modules/slider';
import './modules/scrollHandler';
import './modules/resonsive-nav';
import './modules/aos';
import './modules/bible-api';
import './modules/background-animation';

const cards = document.querySelectorAll('.m-card');

cards.forEach(card => addListeners(card));

function addListeners(card) {
  card.addEventListener('mouseenter', () =>
    setTimeout(() => card.classList.add('scroll-y'), 150)
  );
  card.addEventListener('mouseleave', () =>
    setTimeout(() => {
      card.classList.remove('scroll-y');
      card.scrollTop = 0;
    }, 200)
  );
}
