/**
 * ==============================
 * LESSON: scope
 * ==============================
 */
let number = 0;
{
  const number = 1;
}
// console.log(number); // scope inside object

function start() {
  const number = 1;
  console.log(number);
}

if (true) {
  const number = 1;
  console.log(number);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// => local variable

// Global variable
let number2 = 0;
for (number2; number2 < 5; number2++) {
  console.log(number2);
}

// Arrow function:
const f = () => ({ a: 1 });
console.log(f());

// var, let, const scope
function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  console.log(i); // 5
}
testVar(); // RED
function testVar() {
  if (true) {
    var color = "RED";
  }
  console.log(color);
}

testVar(); // var = RED; const = ???

// khi sử dụng var để khai báo biến thì, nó sẽ
// được hoisting

// sử dụng var:
var color2 = "BLUE";
let age = 18;

console.log((window.color2 = "RED"));

// NOTE: this keyword
const video = {
  title: "Titanic",
  play() {
    console.log(this); // local
  },
};

video.stop = function () {
  console.log(this); // local
};

function playVideo() {
  console.log(this); // this là global khi khai báo
  // bằng function declaration
}

// constructor:
function Video(title) {
  this.title = title; // local
  console.log(this); // local của instance (object mà
  // constructor khởi tạo.)
}

const v = new Video("Titanic");

const video2 = {
  title: "My Video",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

video2.showTags();
