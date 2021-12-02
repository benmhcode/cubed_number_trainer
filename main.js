// generate a random number between 1 and 99 and store in variable randomNumber
let randomNumber = 0;
let cubedNumber = 0;
let wins = 0;
let losses = 0;
//let guessInput = 0;

document.getElementById("generate").addEventListener("click", generateNumber);
document.getElementById("submit").addEventListener("click", checkAnswer);
// document.getElementById("submit").addEventListener; key up function for when enter is hit instead of submit clicked

function generateNumber() {
  randomNumber = Math.floor(Math.random() * 98) + 1;
  cubedNumber = Math.pow(randomNumber, 3);

  //let cubedNumber = Math.pow(Math.floor(Math.random() * 98 + 1), 3);

  document.getElementById("randomNumber").innerText = cubedNumber;
  document.getElementById("submit").style.display = "block";
  document.getElementById("result").innerText = "";
  //document.getElementById("userGuess").innerText = " ";
  console.log(randomNumber);
  console.log(cubedNumber);
}

function checkAnswer() {
  let guessInput = document.getElementById("userGuess").value;
  pointNum = parseFloat(guessInput);
  if (pointNum === randomNumber) {
    wins = ++wins;
    document.getElementById("result").innerText = "you are correct";
    document.getElementById("correct").innerText = `${wins} correct`;
    document.getElementById("submit").style.display = "none";
    //console.log("you are correct");
    //console.log(wins);
  } else {
    losses = ++losses;
    document.getElementById(
      "result"
    ).innerText = `incorrect, it was ${randomNumber}`;
    document.getElementById("incorrect").innerText = `${losses} incorrect`;
    document.getElementById("submit").style.display = "none";
    //console.log(`incorrect, it was ${randomNumber}`);
    //console.log(losses);
  }
}

//
// cube the random number

// console log the output

// have and onckick to trigger random number from a play button
// display the number in html id="randomNumber"
// have a text box to enter the solution
// store the data from text box in guessInput

// compare randomNumber and guessInput
// if randomNumber === guessInput display "Congratulations!"
// else display === "Incorrect"
