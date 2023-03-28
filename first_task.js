const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');
let intervalId = null;

startBtn.addEventListener('click', startChangingBackgroundColor);
stopBtn.addEventListener('click', stopChangingBackgroundColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyBackgroundColor() {
  const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  body.style.backgroundColor = colors[colorIndex];
}

function startChangingBackgroundColor() {
  intervalId = setInterval(changeBodyBackgroundColor, 1000);
  startBtn.disabled = true;
}

function stopChangingBackgroundColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}
