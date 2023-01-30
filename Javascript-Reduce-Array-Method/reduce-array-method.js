// EXAMPLE 1

const numberArray = [12, 17, 25, 10, 39, 20, 33, 29, 7, 16];

const startingPointNumber = 0;

const totalSum = numberArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  startingPointNumber
);

document.getElementById(
  "reduce1"
).innerText = `The sum of the numberArray = ${totalSum}`;

// EXAMPLE 1

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

const sportNameWithLongestDescription = athletes.reduce(
  (previousValue, currentValue) => {
    if (currentValue.sport.length > previousValue) {
      sport = currentValue.sport;
      return currentValue.sport.length;
    }
    return previousValue;
  },
  0
);

document.getElementById(
  "reduce2"
).innerHTML = `The sport ${sport} has the longest text description with ${sportNameWithLongestDescription} characters`;
