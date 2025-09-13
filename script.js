(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Range chips toggle functionality
  const chips = $$(".chip--selectable");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      // Remove active state from all chips
      chips.forEach((c) => c.classList.remove("is-active"));
      
      // Add active state to clicked chip
      chip.classList.add("is-active");
      
      // Update aria-pressed for accessibility
      chips.forEach((c) => c.setAttribute("aria-pressed", c === chip ? "true" : "false"));
    });
  });
})();
