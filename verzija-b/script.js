const EXPOSURE_TIME_SECONDS = 15;

// Ovdje kasnije stavi link na drugu anketu ili istu anketu s uvjetom "niska kognitivna lakoća".
const SURVEY_URL = "";

const timerBar = document.getElementById("timerBar");
timerBar.style.transition = `transform ${EXPOSURE_TIME_SECONDS}s linear`;

requestAnimationFrame(() => {
  timerBar.style.transform = "scaleX(0)";
});

setTimeout(() => {
  if (SURVEY_URL) {
    window.location.href = SURVEY_URL;
  }
}, EXPOSURE_TIME_SECONDS * 1000);

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Klik na gumb u verziji niske kognitivne lakoće");
  });
});
