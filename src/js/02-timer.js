import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.disabled = true;





let userSelectDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates);
    if(selectedDates[0] < new Date()) {
      Notify.failure("Please choose a date in the future");
      btnStart.disabled = true;
     
    } else {
     btnStart.disabled = false;
     userSelectDate = selectedDates[0];}
  }}
    const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if(this.isActive) {
      return;
    }
    
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = userSelectDate - currentTime;
      const timeComponents = convertMs(deltaTime);
      updateClockFace(timeComponents);
     console.log(timeComponents);
    }, 1000); }
  
}

 
  flatpickr('#datetime-picker', {...options});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateClockFace({ days, hours, minutes, seconds }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minutesEl.textContent = `${minutes}`;
  secondsEl.textContent = `${seconds}`;
}
btnStart.addEventListener('click', () => {
  timer.start();
});

