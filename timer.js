const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Apr 15, 2023'),
// });

const timer = {
  start() {
    const startTime = new Date('Apr 15, 2023');
    setInterval(() => {
      const currentTime = Date.now();
      const timeLeft = startTime - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(timeLeft);
      //   console.log(`${days}:${hours}:${mins}:${secs}`);
      refs.days.textContent = days;
      refs.hours.textContent = hours;
      refs.mins.textContent = mins;
      refs.secs.textContent = secs;
    }, 1000);
  },
};
timer.start();
function pad(value) {
  return String(value).padStart(2, '0');
}
function daysPad(value) {
  return String(value);
}
function getTimeComponents(time) {
  const days = daysPad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
