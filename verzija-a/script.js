// ⚠️ OVO JE PRIVREMENA VERZIJA ZA PREDTESTIRANJE (PILOT).
// Nakon što prikupiš 20 odgovora, VRATI staru verziju koja vodi na glavnu anketu.

const EXPOSURE_TIME_SECONDS = 15;

const GOOGLE_FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLScmCnnW2vt0z6ngGWDnn7yqmy88d5PO2ymCgi7iJsq6NyGdCQ/viewform";
const GROUP_ENTRY_ID = "entry.918774680";
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
