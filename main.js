"use strict";
console.log("works");

window.addEventListener("load", init);

function init() {
  const arr = [];
  let counter = 0;
  while (counter < 10) {
    countDelay(counter, arr);
    counter++;
  }
}

function countDelay(counter, arr) {
  setTimeout(() => {
    arr.push(counter);
    console.log(counter, arr);
  }, counter * 1000);
}
