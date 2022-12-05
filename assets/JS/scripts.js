// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here - created function to generate random chars
function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

// Created prompts for length
function generatePassword() {
  var userInput = window.prompt(
    "How many characters would you like in your password?"
  );

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("You need a length Dummy!");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be 8-128 characters!");
    return;
  }
}

// Created a true/false statement
var passwordNumbers = window.confirm("Would you like to include number?");
var passwordSymbols = window.confirm(
  "Would you like to include special characters?"
);
var passwordLowercase = window.confirm(
  "Would you like to include lowercase letters?"
);
var passwordUppercase = window.confirm(
  "Would you like to include uppercaseletters?"
);

//  Created array of chars
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolList = ["!", "@", "#", "$", "%", "&", "*"];
var lowercaseList = [
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

var uppercaseList = [];
var passOptions = [];

for (var i = 0; i < lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
