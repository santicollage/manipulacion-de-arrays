const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function countWords(array) {
  // Tu código aquí 👈
  const rta = array.flatMap(item => item.split(' ')).reduce((count,item) => count += 1, 0)
  console.log(rta);
}

countWords(input);