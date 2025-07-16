/**
 * ==============================
 * LESSON: Classes
 * ==============================
 */
function Circle(r) {
  this.radius = r;
}
Circle.prototype.draw = function () {
  console.log("I draw a circle.");
};

const circle = new Circle(5);

// Create Class synctax
// Name: Pascal
class Circle2 {
  constructor(r) {
    this.radius = r;
    this.draw = function () {
      console.log("I draw a circle.");
    };
  }
  compute() {
    console.log("calculate the position to draw.");
  }
}
const c = new Circle2(5);

// cách 2:
class Circle3 {
  constructor(r) {
    this.radius = r;
  }
  draw() {
    console.log("I draw a circle.");
  }
}

const circle3 = new Circle3(5);

// hoisting in class
// 1. function declaration - hoisting (call anywhere)
// 2. function expression - not hoisting

// 1. class declaration:
class Class {
  constructor() {
    console.log("class declaration");
  }
}

// 2. class expression:
const Class2 = class {
  constructor() {
    console.log("class expression");
  }
};

const o = new Class();
const z = new Class2();

// private members
class X {
  constructor(x) {
    this.x = x;
  }
  static z() {
    console.log("z");
  }
}
const x = new X(1);
