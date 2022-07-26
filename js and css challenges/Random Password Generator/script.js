const characters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/",];

function generatePasswords() {
  let charLength = characters.length - 1;
  let passwordOne = "";
  let passwordTwo = "";
  let passwordElOne = document.getElementById("password-el-one");
  let passwordElTwo = document.getElementById("password-el-two");
  let pswLeng = document.querySelector("#psw-leng").value;
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
