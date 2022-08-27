let passwordInput = document.getElementById("passwordInput");

passwordInput.addEventListener("keyup", recordingPassword);

let passwordString = "";

let bodyPsuedo = document.querySelector("body");
let styles = window.getComputedStyle(bodyPsuedo, ":before");

let length;
let startingBlur = 100;
let newBlur;

let r = document.querySelector(":root");

function recordingPassword(e) {
  length = passwordInput.value.length;

  newBlur = startingBlur - length * 10;

  if (newBlur <= 0) {
    newBlur = 0;
  }

  console.log(newBlur);

  r.style.setProperty("--filter-blue-radius", "blur(" + newBlur + "px)");
}

console.log(r);

//r.style.setProperty("--filter-blue-radius", "blur(100px)");
