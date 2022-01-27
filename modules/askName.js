let name = localStorage.getItem("name");
let greet = document.getElementById("greet");

function askName() {
  if (name == undefined || name == null) {
    name = prompt("Enter your name!");
    localStorage.setItem("name", name);
    greet.innerHTML = `<b>Hey, ${name}!</b>`;
  } else {
    greet.innerHTML = `<b>Hey, ${name}!</b>`;
  }
}

export { askName };
