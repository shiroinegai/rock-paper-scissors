console.log("Rock Paper Scissors is running.");

// Game

let selections = ["rock", "paper", "scissors"];
let [round, playerScore, computerScore] = [0, 0, 0];

computerPlay = () => {
  return selections[Math.floor(Math.random() * 3)];
};

playRound = (playerSelection, computerSelection = computerPlay()) => {
  console.log(`Round ${++round}`);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win, ${playerSelection} defeated ${computerSelection}!`);
    console.log(`Player: ${++playerScore} CPU: ${computerScore}`);
  } else if (playerSelection === computerSelection) {
    console.log(`Both players picked ${computerSelection}, it's a tie!`);
    console.log(`Player: ${playerScore} CPU: ${computerScore}`);
  } else {
    console.log(
      `You lose, ${computerSelection} defeated ${playerSelection}...`
    );
    console.log(`Player: ${playerScore} CPU: ${++computerScore}`);
  }
};

// UI

const startView = document.querySelector(".start");
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  toggleVisibility(startView);
  toggleVisibility(scoreboardView);
  toggleVisibility(playAreaView);
});

toggleVisibility = (node) => {
  node.classList.toggle("hidden");
};

const scoreboardView = document.querySelector(".scoreboard");
const roundNode = document.querySelector(".round");
const playerScoreNode = document.querySelector(".player-score");
const cpuScoreNode = document.querySelector(".cpu-score");

const playAreaView = document.querySelector(".play-area");
const rock = document.querySelector(".rock");
rock.addEventListener("click", (e) => {
  playRound("rock");
  e.target.blur();
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", (e) => {
  playRound("paper");
  e.target.blur();
});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", (e) => {
  playRound("scissors");
  e.target.blur();
});
