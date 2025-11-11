// Här har du fått all js kod från genomgången
// Den har självklart andra variabelnamn och annan funktionalitet än vad du behöver
// Använ ddenna fil som utgångspunkt för att lösa uppgiften eller skriv din egen kod

const slider = document.getElementById('valueSlider');
const display = document.getElementById('selectedNumber');
const hint = document.getElementById('hint');

// init
let maxValue = parseInt(slider.max, 10) || 10;
let secret = pickRandom();
let wins = 0;
let gameActive = true; 


updateDisplay();
updateHint(parseInt(slider.value, 10));


slider.addEventListener('input', () => {
  const val = parseInt(slider.value, 10);
  updateDisplay();
  updateHint(val);
});


const newBtn = document.getElementById('newBtn');
const resetBtn = document.getElementById('resetBtn');
if (newBtn) {
  newBtn.addEventListener('click', () => {
    if (!gameActive) return; 
    secret = pickRandom();
    hint.textContent = 'Ny siffra vald — börja gissa!';
    console.log('Ny hemlig siffra:', secret);
    setTimeout(() => { hint.textContent = ''; }, 2000);
  });
}

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    startNewRound(); 
  });
}

function pickRandom() {
  maxValue = parseInt(slider.max, 10) || maxValue;
  
  return Math.floor(Math.random() * (maxValue + 1));
}

function updateDisplay() {
  display.textContent = slider.value;
}

function updateHint(val) {
  if (!gameActive) return;
  if (val < secret) {
    hint.textContent = 'Det hemliga talet är större än ditt val.';
  } else if (val > secret) {
    hint.textContent = 'Det hemliga talet är mindre än ditt val.';
  } else {
    wins++;
    hint.textContent = `Rätt! Du gissade talet. Antal rätt: ${wins}.`;

    gameActive = false;
    slider.disabled = true;    
    if (newBtn) newBtn.restart = true; 

    maxValue += 10;
    slider.max = maxValue;
  }
}
function startNewRound(){
  secret = pickRandom();
  gameActive = true;
  slider.disabled = false;
  if (newBtn) newBtn.restart = false;
  updateDisplay();
  updateHint(parseInt(slider.value, 10));
  console.log('Ny hemlig siffra:', secret);
 }