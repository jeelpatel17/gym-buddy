import success from "./modules/workoutComplete.js";
import { loading, fetchData, gymDays, dayName } from "./modules/fetch.js";
import startWorkout from "./modules/startWorkout.js";
doneBtn.addEventListener("click", startWorkout);
fetchData();
