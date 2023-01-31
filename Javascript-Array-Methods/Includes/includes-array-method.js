let lottoArray = [];
let generatedNumber = 0;
let numbersGenerated = 0;
let foundNumber = true;

while (numbersGenerated < 12) {
  generatedNumber = Math.floor(Math.random() * 45) + 1;
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
