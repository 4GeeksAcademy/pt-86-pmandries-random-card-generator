import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let playedCards = [];
  document.querySelector(".btn").addEventListener("click", deal);
};

  const deal = () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let suitIndex = Math.floor(Math.random() * suits.length);
    let rankIndex = Math.floor(Math.random() * ranks.length);

    if (suitIndex == 1 || suitIndex == 2) {
      document.getElementById("card").style.color = "red";
    } else if (suitIndex == 0 || suitIndex == 3) {
      document.getElementById("card").style.color = "black";
    }

    document.getElementById("top").innerHTML = suits[suitIndex];
    document.getElementById("rank").innerHTML = ranks[rankIndex];
    document.getElementById("bottom").innerHTML = suits[suitIndex];
  };
