import { fetchData } from "./modules/fetch.js";
import startWorkout from "./modules/startWorkout.js";
import { askName } from "./modules/askName.js";

window.onload = () => {
  "use strict";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js");
  }
};

let startWorkoutBtn = document.getElementById("startWorkoutBtn");
let myStatsBtn = document.getElementById("myStats");
let doneBtn = document.getElementById("doneBtn");

myStatsBtn.addEventListener("click", () => {
  alert("Sorry, This feature is in development phase!");
});
startWorkoutBtn.addEventListener("click", startWorkout);
doneBtn.addEventListener("click", startWorkout);
fetchData();
// Asking user their name if their is no name stored in the localStorage
askName();
