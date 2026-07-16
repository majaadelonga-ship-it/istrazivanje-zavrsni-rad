const EXPOSURE_TIME_SECONDS = 15;

const GOOGLE_FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLSdd7dqRbQc9rAXnuldpGfuwVG5i14yQWECWvkmdeObzpEA-EQ/viewform";
const GROUP_ENTRY_ID = "entry.2037905476";
const GROUP_VALUE = "B"; // ova stranica = verzija B (niska kognitivna lakoća)

const SURVEY_URL = `${GOOGLE_FORM_BASE}?usp=pp_url&${GROUP_ENTRY_ID}=${GROUP_VALUE}`;

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
