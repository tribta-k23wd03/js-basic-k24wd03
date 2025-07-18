// const p = document.querySelectorAll("p");

// // for (const key in p) {
// //   console.log(p[key]);
// // }

// for (const key of p) {
//   console.log(key);
// }

// // alert(p[0]); // [object HTMLParagraphElement]
// // alert(p[0].nodeName); // 'P'

// // Cách 2: truy cập HTML element từ js
// window.onload = () => {
//   const heading = document.createElement("h1");
//   // heading = <h1></h1>
//   const headingText = document.createTextNode("Data from textNode");
//   // headingText = Data from textNode
//   heading.appendChild(headingText);
//   //   <h1>Data from textNode</h1>
//   document.body.appendChild(heading);
//   // <body><h1>Data from textNode</h1></body>
// };

// // NOTE: khởi tạo table trong DOM.
// function generateTable() {
//   const tbl = document.createElement("table");
//   // tbl = <table></table>
//   const tblBody = document.createElement("tbody");
//   // tblBody = <tbody></tbody>
//   for (let i = 0; i < 2; i++) {
//     const row = document.createElement("tr");
//     // row = <tr></tr>
//     for (let j = 0; j < 2; j++) {
//       const cell = document.createElement("td");
//       // cell = <td></td>
//       row.appendChild(cell);
//       // row = <tr><td></td></tr>
//       const cellText = document.createTextNode(`row:${i} cell:${j}`);
//       cell.appendChild(cellText);
//     }
//     tblBody.appendChild(row);
//     // tblBody = <tbody><tr><td></td></tr></tbody>
//   }
//   tbl.appendChild(tblBody);
//   // tbl = <table><tbody><tr><td></td></tr></tbody></table>
//   document.body.appendChild(tbl);

//   tbl.setAttribute("border", "2");
// }

// document.querySelector("input").addEventListener("click", generateTable);

// NOTE: color the element background
// background:"red";
const paragraphs = document.getElementsByTagName("p");
const secondParagraph = paragraphs[1];
secondParagraph.style.background = "red";
