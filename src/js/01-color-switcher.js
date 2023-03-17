const startChangeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalID = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startChangeColorBtn.addEventListener('click', () => {
  if (!intervalID) {
    intervalID = setInterval(() => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
 }, 1500);
}
});


stopChangeColorBtn.addEventListener('click', () => {
  clearInterval(intervalID);
  intervalID = null;
});
