// Postavke eksperimenta
const EXPOSURE_TIME_SECONDS = 15;

// Ovdje kasnije zalijepi link na Google Forms / Qualtrics / anketu.
// Primjer: const SURVEY_URL = "https://forms.gle/...";
const SURVEY_URL = "";

// Vizualni timer na vrhu stranice
const timerBar = document.getElementById("timerBar");
timerBar.style.transition = `transform ${EXPOSURE_TIME_SECONDS}s linear`;
requestAnimationFrame(() => {
  timerBar.style.transform = "scaleX(0)";
});

// Automatsko preusmjeravanje nakon 15 sekundi.
// Trenutno je isključeno jer SURVEY_URL nije upisan.
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
