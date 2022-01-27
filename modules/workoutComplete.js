function success() {
  let successPage = `<div
    class="h-100 w-100 d-flex justify-content-center align-items-center flex-column text-center overflow-hidden"
    id="dialog"
  >
    <img src="../assets/successTick2.gif" alt="workout-completed" />
    <b>Workout Completed, <span id="champTxt">Champion</span>!&#128170</b>
    <button class="btn mt-4" onclick="location.reload();">Great!</button>
  </div>`;
  document.getElementById("body").innerHTML += successPage;
}

export default success;
