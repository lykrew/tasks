import "./style.css";

const quotes = [
  { text: "Жизнь — это то, что с тобой происходит, пока ты строишь планы.", author: "Джон Леннон" },
  { text: "Не бойся совершенства — тебе его не достичь.", author: "Сальвадор Дали" },
  { text: "Делай, что можешь, с тем, что имеешь, там, где ты есть.", author: "Теодор Рузвельт" },
  { text: "Секрет продвижения вперёд — начать.", author: "Марк Твен" },
  { text: "Падать — нормально. Не подниматься — вот проблема.", author: "Неизвестный автор" },
  { text: "Счастье — это не готовый продукт. Оно приходит от ваших действий.", author: "Далай-лама" },
  { text: "Я люблю тебя не за то, кто ты, а за то, кто я, когда я с тобой.", author: "Рой Крофт" },
];

function pickRandomIndex(excludeIndex) {
  if (quotes.length === 0) return -1;
  if (quotes.length === 1) return 0;

  let idx = Math.floor(Math.random() * quotes.length);
  while (idx === excludeIndex) {
    idx = Math.floor(Math.random() * quotes.length);
  }
  return idx;
}

const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteBtnEl = document.getElementById("quoteBtn");

if (!quoteTextEl || !quoteAuthorEl || !quoteBtnEl) {
  throw new Error("Не найдены элементы DOM: quoteText, quoteAuthor, quoteBtn");
}

let lastIndex = -1;

function renderQuote(index) {
  const q = quotes[index];
  quoteTextEl.textContent = q.text;
  quoteAuthorEl.textContent = q.author ? `— ${q.author}` : "";
}

function showRandomQuote() {
  const nextIndex = pickRandomIndex(lastIndex);
  if (nextIndex === -1) return;
  lastIndex = nextIndex;
  renderQuote(nextIndex);
}

quoteBtnEl.addEventListener("click", showRandomQuote);
showRandomQuote();