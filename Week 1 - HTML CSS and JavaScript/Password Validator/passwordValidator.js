var input = prompt('What would you like to set your password to?');

function isPasswordValid(input) {
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Password is valid');
  }
  if (!hasUppercase(input)) {
    console.log('Password needs a capital letter');
  }
  if (!hasLowercase(input)) {
    console.log('Password needs a lowercase letter');
  }
  if (!isLongEnough(input)) {
    console.log('Password must be at least 8 characters');
  }
  if (!hasSpecialCharacter(input)) {
    console.log('Password needs a special character');
  }
}

function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
        return true;
        }
  }
}

function hasLowercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  if (input.length >= 8) {
      return true;
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
      if (input[i] === specialCharacters[j]) {
        return true;
      }
    }
  }
}

isPasswordValid(input);