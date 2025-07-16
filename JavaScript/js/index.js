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

// 
