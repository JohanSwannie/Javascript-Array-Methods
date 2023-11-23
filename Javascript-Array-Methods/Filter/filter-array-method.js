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

if (filterResult2 instanceof Array) {
  alert("Yes it is an array!");
} else {
  alert("No, not an array at all");
}

const filter2 = document.getElementById("filter2");

filter2.innerHTML = `The prices higher than 440 dollars are : `;

for (let item of filterResult2) {
  for (let value in item) {
    if (item.hasOwnProperty(value)) {
      filter2.innerHTML += value + ": " + item[value] + " | ";
    } else {
      filter2.innerHTML += "What the heck - Your for loop has some bad syntax";
    }
  }
}

const filter3 = document.getElementById("filter3");

filter3.innerHTML = "New values are now : ";

for (let item of filterResult2) {
  filter3.innerHTML += `${item.name} - ${item.price} - ${item.qualityMark} &#8594; `;
}

for (let value in item) {
  if (item.hasOwnProperty(value)) console.log(`${value}: ${item[value]}`);
}
