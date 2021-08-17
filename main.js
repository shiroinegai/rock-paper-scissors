console.log("Rock Paper Scissors is running.");

// Game

let selections = ["rock", "paper", "scissors"];
let [round, playerScore, computerScore] = [0, 0, 0];

computerPlay = () => {
  return selections[Math.floor(Math.random() * 3)];
};

playRound = (playerSelection = "rock", computerSelection = computerPlay()) => {
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

game = () => {
  while (playerScore < 5 && computerScore < 5) {
    playRound();
  }
};

// UI

const startView = document.querySelector(".start");
const scoreboardView = document.querySelector(".scoreboard");
const playAreaView = document.querySelector(".play-area");

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  toggleVisibility(startView);
  toggleVisibility(scoreboardView);
  toggleVisibility(playAreaView);
  game();
});

toggleVisibility = (node) => {
  node.classList.toggle("hidden");
};
