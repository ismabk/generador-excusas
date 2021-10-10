/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var excusa = "";
  excusa += who[Math.floor(Math.random() * (who.length - 1) + 1)] + " ";
  excusa += what[Math.floor(Math.random() * (what.length - 1) + 1)] + " ";
  excusa += when[Math.floor(Math.random() * (when.length - 1) + 1)] + " ";
  console.log(excusa);
  return excusa;
};
