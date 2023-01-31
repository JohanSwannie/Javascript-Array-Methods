const butt1 = document.getElementById("b1");
const butt2 = document.getElementById("b2");
const butt3 = document.getElementById("b3");
const butt4 = document.getElementById("b4");

var totalNumbers = 0;

const determineButtonChosen = () => {
  butt1.addEventListener("click", () => {
    totalNumbers = 35;
  });
  butt2.addEventListener("click", () => {
    totalNumbers = 40;
  });
  butt3.addEventListener("click", () => {
    totalNumbers = 45;
  });
  butt4.addEventListener("click", () => {
    totalNumbers = 47;
  });
};

determineButtonChosen();

function checkIT(event) {
  let numbersToUse = 0;
  let generatedNumber = 0;
  let numbersGenerated = 0;
  let foundNumber = true;
  let lottoArray = [];
  for (let i = 0; i < 10; i++) {
    document.getElementById(`p${i + 1}`).innerHTML = "";
  }
  if (event.target.value > 5 && event.target.value < 11) {
    if (totalNumbers > 0) {
      numbersToUse = parseInt(event.target.value);
      while (numbersGenerated < numbersToUse) {
        generatedNumber = Math.floor(Math.random() * totalNumbers) + 1;
        foundNumber = lottoArray.includes(generatedNumber);
        if (!foundNumber) {
          lottoArray.push(generatedNumber);
          numbersGenerated++;
        }
      }
      lottoArray.sort((a, b) => a - b);
      for (let j = 0; j < lottoArray.length; j++) {
        document.getElementById(`p${j + 1}`).innerHTML = lottoArray[j];
      }
    } else {
      alert("You must first click a block to choose total numbers");
    }
  } else {
    alert("You can Not generated that amount of numbers");
  }
}
