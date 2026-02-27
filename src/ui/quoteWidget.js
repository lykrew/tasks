import { pickRandomIndex } from "../lib/random.js";

export function createQuoteWidget({ quotes, quoteTextEl, quoteAuthorEl, quoteBtnEl }) {
  if (!Array.isArray(quotes)) throw new Error("quotes должен быть массивом");
  if (!quoteTextEl || !quoteAuthorEl || !quoteBtnEl) {
    throw new Error("Не переданы элементы DOM для виджета цитат");
  }

  let lastIndex = -1;

  function render(index) {
    const q = quotes[index];
    quoteTextEl.textContent = q?.text ?? "";
    quoteAuthorEl.textContent = q?.author ? `— ${q.author}` : "";
  }

  function showRandom() {
    const nextIndex = pickRandomIndex(quotes.length, lastIndex);
    if (nextIndex === -1) return;
    lastIndex = nextIndex;
    render(nextIndex);
  }

  quoteBtnEl.addEventListener("click", showRandom);
  showRandom();

  return {
    showRandom,
  };
}
