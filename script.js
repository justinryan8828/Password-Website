var generateBtn = document.querySelector("#generate");

// Creating my global arrays

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
let password = "";

// Generate function for prompt on character

function questions() {
  var lowercase, uppercase, numbers, specChar;
  let options = [];

  let charCount = prompt(
    "How many characters would you like your password to be?"
  );
  while (charCount < 8 || charCount > 128) {
    alert(
      "That number is not betweeen 8 and 128. Please enter a correct number."
    );
    charCount = prompt(
      "How many characters would you like your password to be?"
    );
  }

  //Generate function to ask questions about figures

  function getOptions() {
    uppercase = confirm("Do you want uppercase characters?");

    if (uppercase == true) {
      options = options.concat(uppercaseArr);
    }

    lowercase = confirm("Do you want lowercase characters?");

    if (lowercase == true) {
      options = options.concat(lowercaseArr);
    }

    numbers = confirm(
      "Would you like to use some funky numbers in your password?"
    );

    if (numbers == true) {
      options = options.concat(numbersArr);
    }

    specChar = confirm(
      "Would you like to use special characters in your password?"
    );

    if (specChar == true) {
      options = options.concat(specCharArr);
    }
  }

  // Create alert for if someone doesnt select any figures

  getOptions();
  while (!lowercase && !uppercase && !specChar && !numbers) {
    alert("Boy, quit playing and pick one!");
    getOptions();
  }
  for (var i = 0; i < charCount; i++) {
    var randomIndex = Math.floor(Math.random() * options.length);
    password = password.concat(options[randomIndex]);
  }
}

// Generate function to write password

function writePassword() {
  questions();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
