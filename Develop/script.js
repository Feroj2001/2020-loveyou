// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // console.log(passwordText.value)
}
// writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var storingVar = [];
var lowerCaseCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
var numberCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

function generatePassword() {

  var passwordLength = prompt("How many characters do you want the password to be? The password cannot be less than 8 or greater than 128");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("The password cannot be less than 8 or greater than 128");
    passwordLength = prompt("How many characters do you want the password to be? The password cannot be less than 8 or greater than 128");
  }

  var confirmLowerCase = confirm("Do you want to add lowercase on your password?");
  var confirmUpperCase = confirm("Do you want to add uppercase on your password?");
  var confirmNumber = confirm("Do you want to add numbers on your password?");
  var confirmSpecialCharacter = confirm("Do you want to add special character on your password?");

  if (confirmLowerCase === false && confirmLowerCase === false && confirmNumber === false && confirmSpecialCharacter === false) {
    alert("Please choose one of the criteria provided to you!")
    confirmLowerCase = confirm("Do you want to add lowercase on your password?");
    confirmUpperCase = confirm("Do you want to add uppercase on your password?");
    confirmNumber = confirm("Do you want to add numbers on your password?");
    confirmSpecialCharacter = confirm("Do you want to add special character on your password?");
  }

  if (confirmLowerCase) {
    storingVar = storingVar.concat(lowerCaseCharacter)
  }

  if (confirmUpperCase) {
    storingVar = storingVar.concat(upperCaseCharacter)
  }

  if (confirmNumber) {
    storingVar = storingVar.concat(confirmNumber)
  }

  if (confirmSpecialCharacter) {
    storingVar = storingVar.concat(specialCharacter)
  }

  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + storingVar[Math.floor(Math.random() * storingVar.length)];
  }
  return randomPassword;
}