import './modules/background-animation'

const cards = document.querySelectorAll('.m-card')
const slider = document.querySelector('.slider')

slider.style.height = `${window.innerHeight}px`

cards.forEach(card => addListeners(card))

function addListeners(card) {
  card.addEventListener('mouseenter', () =>
    setTimeout(() => card.classList.add('scroll-y'), 150)
  )
  card.addEventListener('mouseleave', () =>
    setTimeout(() => {
      card.classList.remove('scroll-y')
      card.scrollTop = 0
    }, 200)
  )
}
