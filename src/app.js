/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = function() {
  window.Generatecard = function() {
    var number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    var symbol = ["♠", "♣", "♥", "♦"];

    function rndmCard() {
      let randomNumber = number[Math.floor(Math.random() * number.length)];
      let randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
      document.querySelector(".top-suit").innerHTML = randomSymbol;
      document.querySelector(".number").innerHTML = randomNumber;
      document.querySelector(".bottom-suit").innerHTML = randomSymbol;
    }

    rndmCard();
  };
  window.Generatecard();
};
