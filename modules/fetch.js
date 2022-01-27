const doneBtn = document.getElementById("doneBtn");
const mainTitle = document.getElementById("today");
const secTitle1 = document.getElementById("muscleToday");
const secTitle2 = document.getElementById("totalExercises");
let gymDays = [];
// CALCULATING TODAY'S WEEKDAY
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[new Date().getDay() - 1];

function fetchData() {
  // FETCHES THE DATA
  async function fetchHandler() {
    loading();
    let content = await fetch("../assets/db.json");
    let contentRes = await content.json();
    return contentRes;
  }

  // DISPLAYS THE HOME SCREEN DATA
  fetchHandler().then((res) => {
    gymDays = res.gymDays;
    for (let day of gymDays) {
      if (day.weekDay == dayName) {
        mainTitle.innerHTML = `<b>${day.weekDay}</b> • `;
        secTitle1.innerHTML = `<b>${day.day} Day</b> • `;
        let totalExercises = Object.keys(day.exercises).length;
        secTitle2.innerHTML = `<b>${totalExercises} Exercises</b>`;
        doneBtn.innerText = "Let's workout!";
        doneBtn.style.display = "block";
      }
    }
  });
}
function loading() {
  mainTitle.innerText = "";
  secTitle1.innerHTML = `<b>Keep Calm!</b>`;
  secTitle2.innerText = `Your exercises are being loaded...`;
}

export { fetchData, loading, gymDays, dayName };
