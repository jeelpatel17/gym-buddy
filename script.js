const doneBtn = document.getElementById("doneBtn");
const mainTitle = document.getElementById("mainTitle");
const secTitle1 = document.getElementById("p1");
const secTitle2 = document.getElementById("p2");
let gymDays = [];

// CALCULATING TODAY'S WEEKDAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[new Date().getDay() - 1];
// console.log(new Date().getDay() - 1);
let today;

doneBtn.addEventListener("click", startWorkout);

// DISPLAYING TODAY'S DATA
fetch("/db.json")
  .then((response) => response.json())
  .then((res) => {
    gymDays = res.gymDays;
    for (day of gymDays) {
      if (day.weekDay == dayName) {
        // WELCOME PAGE
        mainTitle.innerText = `It's ${day.day} Day today!`;
        today = day.weekDay;
        secTitle1.innerText = `Week Day: ${day.weekDay}`;
        let totalExercises = Object.keys(day.exercises).length;
        secTitle2.innerText = `Total Exercises for today: ${totalExercises}`;
      }
    }
  });

let exerciseNo = 0;
function startWorkout() {
  doneBtn.textContent = "Done";
  for (day of gymDays) {
    if (day.weekDay == dayName && exerciseNo < day.exercises.length + 1) {
      if (exerciseNo + 1 == day.exercises.length + 1) {
        success();
      }
      let exercise = day.exercises[exerciseNo];
      mainTitle.innerText = `${exerciseNo + 1}. ${exercise.exName}`;
      secTitle1.innerText =
        exercise.superSet == true ? "Superset? : Yes" : "Superset? : No";
      secTitle2.innerText = `Sets: ${exercise.sets}, Reps: ${exercise.reps}`;
      exerciseNo++;
    }
  }

  function success() {
    let successPage = `<div
    class="h-100 w-100 d-flex justify-content-center align-items-center flex-column text-center"
    id="dialog"
  >
    <img src="/successTick.gif" alt="" />
    <b>There you go,Champion!</b><br />Your workout for today is completed!
  </div>`;
    document.getElementById("body").innerHTML += successPage;
  }
}
