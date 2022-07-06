const menuIcon = document.querySelector(".menu");
const cancelIcon = document.querySelector(".cancel");
const menuBox = document.querySelector(".menu-box");

const theCircleCon = document.querySelector(".small-circle-con");
const theSmallCircles = theCircleCon.querySelectorAll(".small");

const crew = document.querySelectorAll(".crew");

const role = document.querySelector(".travel");
const head = document.querySelector(".space");
const long = document.querySelector(".long-text");

menuIcon.addEventListener("click", function () {
  menuBox.style.display = "flex";
  menuBox.style.transition = "top 1s ease-in-out";
  menuBox.style.top = "0%";
});
cancelIcon.addEventListener("click", function () {
  menuBox.style.top = "-100%";
  setTimeout(function () {
    menuBox.style.display = "none";
  }, 1000);
});

theSmallCircles[0].addEventListener("click", function () {
  role.innerText = "COMMANDER";
  head.innerText = "Douglas Hurley";
  long.innerText =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

  theSmallCircles[0].style.backgroundColor = "white";
  theSmallCircles[1].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[2].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[3].style.backgroundColor = "rgba(164, 164, 187, 0.61)";

  crew[1].style.display = "inline";
  crew[0].style.display = "none";
  crew[2].style.display = "none";
  crew[3].style.display = "none";
});

theSmallCircles[1].addEventListener("click", function () {
  role.innerText = "MISSION SPECIALIST";
  head.innerText = "MARK SHUTTLEWORTH";
  long.innerText =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  theSmallCircles[1].style.backgroundColor = "white";
  theSmallCircles[0].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[2].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[3].style.backgroundColor = "rgba(164, 164, 187, 0.61)";

  crew[0].style.display = "inline";
  crew[1].style.display = "none";
  crew[2].style.display = "none";
  crew[3].style.display = "none";
});

theSmallCircles[2].addEventListener("click", function () {
  role.innerText = "PILOT";
  head.innerText = "VICTOR GLOVER";
  long.innerText =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";

  theSmallCircles[2].style.backgroundColor = "white";
  theSmallCircles[1].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[0].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[3].style.backgroundColor = "rgba(164, 164, 187, 0.61)";

  crew[3].style.display = "inline";
  crew[0].style.display = "none";
  crew[2].style.display = "none";
  crew[1].style.display = "none";
});

theSmallCircles[3].addEventListener("click", function () {
  role.innerText = "FLIGHT ENGINEER";
  head.innerText = "ANOUSHEH ANSARI";
  long.innerText =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
  theSmallCircles[3].style.backgroundColor = "white";
  theSmallCircles[1].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[2].style.backgroundColor = "rgba(164, 164, 187, 0.61)";
  theSmallCircles[0].style.backgroundColor = "rgba(164, 164, 187, 0.61)";

  crew[2].style.display = "inline";
  crew[0].style.display = "none";
  crew[1].style.display = "none";
  crew[3].style.display = "none";
});
