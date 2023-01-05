/*

 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc

*/

// Our Skills Section
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");
// Our Awesome Stats Section
let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // Our Skills Section
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Our Awesome Stats Section
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

// Our Awesome Stats Section
function startCount(el) {
  let goal = el.dataset.goal;
  let conut = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(conut);
    }
  }, 2000 / goal);
}

// Latest Events Section

// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

/* let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime(); */
let countDownDate = new Date(
  `Dec 31, ${new Date().getFullYear()} 23:59:59`
).getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML =
    days < 10 ? `00${days}` : days < 100 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/* =============================================================================== *|

// Our Skills Section

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

/* =============================================================================== *|

// Our Awesome Stats Section

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let conut = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(conut);
    }
  }, 2000 / goal);
}

/* =============================================================================== */
