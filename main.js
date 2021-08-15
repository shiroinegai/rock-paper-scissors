console.log("Rock Paper Scissors is running.");

let selections = ["rock", "paper", "scissors"];

computerPlay = () => {
  return selections[Math.floor(Math.random() * 3)];
};

console.log(computerPlay());
