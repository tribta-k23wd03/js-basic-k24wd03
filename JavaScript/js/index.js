/**
 * ==============================
 * LESSON: Inheritance
 * ==============================
 */
// 1. Property
const o = { a: 1, b: 2, __proto__: { b: 3, c: 4 } };

console.log(o.a); // 1

console.log(o.b); // 2
// NOTE: b = shadowing

console.log(o.c); // 4
// NOTE: search in child --> search in parent --> found!

console.log(o.d); // undefined
// NOTE: search in child --> search in parent -->
// Object.prototype --> undefined

// 2. Method:
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};
console.log(parent.method()); // 3

const child = {
  __proto__: parent,
};
console.log(child.method()); // 3

child.value = 4;
// NOTE: Property shadowing

child.method(); // 5

parent.method(); // 3
