(() => {
  const heroNote = document.getElementById("cta-note");

  const pilotNote = document.getElementById("pilot-note");
  const mailtoCtas = document.querySelectorAll('[data-cta="mailto"]');

  mailtoCtas.forEach((cta) => {
    cta.addEventListener("click", () => {
      if (heroNote) {
        heroNote.textContent = "Opens your email app. No form. No personal data is collected on this page.";
      }
      if (pilotNote) {
        pilotNote.textContent = "Opens your email app. No form. No personal data is collected on this page.";
      }
    });
  });
})();
