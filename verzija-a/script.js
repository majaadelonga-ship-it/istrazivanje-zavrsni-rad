

const EXPOSURE_TIME_SECONDS = 15;

const GOOGLE_FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLScmCnnW2vt0z6ngGWDnn7yqmy88d5PO2ymCgi7iJsq6NyGdCQ/viewform";
const GROUP_ENTRY_ID = "entry.918774680";
const GROUP_VALUE = "A"; // ova stranica = verzija A (visoka kognitivna lakoća)

const SURVEY_URL = `${GOOGLE_FORM_BASE}?usp=pp_url&${GROUP_ENTRY_ID}=${GROUP_VALUE}`;

// Vizualni timer na vrhu stranice
const timerBar = document.getElementById("timerBar");
timerBar.style.transition = `transform ${EXPOSURE_TIME_SECONDS}s linear`;
requestAnimationFrame(() => {
  timerBar.style.transform = "scaleX(0)";
});

// Automatsko preusmjeravanje nakon 15 sekundi na pilot anketu, s već upisanom grupom.
setTimeout(() => {
  if (SURVEY_URL) {
    window.location.href = SURVEY_URL;
  }
}, EXPOSURE_TIME_SECONDS * 1000);

// Klik na gumb se bilježi u konzoli samo za testiranje.
const buyButton = document.getElementById("buyButton");
if (buyButton) {
  buyButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Klik na CTA: Kupi odmah");
  });
}
