
const QuoteApi = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-btn');
const levelButtons = document.querySelectorAll('level-buttons');
document.getElementById('counter').innerHTML = '0';

timerElement.style.display = 'none';

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
      clearTimeout(timer);
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
  quoteDisplayElement.innerHTML = '';
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span')
    characterSpan.innerText = character
    quoteDisplayElement.appendChild(characterSpan)
  })
  quoteInputElement.value = null;
  if(correct = true) {
    startTime = new Date();
    
    setInterval(() => {
      timer.innerText = getTimerTime()
    }, 15)

    clearTimeout(keepTimer);
  }
}


let keepTimer;
let startTime;

function startTimer() {
  startTime = new Date();

 setInterval(() => {
    timer.innerText = getTimerTime()
  }, 15);
  
   keepTimer = setTimeout(() => {
      window.location.replace("gameOver.html");
    }, 5000)

  quoteInputElement.disabled = false;
  quoteInputElement.style.visibility = 'visible';
  quoteDisplayElement.hidden = false;
  startButton.style.display = 'none';
  beginnerBtn.style.display = 'none';
  intermediateBtn.style.display = 'none';
  advancedBtn.style.display = 'none';
  masterBtn.style.display = 'none';
  timerElement.style.display = 'block';
}

// The start button was created for initial testing purposes of the game.
startButton.addEventListener('click', startTimer); 


// Below are the round variable declarations, along with their core logic.
const beginnerBtn = document.getElementById('beginner-btn');
const intermediateBtn = document.getElementById('intermediate-btn');
const advancedBtn = document.getElementById('advanced-btn');
const masterBtn = document.getElementById('master-btn');

// First difficulty level for testing
// Beginner mode: 

function startTimerBeginner() {
    
    startTime = new Date();
    
    setInterval(() => {
      timer.innerText = getTimerTime()
    }, 15);
    
     keepTimer = setTimeout(() => {
        window.location.replace("gameOver.html");
      }, 30000)

    quoteInputElement.disabled = false;
    quoteInputElement.style.visibility = 'visible';
    quoteDisplayElement.hidden = false;
    startButton.style.display = 'none';
    beginnerBtn.style.display = 'none';
    intermediateBtn.style.display = 'none';
    advancedBtn.style.display = 'none';
    masterBtn.style.display = 'none';
    timerElement.style.display = 'block';
  }
  
  beginnerBtn.addEventListener('click', startTimerBeginner);

// Second difficulty level for testing
// Intermediate mode: 

function startTimerIntermediate() {
 
  startTime = new Date()

  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 15);
  
   keepTimer = setTimeout(() => {
      window.location.replace("gameOver.html");
    }, 25000)

  quoteInputElement.disabled = false;
  quoteInputElement.style.visibility = 'visible';
  quoteDisplayElement.hidden = false;
  startButton.style.display = 'none';
  beginnerBtn.style.display = 'none';
  intermediateBtn.style.display = 'none';
  advancedBtn.style.display = 'none';
  masterBtn.style.display = 'none';
  timerElement.style.display = 'block';
}

intermediateBtn.addEventListener('click', startTimerIntermediate);

// Third difficulty level for testing
// Advanced mode: 

function startTimerAdvanced() {
 
  startTime = new Date()

  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 15);
  
  keepTimer = setTimeout(() => {
      window.location.replace("gameOver.html");
    }, 20000)

  quoteInputElement.disabled = false;
  quoteInputElement.style.visibility = 'visible';
  quoteDisplayElement.hidden = false;
  startButton.style.display = 'none';
  beginnerBtn.style.display = 'none';
  intermediateBtn.style.display = 'none';
  advancedBtn.style.display = 'none';
  masterBtn.style.display = 'none';
  timerElement.style.display = 'block';
}

advancedBtn.addEventListener('click', startTimerAdvanced);

// Fourth/Final difficulty level for testing
// Master mode: 

function startTimerMaster() {

  startTime = new Date()
  
  setInterval(() => {
    timer.innerText = getTimerTime()
  }, 15);
  
  keepTimer = setTimeout(() => {
      window.location.replace("gameOver.html");
    }, 15000)

  quoteInputElement.disabled = false;
  quoteInputElement.style.visibility = 'visible';
  quoteDisplayElement.hidden = false;
  startButton.style.display = 'none';
  beginnerBtn.style.display = 'none';
  intermediateBtn.style.display = 'none';
  advancedBtn.style.display = 'none';
  masterBtn.style.display = 'none';
  timerElement.style.display = 'block';
}

masterBtn.addEventListener('click', startTimerMaster);


function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000)
}

displayNewQuote()
