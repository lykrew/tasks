import "./style.css";

import { quotes } from "./data/quotes.js";
import { createQuoteWidget } from "./ui/quoteWidget.js";

const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const quoteBtnEl = document.getElementById("quoteBtn");

createQuoteWidget({
  quotes,
  quoteTextEl,
  quoteAuthorEl,
  quoteBtnEl,
});