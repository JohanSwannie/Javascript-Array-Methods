// EXAMPLE 1

const array1 = [20, 50, 10, 100, 40, 60, 30];

const mappingResult1 = array1.map((result1) => result1 * 3);

document.getElementById(
  "map1"
).innerHTML = `Result of new array is ${mappingResult1}`;

// EXAMPLE 2

const array2 = [
  {
    firstName: "John",
    lastName: "Hunter",
    age: 55,
  },
  {
    firstName: "Luke",
    lastName: "Donnaway",
    age: 37,
  },
  {
    firstName: "Mary",
    lastName: "Brown",
    age: 41,
  },
];

const mappingResult2 = array2.map(
  (row) => `firstName = ${row.firstName} - lastName = ${row.lastName} </br>`
);

document.getElementById("map2").innerHTML = `${mappingResult2}`;
