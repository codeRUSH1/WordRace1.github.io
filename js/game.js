
const QuoteApi = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
document.getElementById('counter').innerHTML = '0';




quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      correct = false;
    }
  })
  if (correct) displayNewQuote() 
  document.getElementById('counter').innerHTML++;
})

function getRandomQuote() {
  return fetch(QuoteApi)
    .then(response => response.json())
    .then(data => data.content)
}

async function displayNewQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  counterValue = 0;
  counterValue++;
  quote.split('').forEach(character => {
    counterValue = 0;
    counterValue++;
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null;
}

let startTime

function startTimer() {
  counterValue = 0;
  counterValue++;
  timerElement.innerText = 0; 
  startTime = new Date()
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 15)
  quoteInputElement.disabled = false;
  quoteInputElement.style.visibility = 'visible';
  quoteDisplayElement.hidden = false;
}

startButton.addEventListener('click', startTimer); 

// Score counter




// First difficulty level for testing

// Beginner mode: 


function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

displayNewQuote()
