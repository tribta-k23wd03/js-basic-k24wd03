/**
 * ==============================
 * LESSON: OBJECTS
 * ==============================
 */

// EXAMPLE:
// camel case (camelCase)
const person = {
  myName: "Joe Biden",
  myAge: 85,
  isMarrage: true,
  isPresident: false,
  isChair: undefined,
  isProperties: null,
  draw: function () {
    console.log("Joe Face");
  },
};

person.myCar = "Toyota";
person.countMoney = function () {
  console.log("$5000");
};

// EXAMPLE: khởi tạo object sử dụng func
// FUNCTION FACTORY: objects
// camelCase
// syntax
function personFactory(
  myNames,
  myAges,
  isMarrages,
  isPresidents,
  isChairs,
  isProperty
) {
  return {
    myName: myNames,
    myAge: myAges,
    isMarrage: isMarrages,
    isPresident: isMarrages,
    isChair: isChairs,
    isProperties: isProperty,
    draw: function () {
      console.log("Joe Face");
    },
  };
}

const currentPresident = personFactory(
  "Donald Trump",
  18,
  true,
  true,
  true,
  "$5"
);

// FUNCTION Constructor.
// named = Pascal (viết hoa chữ cái đầu)
function Circle(r) {
  this.radius = r;
  this.draw = function () {
    console.log("Vẽ hình tròn");
  };
}
const myCircle = new Circle(5);

/**
 * ==============================
 * NOTE:
 * ==============================
 * CRUD objects
 * ==============================
 */
// Add property:
// syntax:
// ObjName.PropertyName = "Prop_Value"

// Delete property:
// syntax:
// delete PropertyName;

delete myCircle.radius;
delete myCircle.draw;
console.log(myCircle); // ???

/**
 * ==============================
 * NOTE:
 * ==============================
 * Constructor Properties
 * ==============================
 */

function Circle2(r) {
  return (this.area = r * r * Math.PI);
}

Circle2(5);

let x = 10;
let y = x; // 10
x = 20; // 20

let Obj = { x: 10 };
let obj = Obj; // ??? obj = {x: 20}
Obj["x"] = 20; // Obj = {x: 20}

// EXAMPLE:
const xyz = new Object("String");
const zyx = new String("String");
const h = 10;

const e = h.toFixed(4);
let jk = zyx.toLowerCase();

// liệt kê tất cả props của currentPresident:

for (let key in currentPresident) {
  console.log(key);
}

for (let key of Object.keys(currentPresident)) {
  console.log(key);
}

/**
 * ==============================
 * LESSON: clone Object
 * ==============================
 */
// 1. sử dụng for...in
let cloneCurPre = {};

for (const key in currentPresident) {
  cloneCurPre[key] = currentPresident[key];
}

// 2. sử dụng Object root (method: assign)
let cloneCurPre2 = Object.assign({}, currentPresident);

// 3. es+6 Sử dụng cú pháp "..." (spread operator)
let cloneCurPre3 = { ...currentPresident };

/**
 * ==============================
 * LESSON: GARBAGE COLLECTOR - AUTO
 * ==============================
 * c language: free()
 * js: automatically.
 */

/**
 * ==============================
 * LESSON: Math
 * ==============================
 * link:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * 
 */

