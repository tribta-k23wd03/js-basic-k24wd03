/**
 * ==============================
 * LESSON: Mixins
 * ==============================
 */
const canEat = {
  eat: function () {
    this.hunger;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("walking");
  },
};

const canSwim = {
  swim: function () {
    console.log("swim");
  },
};

const cat = Object.assign({}, canEat, canWalk);

// sử dụng constructor kết hợp composition:
function Cat() {
  this.hunger = 100;
}
Object.assign(Cat.prototype, canEat, canWalk);

function GoldFish() {
  this.hunger = 100;
}
Object.assign(GoldFish.prototype, canEat, canSwim);

// khởi tạo custom function
function mixins(a, ...b) {
  Object.assign(a, ...b);
}

function Dog() {}
mixins(Dog.prototype, canEat, canWalk);
