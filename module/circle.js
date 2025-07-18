const _radius = new WeakMap();

// cách 2 export trực tiếp ngay tại class.
export class Circle {
  constructor(r) {
    _radius.set(this, r);
  }
  draw() {
    console.log(`"I draw a circle with radius = ${_radius.get(this)}"`);
  }
}

// NOTE: sử dụng phương thức của NodeJS (CommonJS)
// trường hợp 1: Nếu có 1 class duy nhất
// module.exports = Circle;

// trường hơp 2: Nếu có nhiều hơn 1 class:
// module.exports.Circle = Circle;
// module.exports.Square = Square;

// NOTE: sử dụng phương thức của ES6 (module)
// cách 1: sử dụng default export
// export default Circle
