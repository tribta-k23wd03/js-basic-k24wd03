/**
 * ==============================
 * LESSON: Sort/ reverse Array
 * ==============================
 */
const arr = [5, 4, 7, 2, 4, 7, 88, 1, 0, 99, 10];
const arrString = ["a", "e", "b"];
arr.sort();
arr.reverse();
arrString.sort();
arrString.reverse();

// object type
const menu = [
  { id: 1, name: "a", price: 500 },
  { id: 2, name: "B", price: 50 },
  { id: 3, name: "c", price: 100 },
];

// sort by price (sử dụng bảng mã ASCII)
// check link: https://vi.m.wikipedia.org/wiki/T%E1%BA%ADp_tin:ASCII-Table-wide.svg
menu.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

/**
 * ==============================
 * LESSON: Tesing - Kiểm tra phần tử bằng every(), some()
 * ==============================
 */

// every() yêu cầu tất cả members phải thỏa điều kiện
const arr1 = [5, 4, 7, 2, 4, 7, 88, 1, 0, 99, 10];
const checkArr = arr1.every(function (value) {
  return value >= 0;
});
console.log(checkArr);

const checkArr2 = arr1.every((value) => value >= 10);
console.log(checkArr2);

const checkArr3 = arr1.some((value) => value >= 10);
console.log(checkArr3);

/**
 * ==============================
 * LESSON: Filter Array
 * ==============================
 */
const numberArray = [1, -1, 2, 3];

const numberArray2 = numberArray.filter((v) => v < 0);
console.log(numberArray2);

// phân biệt slice/splice/filter
const n = [1, 2, 3, 4];

// 1. filter: lọc ra phần tử theo condition & không thay đổi mảng gốc
const evenNum = n.filter((e) => e % 2 === 0);

// 2. slice: copy 1 phần của mảng gốc & không thay đổi mảng gốc
const subN = n.slice(1, 2); // [2]

// 3. splice: remove/replace & thực hiện trên chính mảng gốc
const removeN = n.splice(1, 2); // [2, 3]
console.log(n); // [1, 4];

/**
 * ==============================
 * LESSON: Map
 * ==============================
 */
const z = [1, 2, 3, 4];

// Ứng dụng 1:
const items = z.map(function (x) {
  return `<li>${x}</li>`;
});

console.log(items);

const htmlElement = items.join("\n  ");

console.log(htmlElement);

console.log(`<ul>\n  ${htmlElement}\n</ul>`);

// Ứng dụng 2: chuyển array thành object array
const object = z.map((index) => ({ index }));
console.log(object);

// EXAMPLE:

const numbers = [1, 2, 3];

// method chain
// 1. [1,2,3]
// 2. [value:1,value:2,...]
// 3. [value:2,value:3]
// 4. [2, 3] || ???
const item = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(item);

/**
 * ==============================
 * LESSON: Tích lũy
 * ==============================
 */
// Tháng 1: $1.000
// Tháng 2: $100
// Total bank: $1.100
// total = total + amount => tích lũy
// total = amount => ghi đè

const salary = [1000, 100];
let total = 0;

for (const s of salary) {
  total += s;
}
console.log(total);

const sumSalary = salary.reduce(function (total, amount) {
  return total + amount;
});
console.log(sumSalary);

const sumSalary2 = salary.reduce((total, amount) => total + amount, 1000000);
console.log(sumSalary2);
