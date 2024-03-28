const container=document.getElementById("box");

// container.classList.add("hidden");
function showPopup() {
  container.classList.add("hidden");
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  container.classList.remove("hidden");
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

let currentPlayer = 1;
let score1 = 0;
let score2 = 0;
const image = document.getElementById("rad-img");
// image.src=

function rollDice(player) {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  console.log(diceValue);
  const scoreElement = document.getElementById(`score${player}`);
  const image = document.getElementById("rad-img");
  const playerr1=document.getElementById("playertitle");
  if (player === 1) {
    playerr1.innerText="Player 1 is playing";
    score1 += diceValue;
    scoreElement.textContent = score1;
    document.getElementById("rollnow1").disabled = true;
    document.getElementById("rollnow2").disabled = false;
    image.src = `./images/${diceValue}.png`;
    image.alt =`${diceValue}`;
    checkWinner(score1, player);
  } else {
    playerr1.innerText="Player 2 is playing";
    score2 += diceValue;
    scoreElement.textContent = score2;
    document.getElementById("rollnow1").disabled = false;
    document.getElementById("rollnow2").disabled = true;
    image.src = `./images/${diceValue}.png`;
    image.alt = `${diceValue}`;
    checkWinner(score2, player);
  }
}

function checkWinner(score, player) {
  if (score >= 30) {
    
    document.querySelector(".winner").textContent=`Player ${player} win the game`;
    document.getElementById("rollnow1").disabled = true;
    document.getElementById("rollnow2").disabled = true;
  }
}

function resetGame() {
  alert("You are going to play a new game.")
  score1 = 0;
  score2 = 0;
  document.getElementById("playertitle").textContent="Who is gonna start?"
  document.getElementById("score1").textContent = "0";
  document.getElementById("score2").textContent = "0";
  document.getElementById("rollnow1").disabled = false;
  document.getElementById("rollnow2").disabled = false;
  document.getElementById("rad-img").src=`./images/images.jpeg`;
  

}