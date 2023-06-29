//hit button prompt how many charachters

//if less 8 or more 128 alert

//if between 8 and 128 confirm lowercase
//confirm uppercase
//confirm numeric
//confirm special charchter
//if yess add to array

//const special =

//prompts for password length, cap,lower,special,numbers

//if yes add to array

// Assignment Code
//if ((passobj.count, 8 || passobj.count > 128)) {
//alert("That number is not betweeen 8 and 128. Please enter a correct number.");
//Given Code
var generateBtn = document.querySelector("#generate");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const uppercaseArr = [
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
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseArr = [
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
const specCharArr = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ",",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "_",
  "`",
  "~",
  ";",
];

let passobj = [""];
let password = [];

function questions() {
  var allChars = lowercaseArr + uppercaseArr + specCharArr;

  let options = [];

  let charCount = prompt(
    "How many characters would you like your password to be?"
  );
  if (charCount < 8 || charCount > 128) {
    alert(
      "That number is not betweeen 8 and 128. Please enter a correct number."
    );
    questions();
  }
  console.log(charCount);
  //Confirm is true false
  let uppercase = confirm("Do you want uppercase characters?");
  console.log(uppercase);
  if (uppercase == true) {
    options = options.concat(uppercaseArr);
  }
  console.log(options);

  let lowercase = confirm("Do you want lowercase characters?");
  console.log(lowercase);
  if (lowercase == true) {
    options = options.concat(lowercaseArr);
  }
  console.log(options);

  let specChar = confirm(
    "Would you like to use special characters in your password?"
  );
  console.log(specChar);
  if (specChar == true) {
    options = options.concat(specCharArr);
  }
  console.log(options);
}

function generateRandomPassword() {
  if (questions.uppercase == true) password.push(uppercaseArr);

  console.log(password);

  if (questions.lowercase == true) password.push(lowercaseArr);

  console.log(password);

  if (questions.specChar == true) password.push(specCharArr);

  console.log(password);

  return "";
}
var selections = generateRandomPassword(10, true, true, true);

// password = "";
function random() {
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    selections += allChars[randomIndex];
  }

  return selections;
}
//  taking lengh of user inputs and looping over the password array while grabbing a character from each option and put into selected length
function loopOver() {}
// Usage example

console.log(password);

//math.random w3

//Creating charachters for password to use
function passBuild() {}

//Adding the event listener to button on html
generateBtn.addEventListener("click", questions);
