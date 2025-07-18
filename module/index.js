// Import = NodeJS (CommonJS)
// const Circle = require("./circle");

// Import = ES6 (module)
import { Circle } from "./circle.js";

const c = new Circle(10);

console.log(c.r); // undefined
console.log(_radius.get(c)); // ??? 10
