// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add number and symbol arrays
generateBtn.addEventListener("click", writePassword);
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "R",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var characterPool = []
var finalPassword = []


function generatePassword(){
  // when generate password is run, prompt user for password length and character types
  var passwordLength = window.prompt("How long would you like your password?")
  var confirmLowercase = window.confirm("Would you like lowercase letters?")
  var confirmUppercase = window.confirm("Would you like uppercase letters?")
  var confirmNumbers = window.confirm("Would you like numbers in your password?")
  var confirmSymbols = window.confirm("Would you like special characters in your password?")

if (confirmLowercase === true) {
  characterPool = characterPool.concat(lowerCase)
}

if (confirmUppercase === true){
  characterPool = characterPool.concat(upperCase)
}

if (confirmNumbers === true){
  characterPool = characterPool.concat(numericCharacters)
}

if (confirmSymbols === true){
  characterPool = characterPool.concat(specialCharacters)
}

// Randomize index and push final password
console.log (characterPool)
for (var i = 0; i < passwordLength; i++){
  var randomIndex = Math.floor(Math.random()*characterPool.length)
  var realValue = characterPool[randomIndex]
  finalPassword.push(realValue)
  console.log (finalPassword)
}

  return finalPassword.join("")
}