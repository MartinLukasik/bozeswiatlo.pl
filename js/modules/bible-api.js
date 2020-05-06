function changeVerse() {
  const quote = document.querySelector('.quote-quote');
  const quoteSrc = document.querySelector('.quote-src');
  try {
    const verse = JSON.parse(this.responseText);
    quote.textContent = verse.quote;
    quoteSrc.textContent = verse.src;
  } catch (e) {
    console.warn(`Cannot fetch api: ${e.message}`);
    displayFallback();
  }
}

function displayFallback() {
  const quote = document.querySelector('.quote-quote');
  const quoteSrc = document.querySelector('.quote-src');

  quote.textContent = `
  И теперь меня ждёт венец победителя, награда за жизнь праведную. Господь, Судья справедливый, увенчает меня им в тот день. И не только мне вручит Он его, но и всем, кто с любовью ожидал Его.
  `;
  quoteSrc.textContent = '2-е Тимофею 4:8';
}

function fetchVerse(callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', callback);
  xhr.addEventListener('error', displayFallback);
  xhr.open('GET', '/api/verses/random');
  xhr.send();
}

fetchVerse(changeVerse);
