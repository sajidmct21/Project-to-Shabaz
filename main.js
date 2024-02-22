const images = ["assets/menu-icon.svg", "assets/cross.svg"];
let icon = document.querySelector("#bars");
let nav = document.querySelector("nav");

icon.addEventListener("click", () => {
  nav.classList.toggle("showData");
  console.log(nav);
  console.log(icon);
  if (nav.className == "showData") {
    document.getElementById("bars").src = images[1];
  } else {
    document.getElementById("bars").src = images[0];
  }
});
