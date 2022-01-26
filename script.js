import success from "./modules/workoutComplete.js";
import { loading, fetchData, gymDays, dayName } from "./modules/fetch.js";
import startWorkout from "./modules/startWorkout.js";

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js");
  }
};

doneBtn.addEventListener("click", startWorkout);
fetchData();
