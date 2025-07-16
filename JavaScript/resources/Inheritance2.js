/**
 * ==============================
 * LESSON: Constructor
 * ==============================
 */
// Cach 1: đưa getValue() thành 1 func
// const boxPrototype = {
//   getValue() {
//     return this.value;
//   },
// };
// const boxes = [
//   { new Box(1) },
//   { value: 2, __proto__: boxPrototype },
//   { value: 3, __proto__: boxPrototype },
// ];

// Cách 2: khởi tạo object từ constructor
function Box(value) {
  return (this.value = value);
}

Box.prototype.getValue = function () {
  return this.value;
};

// khởi tạo 1 method addValue = value + 1
// sau đó lưu lên prototype của boxes[0,1,2]
Box.prototype.addValue = function () {
  return this.value + 1;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
// boxes --> array.prototype --> object.proto --> null

/**
 * ==============================
 * LESSON: khởi tạo prototype chain cho constructor
 * ==============================
 */
function DoSomething() {}
DoSomething.prototype.f = "a";
// constructor.prototype (f)

// instance = child obj
const doSomethingInstance = new DoSomething();
// object (p)
doSomethingInstance.p = "b";

doSomethingInstance.p; // ??? b
doSomethingInstance.f; // ??? a
DoSomething.p; // ??? undefined
DoSomething.f; // ??? undefined
DoSomething.prototype.p; // ??? undefined
DoSomething.prototype.f; // ??? a

// Cách 1: khởi tạo Object và prototype thông qua literal:
const o = { a: 1 };
// o --> Object.prototype --> null
const b = ["one", "two", "three"];
// b --> Array.prototype --> object.prototype --> null

function F() {
  return 2;
}
// F --> Function.prototype --> Object.prototype --> null

const p = { b: 2, __proto__: o };
// p --> o --> Object.prototype --> null

// Cách 2: sử dụng constructor
function Graph() {
  this.verticles = [];
  this.edges = [];
}

Graph.prototype.add = function (value) {
  this.verticles.push(value);
};

// Graph.prototype.remove = function (value) {
//   console.log("Remove the last verticle.");
//   this.verticles.pop(value);
// };
Object.defineProperty(Graph.prototype, "remove", {
  enumerable: true,
  writable: false,
  configurable: true,
});

const g = new Graph();

// xóa key của object g:
delete Graph.prototype.remove;

// chỉnh sửa key của object g:
Graph.prototype.remove = function () {
  console.log("update successfully!!!");
};

// lấy key của object g:
for (const key in g) {
  console.log(key);
}

// Cách 3: Object.create()
const a = { a: 1 };
const b1 = Object.create(a);
const c = Object.create(b1);
// c --> b1 --> a --> ....
const d = Object.create(null);
// d --> null
console.log(d.hasOwnProperty);

const z = Object.create(Object.prototype, {
  sayHi: {
    value: function () {
      console.log("Hi!");
    },
    enumerable: true,
    writable: true,
    configurable: true,
  },
  a: {
    value: 9_999, // 9999
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

// id: 823_864_919_284

// Cách 4: __proto__
const obj = {};
obj.__proto__ = { a: 1 };
obj.__proto__.__proto__ = { b: 2 };

obj.a; // ??? 1
obj.b; // ??? 2

// Cách 5: Object.setPrototypeOf();
const h = { a: 1 };
const i = { b: 2 };
Object.setPrototypeOf(h, i);

// h --> i
// i --> object.prototype