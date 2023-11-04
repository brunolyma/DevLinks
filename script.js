const toggleMode = () => {
  const html = document.documentElement;
  const image = document.querySelector("#profile img");

  html.classList.toggle("light");

  if (html.classList.contains("light")) {
    image.setAttribute("src", "assets/avatar-light.png");
  } else {
    image.setAttribute("src", "assets/avatar.png");
  }
};
