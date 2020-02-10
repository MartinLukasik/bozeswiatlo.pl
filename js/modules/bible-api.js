import verses from './bible-verses.json';

const quote = document.querySelector('.quote-quote');
const quoteSrc = document.querySelector('.quote-src');

function changeVerse(verse) {
  quote.textContent = verse.quote;
  quoteSrc.textContent = verse.src;
}

changeVerse(verses[Math.floor(Math.random() * verses.length)]);
