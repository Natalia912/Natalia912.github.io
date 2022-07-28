function generatePasswords() {
  const characters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

  
  let numLength = numbers.length;
  let symLength = symbols.length;
  
  let passwordOne = "";
  let passwordTwo = "";
  let passwordElOne = document.getElementById("password-el-one");
  let passwordElTwo = document.getElementById("password-el-two");
  let pswLeng = document.querySelector("#psw-leng").value;
  let symbolsCheck = document.querySelector("#symbols").checked;
  let numbersCheck = document.querySelector("#numbers").checked;

  if (symbolsCheck === true && numbersCheck === true) {
    for (let i = 0; i < numLength; i++) {
      characters.push(numbers[i]);
    }
    for (let i = 0; i < symLength; i++) {
      characters.push(symbols[i]);
    }
  } else if (symbolsCheck === true && numbersCheck === false) {
    for (let i = 0; i < symLength; i++) {
      characters.push(symbols[i]);
    }
  } else if (symbolsCheck === false && numbersCheck === true) {
    for (let i = 0; i < numLength; i++) {
      characters.push(numbers[i]);
    } 
  }
  let charLength = characters.length - 1;
  for (let i = 0; i < pswLeng; i++) {
    let randomIndex = Math.floor(Math.random() * charLength);
    passwordOne += characters[randomIndex];
  }
  for (let i = 0; i < pswLeng; i++) {
    let randomIndex = Math.floor(Math.random() * charLength);
    passwordTwo += characters[randomIndex];
  }
  passwordElOne.textContent = passwordOne;
  passwordElTwo.textContent = passwordTwo;
}

