/**
 * ==============================
 * LESSON: Event
 * ==============================
 */

const btn = document.querySelector("button");

// 0.1 ~ 0
// 0.5 ~ 0
// 0.9 ~ 0
function random(number) {
  return Math.floor(Math.random() * (number + 1)); // 0 -> 1 (0.1,0.01,0.001,...)
  // 0 ---> 1 * 255
  // 0.9 * 255 ~
}

// khởi tạo event:
btn.addEventListener("click", () => {
  const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  document.body.style.backgroundColor = randomColor;
  // 0 --> 255
  //   document.body.style.backgroundColor = rgb(
  //     random(255), // return random number,
  //     random(255), // return random number,
  //     random(255) // return random number,
  //   );
});

/**
 * ==============================
 * LESSON: Event: Read KeyStroke
 * ==============================
 */
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
