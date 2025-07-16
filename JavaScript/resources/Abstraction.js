/**
 * ==============================
 * LESSON: OOP
 * ==============================
 * 1. Abstraction:
 * ==============================
 */

function Circle(r) {
  this.radius = r;

  let defaultLocation = { x: 10, y: 20 };

  // sử dụng getter để giới hạn scope cho params:
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (
        !value.x ||
        !value.y ||
        typeof value.x !== "number" ||
        typeof value.y !== "number"
      )
        throw new Error("must enter x/y & must be number");

      defaultLocation = value;
    },
    
  });

  this.draw = function () {
    compute();
    console.log("I draw a circle by default location.");
  };
  function compute() {
    return console.log(r * r * Math.PI);
  }
}

const circle = new Circle(10);

// NOTE: chỉ hiển thị ra ngoài những params nào
// cần thay đổi hoặc truyền value.
