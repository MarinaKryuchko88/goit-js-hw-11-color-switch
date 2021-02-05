const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const btnStartRef = document.querySelector('button[data-action="start"]');
const btnStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');
let intervalID = null;
let isActive = null;


btnStartRef.addEventListener('click', event => {
  if (isActive) {
    return;
  };
  isActive = true;
  intervalID = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const selectColor = colors[randomIntegerFromInterval(0, 5)] // возвращает один из элементов массива
    bodyRef.setAttribute('style', `background-color: ${selectColor}`)
  }, 1000);
})

btnStopRef.addEventListener('click', event => {
  clearInterval(intervalID);
  intervalID = null;
  isActive = false;
  bodyRef.removeAttribute('style');
})





