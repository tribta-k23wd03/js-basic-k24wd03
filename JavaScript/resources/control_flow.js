/**
 * ==============================
 * LESSON: Control Flow
 * ==============================
 * 1. if/else/else if
 * ==============================
 */

// EXAMPLE:
// 1. 6am - 12pm : "Good Morning"
// 2. 12pm - 6pm : "Good Afternoon"
// 3. 6pm - 6am : "Good Evening"

let hour = 9999;

if (hour >= 6 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon");
} else if (hour < 24) {
  console.log("Good Evening");
} else {
  console.log("Please input 24 hours only.");
}

// 2. SWITCH...CASE
// EXAMPLE:
// kiểm tra Role:
// "GUEST", "ADMIN", "ANONYMOUS"
// Syntax:
// switch(option){
//  case:....
//  default:...
//}

let role = "GUEST"; // undefined.

switch (role) {
  case "GUEST":
    console.log("You Are GUEST!");
    break;
  case "ADMIN":
    console.log("You Are ADMIN!");
    break;
  default:
    console.log("You Are ANONYMOUS!");
}

/**
 * ==============================
 * LESSON: LOOPS
 * ==============================
 * 1. FOR
 * 2. WHILE
 * 3. DO...WHILE
 * ==============================
 */

// 1. for loops:
let i = 0;
for (i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 4 || 5 || is not defined

// 2. while:
while (i < 5) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 3. do...while loops
do {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
} while (i < 5);
