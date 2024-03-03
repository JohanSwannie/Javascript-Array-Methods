const some1 = document.getElementById("some1");

const list1 = [12, "sport", true, 18, 19.35, false];

const result1 = list1.some((item) => item / 3 === 6);

some1.innerHTML = `list1 = ${result1}`;

const some2 = document.getElementById("some2");

const isBiggerThan10 = (element) => element > 10;

some2.innerHTML = `Are any element in the array bigger than 10 - ${[
  2, 5, 8, 11, 4,
].some(isBiggerThan10)}`;
