const numbers = [1,2,3,4,5];

const rta = numbers.some(item => item % 2 === 0);

console.log(rta);

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

const rta2 = orders.some(item => item.delivered);
console.log(rta2);