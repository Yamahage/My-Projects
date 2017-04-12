function getUserChoice() {
  var userInput = prompt('rock, paper, or scissors?');
  userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose rock, paper, or scissors!');
  }
}

function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * 3);
 	switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
                      }
      
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Tie Game!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'bomb') {
    return 'Well I guess you win!!!';
  }
}

function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('Your choice: ' + userChoice);
  console.log('Computer chose: ' + computerChoice);
  console.log('Winner: ' + determineWinner(userChoice, computerChoice));
}

playGame();