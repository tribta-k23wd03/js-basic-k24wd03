/**
 * ==============================
 * LESSON: Arrays
 * ==============================
 */
const numbers = [3, 4];
const numbers2 = numbers; // [3,4,5]

numbers.push(5); // thêm vào cuối arr.

numbers.unshift(1); // thêm vào đầu arr

const addNums = [2, 3, 4, 5, "six"];
const sliceNum = numbers.splice(1, 1, ...addNums);
// NOTE:
// splice(a,b,c)
// a = điểm bắt đầu
// b = số lượng remove tính từ a
// c = danh sách các index muốn thêm.

/**
 * ==============================
 * LESSON: Finding Elements
 * ==============================
 */

const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

// indexOf()
n.indexOf("a"); // -1
n.indexOf(1); // 0
n.indexOf("1"); // string => -1

// lastIndexOf()
n.lastIndexOf(1); // tìm ngược lại từ array.length

// kiểm tra coi phần tử có tồn tại dựa vào indexOf
console.log(n.indexOf(1) !== -1); // true

// includes()
console.log(n.includes(1));

n.indexOf(1, 2);

console.log(n.includes(5, 5)); // false

/**
 * ==============================
 * LESSON: Finding Property
 * ==============================
 */

const courses = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
console.log(courses.includes({ id: 2, name: "B" })); // false

// find()
const refCourse = courses.find(function (c) {
  return c.name === "B";
});

// findIndex()
const index = courses.findIndex(function (c) {
  return c.name === "X"; // -1
});

/**
 * ==============================
 * LESSON: Arrow Funciton
 * ==============================
 */

//(element) => element > 10
//function (element) {element > 10}
// Syntax
const elementFunction = () => {};
const elementFunction2 = function () {};

// Thay đổi thành Arrow Function
const refCourse1 = courses.find((c) => c.name === "B");
const index1 = courses.findIndex((c) => c.name === "B"); // -1

/**
 * ==============================
 * LESSON: Remove 1 phần tử
 * ==============================
 */

let arr1 = [1, 2, 3, 4];

arr1.pop();
arr1.shift();
arr1.splice(0, 1);

/**
 * ==============================
 * LESSON: Xóa hết element trong array
 * ==============================
 */
// Cách 1:
let arr2 = [1, 2, 3, 4];
arr2 = [];

// Cách 2:
let arr3 = [1, 2, 3, 4];
arr3.length = 0;

// C3:
let arr4 = [1, 2, 3, 4];
arr4.splice(0, arr4.length);

// C4: pop()
let arr5 = [1, 2, 3, 4];
let arr6 = arr5;

while (arr5.length > 0) {
  arr5.pop();
}

/**
 * ==============================
 * LESSON: Kết nối
 * ==============================
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

// c1
const combined = [first + second]; // ['1,2,34,5,6'] - length = 1
const combined1 = [first, second]; // [Array(3), Array(3)]

// c2
const combined3 = first.concat(second);
const combined4 = second.concat(first);

// c3
// [1,2,3,4,5,6]
const slice = combined3.slice(2, 4); // [3,4]
const slice1 = combined3.slice(2); // từ start cho tới cuối.
const slice2 = combined3.slice(); // sao chep toàn bộ

// IMPORTANT: Object type
const a = [{ id: 1 }];
const b = [4, 5, 6];

const c = a.concat(b);

a[0].id = 10;

// a[]
// c[]

// sử dụng toán tử ... (spread operator)
const xyz = [...first, 4, true, ...second, 5, "one"];

/**
 * ==============================
 * NOTE: for...of để lặp qua từng phần tử
 * ==============================
 */

const array = [1, 2, 3];

for (const k of array) {
  console.log(k);
}

// forEach()
array.forEach(function (n, i, arr) {
  console.log(i, n, arr);
});

// NOTE:
// forEach(n, i,. arr)
// n: giá trị trong mảng
// i: index của các giá trị đó
// arr: là toàn bộ mảng

/**
 * ==============================
 * LESSON: JOIN()
 * ==============================
 */
const stringArr = "This is my book.";

const joinArray = array.join();
const splitString = stringArr.split(" ");

const slug = "alien laptop 2025 02 10";
const arraySlug = slug.split(" ");
const newSlug = arraySlug.join("-");

function createSlug(content) {
  const arraySlug = content.split(" ");
  const newSlug = arraySlug.join("-");
  return console.log(newSlug);
}


