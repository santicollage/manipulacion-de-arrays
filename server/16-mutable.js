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
const myProducts = [];

const productIndex = food.findIndex(item => item.id === '🍟');
if (productIndex !== -1) {
  myProducts.push(food[productIndex]);
  food.splice(productIndex, 1);
}
console.log(food);
console.log(myProducts);

//Update

const food2 = [
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
const update = {
  id: "🍟",
  changes: {
    price: 15,
    description: 'delicioso'
  }
}

const productIndex2 = food2.findIndex(item => item.id === update.id);
food2[productIndex2] = {
  ...food2[productIndex2],
  ...update.changes
};

console.log(food2);