const message = document.querySelector(".message");
const button = document.querySelector("button");
const username = document.querySelector(".username");
const form = document.querySelector("form");


//let d = new Date ();
//const counter = date.getDay


form.addEventListener("submit", function (e) {
  e.preventDefault();
  message.textContent = weekendCounter(username.value);
});

const weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function weekendCounter(name) {
  const d = new Date();
  let day = d.getDay();
  let weekDay = weekday[d.getDay() - 1];

  let daysLeft = 5 - day;
  return `Hello ${name}!! Today is ${weekDay}. Only ${daysLeft} days left until Weekend !! `;
}