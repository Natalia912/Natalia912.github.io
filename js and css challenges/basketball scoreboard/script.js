
let homeScore = 0;
let guestScore = 0;

function addOnePointToHome() {
  homeScore += 1;
  document. getElementById("home-score").textContent = homeScore;
}

function addTwoPointsToHome() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
}

function addThreePointsToHome() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}

function addOnePointToGuest() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function addTwoPointsToGuest() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
}

function addThreePointsToGuest() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore;
}

// if (homeScore > guestScore) {
//     document.getElementById("home-score-cell").style.border = "3px solid #F94F6D";
// }
