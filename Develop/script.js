// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];


function getPasswordOption() {
  var length = parseInt(
    prompt(
      "Please list a length for your password, pick a number between 8-128"
    )
  );

  if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters");
    return null;
  }

  var hasLowercaseLetter = confirm(
    "Would you like to include lowercase letters?"
  );
  var hasUppercaseLetter = confirm(
    "Would you like to include uppercase letters?"
  );
  var hasNumber = confirm(
    "Would you like to include numbers in your password?"
  );
  var hasSpecialCharacters = confirm(
    "Would you like to incude special characters in your password?"
  );
  if (
    hasLowercaseLetter === false &&
    hasUppercaseLetter === false &&
    hasNumber === false &&
    hasSpecialCharacters === false
  ) {
    alert("You must select at least one password option");
    return null;
  }

  var passwordOptionsObj = {
    length: length,
    lower: hasLowercaseLetter,
    upper: hasUppercaseLetter,
    number: hasNumber,
    special: hasSpecialCharacters,
  };
  return passwordOptionsObj;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandomElementFromArray(array) {
  var randomIndex = Math.floor(Math.random() * array.length)
  var randomElement = array[randomIndex]

  return randomElement
}

function generatePassword() {
  var options = getPasswordOption();
  // 
  var guaranteedCharacters = [];
  // array to store password 
  var finalPasswordArray = [];
  //
  var possibleCharacters = []

  if (options.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandomElementFromArray(lowerCasedCharacters))
  }

  if (options.upper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandomElementFromArray(upperCasedCharacters))
  }

  if (options.number) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandomElementFromArray(numericCharacters))
  }

  if(options.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandomElementFromArray(specialCharacters))
  }

  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandomElementFromArray(possibleCharacters)
    finalPasswordArray.push(possibleChar)
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalPasswordArray[i] = guaranteedCharacters[i]
  }

  return finalPasswordArray.join('')
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
