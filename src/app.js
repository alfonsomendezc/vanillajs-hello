/* eslint-disable */
import "bootstrap";
import "./style.css";

function generateExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "My tarantula",
    "Cristiano Ronaldo"
  ];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my phone"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was sleeping",
    "while I was in the bathroom"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
