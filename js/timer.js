export const timer = () => {
  const daysBlock = document.querySelector('.timer__days');
  const hoursBlock = document.querySelector('.timer__hours');
  const minutesBlock = document.querySelector('.timer__minutes');
  const secondsBlock = document.querySelector('.timer__seconds');

  let interval;

  const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastNum = value % 10;

    if (value > 10 && value < 20) return words[2];
    if (lastNum > 1 && lastNum < 5) return words[1];
    if (lastNum === 1) return words[0];

    return words[2];
  };
 
  const updateTimer = () => {
    const date = new Date();
    const dateDeadliine = new Date('26 april 2023').getTime();
    const timeRemaining = (dateDeadliine - date) / 1000;

    const deys = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = deys < 10 ? '0' + deys : deys;
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    daysBlock.textContent = fDays;
    hoursBlock.textContent = fHours;
    minutesBlock.textContent = fMinutes;
    secondsBlock.textContent = fSeconds;

    daysBlock.nextElementSibling.textContent = numWord(deys, ['день','дня', 'дней']);
    hoursBlock.nextElementSibling.textContent = numWord(hours, ['час','часа', 'часов']);
    minutesBlock.nextElementSibling.textContent = numWord(minutes, ['минута','минуты', 'минут']);
    secondsBlock.nextElementSibling.textContent = numWord(seconds, ['секунда','секунды', 'секунд']);

    if (timeRemaining <= 0) {
      clearInterval(interval);

      daysBlock.style.color = 'red';
      daysBlock.textContent = '00';
      daysBlock.nextElementSibling.textContent = 'дней';


      hoursBlock.style.color = 'red';
      hoursBlock.textContent = '00';
      hoursBlock.nextElementSibling.textContent = 'часов';

      minutesBlock.style.color = 'red';
      minutesBlock.textContent = '00';
      minutesBlock.nextElementSibling.textContent = 'минут';

      secondsBlock.style.color = 'red';
      secondsBlock.textContent = '00';
      secondsBlock.nextElementSibling.textContent = 'секунд';
    }
  }
  
  updateTimer();
  interval = setInterval(updateTimer, 500);
  
};