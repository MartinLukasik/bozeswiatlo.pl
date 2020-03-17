function changeVerse() {
  const quote = document.querySelector('.quote-quote');
  const quoteSrc = document.querySelector('.quote-src');
  const verse = JSON.parse(this.responseText);

  quote.textContent = verse.quote;
  quoteSrc.textContent = verse.src;
}

function displayFallback() {
  const quote = document.querySelector('.quote-quote');
  const quoteSrc = document.querySelector('.quote-src');

  quote.textContent = 'verse.quote';
  quoteSrc.textContent = 'verse.src';
}

function fetchVerse(callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.addEventListener('error', displayFallback);
  xhr.open('GET', '/api/verses/random');
  xhr.send();
}

fetchVerse(changeVerse);
