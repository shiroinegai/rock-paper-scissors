console.log("Rock Paper Scissors is running.");

// Game

let selections = ["rock", "paper", "scissors"];
let [round, playerScore, computerScore] = [1, 0, 0];

computerPlay = () => {
  return selections[Math.floor(Math.random() * 3)];
};

playRound = (playerSelection, computerSelection = computerPlay()) => {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    updateGameText(
      `You win, ${playerSelection} defeated ${computerSelection}!`
    );
    updatePlayerScore();
  } else if (playerSelection === computerSelection) {
    updateGameText(`Both players picked ${computerSelection}, it's a tie!`);
  } else {
    updateGameText(
      `You lose, ${computerSelection} defeated ${playerSelection}...`
    );
    updateComputerScore();
  }
  updateRound();
  if (playerScore === 5 || computerScore === 5) {
    toggleVisibility(selectionsView);
  }
  if (playerScore === 5) {
    replaceRoundText("Congrats");
    updateGameText("You have claimed victory!");
  }
  if (computerScore === 5) {
    replaceRoundText("Defeat");
    updateGameText("Better luck next time!");
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
updateRound = () => {
  roundNode.innerText = `Round ${++round}`;
};
replaceRoundText = (newText) => {
  roundNode.innerText = `${newText}`;
};
const playerScoreNode = document.querySelector(".player-score");
updatePlayerScore = () => {
  playerScoreNode.innerText = `${++playerScore}`;
};
const cpuScoreNode = document.querySelector(".cpu-score");
updateComputerScore = () => {
  cpuScoreNode.innerText = `${++computerScore}`;
};

const playAreaView = document.querySelector(".play-area");
const selectionsView = document.querySelector(".selections");
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

const gameText = document.querySelector(".game-text");
updateGameText = (newGameText) => {
  gameText.innerText = newGameText;
};
