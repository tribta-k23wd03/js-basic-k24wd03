/**
 * ==============================
 * LESSON: Functions
 * ==============================
 * 1. declaration & expression
 * ==============================
 */

walk();

// NOTE: SYNCTAX
// function declaration
function walk() {
  console.log("walk");
}

// function expression
const run = function () {
  console.log("run");
};

const x = 1;

run();
run;
console.log(run);

walk();

// 2. hoisting
// NOTE:
// Khi khai báo function thông qua cách declaration,
// thì có thể call function ở bất kỳ đâu.

// 3. Argument:
// Params: giá trị khai báo tại function
// Arguments: giá trị truyền vào khi call function

// Ví dụ về Premitive.
let y = 1;
y = "one";
// => dynamic

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3 (number)
console.log(sum("one", "two")); // onetwo
// => dynamic
console.log(sum(1)); // number + undefined = NaN
console.log(sum(1, 2, 3)); // 3 không lấy argument dư.

// Ví dụ về Ref.
const argument = [];
function sum2(...argument) {
  let total = 0;

  for (let k of argument) {
    total += k;
  }

  return total;
}
console.log(sum2(1, 2, 3, 4, 5));
console.log(sum2("one", 2, 3, 4, 5));
// => sử dụng Rest Operator để truyền mọi kiểu
// argument.

// 1. mutate argument, sử dụng rest operator
// Tính tổng sản phẩm:
function sum3(discount, ...prices) {
  //0.1 ,10, 20
  let total = prices.reduce((a, b) => a + b); // 30
  return `$${(total = total * (1 - discount))}`;
}

console.log(sum3(0.1, 10, 20)); // $9

// 2. mutate argument, default operator:
function caculateInterest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(caculateInterest(10000, 3.5, 5));

console.log(caculateInterest(10000)); // NaN

// truyền trực tiếp:
function caculateInterest2(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(caculateInterest2(10000, undefined, 5));

// sử dụng biểu thức điều kiện:
function caculateInterest3(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(caculateInterest3(10000));

// không truyền giá trị theo tham số
// function caculateInterest2(principal, undefined, undefined) {
//   return ((principal * rate) / 100) * years;
// }

/**
 * ==============================
 * LESSON: Getter & Setter
 * ==============================
 */

const person = {
  firstName: "Julius",
  lastName: "Ceasar",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};

console.log(person.firstName + " " + person.lastName);
console.log(`${person.firstName} ${person.lastName}`);
person.fullName();

// nếu như muốn thay đổi tên của obj person ???
person.firstName = "John";
person.lastName = "Smith";

// sử dụng Getter:
const person2 = {
  firstName: "Julius",
  lastName: "Ceasar",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    if (typeof value !== "string") throw new Error("Value must be string!!!");

    const parts = value.trim().split(" ", 2);
    if (parts.length !== 2) throw new Error("Value must not included space");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person2.fullName = "Achiles Peleus";

// NOTE: try...catch
try {
  // person2.fullName = null;
  person2.fullName = " A B ";
} catch (error) {
  // alert(error);
  console.log(error);
}
console.log(person2.fullName);
