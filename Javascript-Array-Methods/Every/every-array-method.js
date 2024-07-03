const every1 = document.getElementById("every1");

const list1 = [12, "sport", true, 18, 19.35, false];

const result1 = list1.every((item) => item / 3 === 6);

every1.innerHTML = `list1 = ${result1}`;

const every2 = document.getElementById("every2");

const isBiggerThan10 = (element) => element > 9;

every2.innerHTML = `Is every element in the array bigger than 10 - ${[
  12, 15, 18, 11, 14, 19, 22,
].every(isBiggerThan10)}`;
