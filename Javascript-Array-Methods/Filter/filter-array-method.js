// EXAMPLE 1

const array1 = [19, 23, 7, 38, 22, 14, 5, 45, 71, 34];

const filterResult1 = array1.filter((data) => data > 30);

document.getElementById(
  "filter1"
).innerHTML = `Filtered Data = ${filterResult1}`;

// EXAMPLE 2

const sportEquipment = [
  {
    name: "Golf Clubs",
    price: 695.5,
    qualityMark: "A+",
  },
  {
    name: "Tennis Racket",
    price: 375.0,
    qualityMark: "A-",
  },
  {
    name: "Cricket Bat",
    price: 285.75,
    qualityMark: "B+",
  },
  {
    name: "Baseball Bat",
    price: 445.25,
    qualityMark: "A",
  },
];

const filter2 = document.getElementById("filter2");

const filterResult2 = sportEquipment.filter((sport) => sport.price > 440);

filter2.innerHTML = `The prices higher than 440 dollars are : `;

for (let item of filterResult2) {
  for (let value in item) {
    if (item.hasOwnProperty(value)) {
      filter2.innerHTML += value + ": " + item[value] + " | ";
    } else {
      filter2.innerHTML +=
        "What the heck - Your for loops have some bad syntax";
    }
  }
}

const filter3 = document.getElementById("filter3");

filter3.innerHTML = "New values are now : ";

for (let item of filterResult2) {
  filter3.innerHTML += `${item.name} - ${item.price} - ${item.qualityMark} &#8594; `;
}

const filter4 = document.getElementById("filter4");

let anotherArray = [12, "Mary", true, 109.24, "John", false, "James"];

const filteredArray = anotherArray.filter((filty) => typeof filty == "number");

let filteredText = "";

if (filteredArray.length > 1) {
  filteredText = "Type of number values are : ";
} else {
  filteredText = "Type of number value is : ";
}

filter4.innerHTML = `${filteredText}  ${filteredArray}`;

const filter5 = document.getElementById("filter5");

let people = [
  {
    name: "James",
    age: 27,
  },
  {
    name: "Mary",
    age: 25,
  },
];

let extraPeople = [
  { name: "Lillian", age: 33 },
  { name: "Thomas", age: 36 },
  { name: "Martin", age: 22 },
  { name: "Julie", age: 59 },
  { name: "Roxanne", age: 28 },
  { name: "Natasha", age: 20 },
  { name: "Sherene", age: 30 },
  { name: "Karen", age: 19 },
  { name: "Julian", age: 27 },
];

for (let value of extraPeople) {
  people.push(value);
}

const filteredPeople = people.filter((person) => person.age > 25);

filter5.innerHTML = "People older than 25 are : ";

for (let item of filteredPeople) {
  filter5.innerHTML += `${item.name} is ${item.age} | `;
}
