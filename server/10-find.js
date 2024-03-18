const numbers = [1,30,49,29,10,13,30];

const rta = numbers.find(item => item === 30);
console.log(rta);

const food = [
  {
    name: "Pizza",
    price: 20,
    id: '🍕'
  },
  {
    name: "Hamburger",
    price: 30,
    id: '🍔'
  },
  {
    name: "French fries",
    price: 10,
    id: '🍟'
  },
];

const rta2 = food.find(item => item.id == '🍟');
const rta3 = food.findIndex(item => item.id == '🍟');
console.log(rta2);
console.log(rta3);