console.log("Rock Paper Scissors is running.");

let selections = ["rock", "paper", "scissors"];

computerPlay = () => {
  return selections[Math.floor(Math.random() * 3)];
};

playRound = (playerSelection = "rock", computerSelection = computerPlay()) => {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win, ${playerSelection} defeated ${computerSelection}!`);
  } else if (playerSelection === computerSelection) {
    console.log(`Both players picked ${computerSelection}, it's a tie!`);
  } else {
    console.log(
      `You lose, ${computerSelection} defeated ${playerSelection}...`
    );
  }
};

playRound();
