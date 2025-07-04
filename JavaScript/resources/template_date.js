/**
 * ==============================
 * LESSON: template `...`
 * ==============================
 */

const quote = "This is John's Book. \nThis book is interested.";
console.log(quote);

const quote2 = `This is John's Book.

This book is interested.`;
console.log(quote2);

// EXAMPLE:
const myEmail = `Hi John,

I have read your book, and I love it, can I buy you book.

Best Regards,
Donald Trump`;

const b = `This is my email: \n${myEmail}`;
console.log(b);

function greeting() {
  console.log("Hi, My name is John.");
  return `I am a student.`;
}

greeting();

const myMessage = `Hi, My name is John. ${greeting()}`;
console.log(myMessage);

function sum(n) {
  return `1 + 1 + 1 + ${n}`;
}

// <a src="..." />
function HtmlElement(link) {
  return `<a src=${link} />`;
}

const anchorElement=HtmlElement("https://https://drive.google.com/drive/folders/1D5Vv_anx0kNBY3Q6JQs6r7u0fO7ioCHj")

console.log(`My HTML Element: \n${anchorElement}`);


/**
 * ==============================
 * LESSON: Date
 * ==============================
 */
const now = new Date()

const date = new Date("July 4 2025 09:00")
console.log(date);

const dateFormat = new Date(2025, 7, 4, 9, 0, 0)
console.log(dateFormat);

console.log(now.getDate());