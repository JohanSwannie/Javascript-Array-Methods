// EXAMPLE 1

const array1 = [19, 23, 7, 38, 22, 14, 5, 45];

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

const filterResult2 = sportEquipment.filter((sport) => sport.price > 440);

const filter2 = document.getElementById("filter2");

filter2.innerHTML = `The prices higher than 440 dollars are : `;

for (const key in filterResult2) {
  if (filterResult2.hasOwnProperty.call(filterResult2, key)) {
    const element = filterResult2[key];
    filter2.innerHTML += element.price.toFixed(2) + " | ";
  }
}
