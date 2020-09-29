// Create variable arrays
var pwLength = 0;
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "#", "$", "%", "&"]

// Prompt user for pw criteria 
function criteriaNeeded() {
  pwLength = parseInt(prompt("How long would you like your password to be? Please choose between 8-128 characters."));
  if (pwLength >= 8 || passwordLength <= 128) {
    var choiceUpperCase = confirm("Please press OK if you would like your password to include upper case letters.");
    var choiceLowerCase = confirm("Please press OK if you would like your password to include lower case letters?");
    var choiceNumbers = confirm("Please press OK if you would like your password to include numbers?");
    var choiceSpecial = confirm("Please press OK if you would like your password to include special characters?");
  }  

  if (!choiceUpperCase && !choiceLowerCase && !choiceNumbers && !choiceSpecial) {
    alert("Please choose at least one password criteria.");
  }
 

  // Key value pairs
  var pwOptions = {
    choiceUpperCase: choiceUpperCase,
    choiceLowerCase: choiceLowerCase,
    choiceNumbers: choiceNumbers,
    choiceSpecial: choiceSpecial,
    pwLength: pwLength,
  }
  return pwOptions
}

// Randomizing integers

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var result = arr[randIndex];
  return result;
}

// Function to generate random pw

function generatePassword() {
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var options = criteriaNeeded();

  console.log(options)

  if (options.choiceUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase)
    guaranteedCharacters.push(getRandom(upperCase))
  }

  if (options.choiceLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase)
    guaranteedCharacters.push(getRandom(lowerCase))
  }

  if (options.pwLength) {
    possibleCharacters = possibleCharacters.concat(numbers)
    guaranteedCharacters.push(getRandom(numbers))
  }

  if (options.choiceSpecial) {
    possibleCharacters = possibleCharacters.concat(special)
    guaranteedCharacters.push(getRandom(special))
  }

  for (var i = 0; i < options.pwLength; i++) {    
    result.push(getRandom(possibleCharacters));
    //return arr[randIndex];
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i]
  }
  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

//  Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);