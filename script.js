
//variables
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


//events
btnTry.addEventListener('click', handleClickTry);
btnReset.addEventListener('click', handleClickTryAgain);
document.addEventListener('keydown', handleKeyDown);

//Functions
function handleClickTry(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    toggleClick();
    screen2.querySelector('h2').innerText = `hit in ${xAttempts} attemps`;
  }

  if(Number(inputNumber.value) < 0) {
    alert(' You must select a number between 0 and 10')
  } else if(Number(inputNumber.value) > 10) {
    alert(' You must select a number between 0 and 10')
  } else {
    xAttempts++;
  }
  

  inputNumber.value = "";

  xAttempts++;
}

function handleClickTryAgain() {
  toggleClick();
  randomNumber = Math.round(Math.random() * 10)
  xAttempts = 1
}

function toggleClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyDown(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleClickTryAgain();
  }
}
