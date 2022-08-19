"use strict";

document.querySelector(".play").addEventListener("click", function () {
  console.log(".Button Clicked");
  document.querySelector(".mainScreen").classList.add("hidden");
  document.querySelector(".gameScreen").classList.remove("hidden");
});
