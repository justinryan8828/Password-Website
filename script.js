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
// Write password to the #password input

// Function questions is container for all question prompts or confirms
function questions() {
  let options = [];

  let charCount = prompt(
    "How many charachters would you like your password to be?"
  );
  if (charCount < 8 || charCount > 128) {
    alert(
      "That number is not betweeen 8 and 128. Please enter a correct number."
    );
    questions();
  }
  console.log(charCount);
  //Confirm is true false
  let uppercase = confirm("Do you want uppercase charachters?");
  console.log(uppercase);
  if (uppercase == true) {
    options = options.concat(uppercaseArr);
  }
  console.log(options);

  let lowercase = confirm("Do you want lowercase charachters?");
  console.log(lowercase);
  if (lowercase == true) {
    options = options.concat(lowercaseArr);
  }
  console.log(options);

  let specChar = confirm(
    "Would you like to use special charachters in your password?"
  );
  console.log(specChar);
  if (specChar == true) {
    options = options.concat(specCharArr);
  }
  console.log(options);
}

//math.random w3
//Creating charachters for password to use
function passBuild() {}

//Adding the event listener to button on html
generateBtn.addEventListener("click", questions);
