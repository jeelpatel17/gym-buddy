import { fetchData } from "./modules/fetch.js";
import startWorkout from "./modules/startWorkout.js";

window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js");
  }
};

doneBtn.addEventListener("click", startWorkout);
fetchData();
