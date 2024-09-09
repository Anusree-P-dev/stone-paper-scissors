const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector(".msg");

let userScore = 0;
let compScore = 0;

// Getting user's choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Generating computer choice
const genCompChoice = () => {
  let options = ["stone", "paper", "scissors"];
  let choiceIdx = Math.floor(Math.random() * options.length);
  return options[choiceIdx];
};

// Checking for draw game
const draw = () => {
  msg.innerText = "Its a draw, play again";
  msg.style.backgroundColor = "#336180";
};

// Checking for winner
let userWin = true;
const winner = (userChoice, compChoice) => {
  const winConditions = {
    stone: "scissors",
    paper: "stone",
    scissors: "paper",
  };
  if (winConditions[userChoice] === compChoice) {
    userScore++;
    userScorePara.innerText = userScore;
    userWin = true;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    userWin = false;
  }
  showWinner(userWin, userChoice, compChoice);
};

// Playing game
const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if (userChoice === compChoice) {
    draw();
  } else {
    winner(userChoice, compChoice);
  }
};

// Display winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    msg.innerText = `You won!!! Computer chose ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You lost :( Computer chose ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};
