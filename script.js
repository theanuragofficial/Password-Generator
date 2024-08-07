const passwordDisplay = document.querySelector(".pass-display");
const sliderInput = document.querySelector("#slider-input");
const passwordLength = document.querySelector(".pass-length");
const generateBtn = document.querySelector(".generate-btn");
const numbersBox = document.querySelector("#numbers");
const symbolsBox = document.querySelector("#symbols");
const options = document.querySelectorAll(".option");

function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = '!@#$%^&*()_+="';
  let string = upperCase + lowerCase;
  numbersBox.checked ? (string += number) : "";
  symbolsBox.checked ? (string += symbol) : "";

  passwordLength.textContent = sliderInput.value;
  let myPassword = "";
  while (myPassword.length < sliderInput.value) {
    myPassword += string.charAt(Math.floor(Math.random() * string.length));
  }
  passwordDisplay.value = myPassword;
}

options.forEach((option) => {
  option.addEventListener("input", generatePassword);
});
generateBtn.addEventListener("click", generatePassword);
document.addEventListener("DOMContentLoaded", generatePassword);
