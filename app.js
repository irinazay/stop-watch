const btnStart = document.getElementById('start');
const btnReset = document.getElementById('reset');
let timer = document.querySelector('h1');

btnStart.addEventListener('click', start);
btnReset.addEventListener('click', reset);

let timerVar;
let counter = 0;

function start(e) {
  const btnClicked = e.target;
  if (btnClicked.innerText === 'START') {
    timerVar = setInterval(countTimer, 10);
    btnClicked.innerText = 'PAUSE';
    btnReset.classList.remove('btnReset_Clicked');
  } else if (btnClicked.innerText === 'PAUSE') {
    btnClicked.innerText = 'RESUME';
    clearInterval(timerVar);
  } else {
    btnClicked.innerText = 'PAUSE';
    timerVar = setInterval(countTimer, 10);
  }
}

function reset(e) {
  clearInterval(timerVar);
  timer.innerHTML = '00:00:00.00';
  counter = 0;
  btnReset.classList.add('btnReset_Clicked');
  btnStart.innerText = 'START';
}

function countTimer() {
  ++counter;

  let hour = Math.floor(counter / 360000);
  let minute = Math.floor(counter / 6000) % 60;
  let seconds = Math.floor(counter / 100) % 60;
  let decisecond = Math.floor(counter / 10) % 10;
  let centisecond = counter % 10;

  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;
  if (seconds < 10) seconds = '0' + seconds;
  if (decisecond < 10) decisecond = decisecond;
  if (centisecond < 10) centisecond = centisecond;

  timer.innerHTML = `${hour}:${minute}:${seconds}.${decisecond}${centisecond}`;
}
