// Object Initialize:
const mrPresident = {
  age: 20,
  myName: "Joe Biden",
  isOld: true,
  isPresident: false,
  myMoney: null,
  myWallet: undefined,
};

// toán tử "."
console.log(mrPresident.age);
console.log(mrPresident.myName);

// notation: [ ]
mrPresident["myName"] = "Donald Trump";

mrPresident["myName"] = "Alice"; // ReferenceError: myName is not defined

mrPresident["myBike"] = "Đầm";
mrPresident.myBike;