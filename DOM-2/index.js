/**
 * LESSON: Parent Event Vs Child Event
 */
// const btn = document.querySelector("button");
// const box = document.querySelector("div");
// const video = document.querySelector("video");

// btn.addEventListener("click", () => box.classList.remove("hidden"));

// video.addEventListener("click", (event) => {
//   event.stopPropagation();
//   video.play();
// });

// box.addEventListener("click", () => box.classList.add("hidden"));

/**
 * LESSON: Phân quyền Event - Event Delegation
 */
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
  const randColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  return randColor;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = bgChange();
});
