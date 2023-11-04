const toggle = document.querySelector("html");
const image = document.querySelector("img");
// console.log(image.getAttribute("src"));

function toggleMode() {
  if (toggle.getAttribute("class") == "light") {
    toggle.setAttribute("class", "");
    console.log("Dark?");
    return imageToggle(true);
  } else {
    toggle.setAttribute("class", "light");
    console.log("light");
    return imageToggle(false);
  }
}

function imageToggle(mode) {
  if (mode) {
    image.setAttribute("src", "assets/avatar.png");
  } else {
    image.setAttribute("src", "assets/avatar-light.png");
  }
}
