const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Santiago',
    total: 100,
    delivered: false,
  },
  {
    customerName: 'David',
    total: 80,
    delivered: true,
  },
  {
    customerName: 'Eliceth',
    total: 120,
    delivered: false,
  },
];

console.log(orders);
const rta = orders.map(item => item.total);
console.log(rta);

// const rta2 = orders.map( item => {
//   item.tax = .19;
//   return item;
// })
// console.log(rta2);
// console.log(orders);

const rta3 = orders.map( item => {
  return {
    ...item,
    tax: .19
  };
})
console.log(rta3);
console.log(orders);
