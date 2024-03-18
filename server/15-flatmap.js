const users = [
  {
    userId: 1,
    username: "Tom",
    attributes: ["Nice", "Cute"]
  },
  {
    userId: 2,
    username: "Mike",
    attributes: ["Lovely"]
  },
  {
    userId: 3,
    username: "Santi",
    attributes: ["Nice", "Cool"]
  }
];

const rta = users.flatMap(user => user.attributes);
console.log(rta);