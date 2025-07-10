const menu = 
[
  {id: 1, name: "a", price: 50},
  {id: 2, name: "B", price: 40},
  {id: 3, name: "c", price: 25},
];

const gia = menu.every(a => a.price > 40);