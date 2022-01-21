const doneBtn = document.getElementById("doneBtn");
const mainTitle = document.getElementById("mainTitle");
const secTitle1 = document.getElementById("p1");
const secTitle2 = document.getElementById("p2");
let gymDays = [];

// CALCULATING TODAY'S WEEKDAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[new Date(new Date().getDay()).getDay()];
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
  for (day of gymDays) {
    if (day.weekDay == dayName && exerciseNo < day.exercises.length) {
      let exercise = day.exercises[exerciseNo];
      mainTitle.innerText = `${exerciseNo + 1}. ${exercise.exName}`;
      secTitle1.innerText =
        exercise.superSet == true ? "Superset? : Yes" : "Superset? : No";
      secTitle2.innerText = `Sets: ${exercise.sets}, Reps: ${exercise.reps}`;

      exerciseNo++;
    }
  }
}
