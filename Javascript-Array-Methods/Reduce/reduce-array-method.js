// EXAMPLE 1

const numberArray = [12, 17, 25, 10, 39, 20, 33, 29, 7, 16];

const iVal = 0;

const totalSum = numberArray.reduce((pVal, cVal) => pVal + cVal, iVal);

document.getElementById(
  "reduce1"
).innerText = `The sum of the number Array = ${totalSum}`;

// EXAMPLE 2

const athletes = [
  {
    name: "Husein Bolt",
    age: 37,
    sport: "Athletics",
  },
  {
    name: "Dennis Dateling",
    age: 27,
    sport: "Table Tennis",
  },
  {
    name: "Luke Hanekom",
    age: 28,
    sport: "Cricket",
  },
  {
    name: "Lionel Messi",
    age: 36,
    sport: "Football",
  },
  {
    name: "Roger Federer",
    age: 42,
    sport: "Tennis",
  },
  {
    name: "Mary Cooper",
    age: 45,
    sport: "Netball",
  },
];

let sport = "";

const LongestText = athletes.reduce((pVal, cVal) => {
  if (cVal.sport.length > pVal) {
    sport = cVal.sport;
    return cVal.sport.length;
  }
  return pVal;
}, 0);

document.getElementById(
  "reduce2"
).innerHTML = `The sport ${sport} has the longest text description with ${LongestText} characters`;

// EXAMPLE 3

let end = "";

const fullNameInitials = athletes.reduce((pVal, cVal, index, array) => {
  const fullName = cVal.name.split(" ");
  let initials = `${fullName[0][0]}${fullName[1][0]}`;
  if (index === array.length - 1) {
    end = " -- End of array";
  }
  return pVal + " - " + initials + end;
}, "");

document.getElementById(
  "reduce3"
).innerHTML = `The Full Name initials of each athlete are  ${fullNameInitials}`;
