import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('[data-start]');

// btnStart.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//     // if(selectedDates < Date.now) {
//     //   return window.alert("Please choose a date in the future")
//     // } if(selectedDates > Date.now) {
//     //        btnStart.disabled = false;
//     // };
  
// }
//   };

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000))





const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if(this.isActive) {
      return;
    }
    const startTime = options.selectedDates;
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const timeComponents = convertMs(deltaTime);

     console.log(timeComponents);
    }, 1000); 
      console.log(startTime);
      console.log(currentTime);
      console.log(deltaTime);
  }
}
btnStart.addEventListener('click', () => {
  timer.start();
});
// timer.start()