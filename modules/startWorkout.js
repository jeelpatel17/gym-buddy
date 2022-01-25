import { gymDays, dayName } from "./fetch.js";
import success from "./workoutComplete.js";
const doneBtn = document.getElementById("doneBtn");
const mainTitle = document.getElementById("mainTitle");
const secTitle1 = document.getElementById("p1");
const secTitle2 = document.getElementById("p2");

let exerciseNo = 0;
function startWorkout() {
  for (let day of gymDays) {
    if (day.weekDay == dayName && exerciseNo < day.exercises.length + 1) {
      if (exerciseNo == day.exercises.length) {
        success();
      }
      let exercise = day.exercises[exerciseNo];
      mainTitle.innerHTML = `${exerciseNo + 1}. <b>${exercise.exName}</b>`;
      secTitle1.innerHTML = `Superset? : ${
        exercise.superSet == true ? "<b>Yes</b>" : "<b>No</b>"
      }`;
      secTitle2.innerHTML = `Sets : <b>${exercise.sets}</b>, Reps: <b>${exercise.reps}</b>`;
      doneBtn.textContent = "Done";
      exerciseNo++;
    }
  }
}

export default startWorkout;
