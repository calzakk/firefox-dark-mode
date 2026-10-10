(() => {
  const STORAGE_KEY = "cyotec-dark-mode";
  const FILTERS = ["", "brightness(50%)", "invert(90%) hue-rotate(180deg)"];

  const apply = (state) => {
    const root = document.documentElement;
    if (root) {
      root.dataset.cyotecDarkMode = String(state);
      root.style.filter = FILTERS[state];
    }
  };

  const read = () => {
    try {
      const state = Number(localStorage.getItem(STORAGE_KEY));
      return state === 1 || state === 2 ? state : 0;
    } catch {
      return 0;
    }
  };

  const write = (state) => {
    try {
      localStorage.setItem(STORAGE_KEY, String(state));
    } catch {
      // Storage can be unavailable for restricted documents.
    }
  };

  const saved = read();
  if (saved) apply(saved);

  browser.runtime.onMessage.addListener((message) => {
    if (message?.type !== "toggle") return;
    const current = Number(document.documentElement.dataset.cyotecDarkMode) || 0;
    const next = (current + 1) % FILTERS.length;
    write(next);
    apply(next);
  });
})();
