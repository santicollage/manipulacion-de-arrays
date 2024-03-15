const words = ['spray', 'limit', 'elite', 'exuberant'];

const rta = words.filter(item => item.length >= 6);

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

const rta2 = orders.filter(item => item.delivered && item.total > 70);
console.log(rta2);

const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}

console.log(search('Santi'));