// EXAMPLE 1

const array1 = [27, 11, 18, 22, 10, 15, 33, 7, 28, 4];

const sort1 = array1.sort((a, b) => a - b);

document.getElementById("sort1").innerHTML = `The new sort order = ${sort1}`;

// EXAMPLE 2

const persons = [
  {
    name: "Paul",
    age: 39,
  },
  {
    name: "Mary",
    age: 26,
  },
  {
    name: "Luke",
    age: 34,
  },
  {
    name: "Dorothy",
    age: 23,
  },
];

const sort2 = persons.sort((x, y) => x.age - y.age);

// if (sort2 instanceof Array) {
//   alert("Yes it is an array");
// }

const sorter2 = document.getElementById("sort2");

sorter2.innerHTML = `List : `;

for (const value in sort2) {
  if (sort2.hasOwnProperty(value)) {
    const element = sort2[value];
    sorter2.innerHTML += `Name : ${element.name} is ${element.age} old | `;
  }
}

// OR

const sorter3 = document.getElementById("sort3");

sorter3.innerHTML = `List : `;

for (let item of sort2) {
  for (let value in item) {
    if (item.hasOwnProperty(value)) {
      sorter3.innerHTML += `${value} is ${item[value]} | `;
    }
  }
}

const sorter4 = document.getElementById("sort4");

for (let val of sort2) {
  sorter4.innerHTML += `${val.name} - ${val.age} | `;
}
