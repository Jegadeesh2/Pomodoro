//Elements
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const workEle = document.getElementById("work");
const breakEle = document.getElementById("break");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

//variables
let workTime = 25;
let breakTime = 5;
let seconds = 0;

//function to start countdown
function start() {
  seconds = 59;
  workEle.classList.add("active");
  let workMinutes = workTime - 1;
  let breakMinutes = breakTime - 1;
  breakCount = 0;

  //function to set periodic countdown
  function timer() {
    startButton.style.display = "none";
    resetButton.style.display = "block";
    minutesEle.innerText = workMinutes;
    secondsEle.innerText = seconds;
    seconds = seconds - 1;

    // seconds condition
    if (seconds === 0) {
      workMinutes = workMinutes - 1;

      // minutes condition
      if (workMinutes === -1) {
  
        // break timer condition
        if (breakCount % 2 === 0) {
          workMinutes = breakMinutes;
          breakCount++;
          workEle.classList.remove("active");
          breakEle.classList.add("active");
        } else {
          workMinutes = workTime;
          breakCount++;
          alert("Want to restart ? 😊.");
          workEle.classList.add("active");
          breakEle.classList.remove("active");
        }
      }
      seconds = 59;
    }
  }
  setInterval(timer, 1000);
}
