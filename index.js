const scoreHome = document.querySelector("#scoreHome");
const plus1Home = document.querySelector("#add_1Home");
const plus2Home = document.querySelector("#add_2Home");
const plus3Home = document.querySelector("#add_3Home");

const scoreGuest = document.querySelector("#scoreGuest");
const plus1Guest = document.querySelector("#add_1Guest");
const plus2Guest = document.querySelector("#add_2Guest");
const plus3Guest = document.querySelector("#add_3Guest");

const counterDown = document.querySelector("#counter");
const periodCounter = document.querySelector(".period-counter");
//Add Score
let ScorePlusOne = (score) => score + 1;
let ScorePlusTwo = (score) => score + 2;
let ScorePlusthree = (score) => score + 3;

//Home Score
plus1Home.addEventListener("click", () => {
  scoreHome.innerHTML = ScorePlusOne(parseInt(scoreHome.textContent, 16));
});

plus2Home.addEventListener("click", () => {
  scoreHome.innerHTML = ScorePlusTwo(parseInt(scoreHome.textContent, 16));
});

plus3Home.addEventListener("click", () => {
  scoreHome.innerHTML = ScorePlusthree(parseInt(scoreHome.textContent, 16));
});

//Guest Score
plus1Guest.addEventListener("click", () => {
  scoreGuest.innerHTML = ScorePlusOne(parseInt(scoreGuest.textContent, 16));
});

plus2Guest.addEventListener("click", () => {
  scoreGuest.innerHTML = ScorePlusTwo(parseInt(scoreGuest.textContent, 16));
});

plus3Guest.addEventListener("click", () => {
  scoreGuest.innerHTML = ScorePlusthree(parseInt(scoreGuest.textContent, 16));
});

//Counter
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var countPeriod = 0;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      countPeriod++;
    }
    periodCounter.innerHTML = countPeriod;
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 1,
    display = counterDown;
  startTimer(fiveMinutes, display);
};
