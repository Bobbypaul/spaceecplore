const menuIcon = document.querySelector(".menu");
const cancelIcon = document.querySelector(".cancel");
const menuBox = document.querySelector(".menu-box");

const planetListCon = document.querySelector(".planet-selection");
const theNameOfPlanet = planetListCon.querySelectorAll("span");
const planetImgCon = document.querySelector(".big-circle");
const theplanetImg = planetImgCon.querySelectorAll("img");
const whiteblock = planetListCon.querySelectorAll(".whiteblock");

const head = document.querySelector(".space");
const long = document.querySelector(".long-text");
const bil = document.querySelector(".bil");
const years = document.querySelector(".years");

menuIcon.addEventListener("click", function () {
  menuBox.style.display = "flex";

  menuBox.style.top = "0%";
});
cancelIcon.addEventListener("click", function () {
  menuBox.style.top = "-100%";
  setTimeout(function () {
    menuBox.style.display = "none";
  }, 1000);
});

theNameOfPlanet[0].addEventListener("click", function () {
  head.innerText = "MOON";
  long.innerText =
    " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  bil.innerText = "384,400 KM";
  years.innerText = "3 DAYS";

  whiteblock[0].classList.remove("hid");
  whiteblock[1].classList.add("hid");
  whiteblock[2].classList.add("hid");
  whiteblock[3].classList.add("hid");

  theplanetImg[3].style.zIndex = "5";
  theplanetImg[1].style.zIndex = "3";
  theplanetImg[2].style.zIndex = "3";
  theplanetImg[0].style.zIndex = "3";
});
theNameOfPlanet[1].addEventListener("click", function () {
  head.innerText = "MARS";
  long.innerText =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  bil.innerText = "225 mil. km";
  years.innerText = "9 MONTHS";

  whiteblock[0].classList.add("hid");
  whiteblock[1].classList.remove("hid");
  whiteblock[2].classList.add("hid");
  whiteblock[3].classList.add("hid");

  theplanetImg[2].style.zIndex = "5";
  theplanetImg[1].style.zIndex = "3";
  theplanetImg[3].style.zIndex = "3";
  theplanetImg[0].style.zIndex = "3";
});
theNameOfPlanet[2].addEventListener("click", function () {
  head.innerText = "EUROPA";
  long.innerText =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  bil.innerText = "628 MIL. KM";
  years.innerText = "3 YEARS";

  whiteblock[0].classList.add("hid");
  whiteblock[1].classList.add("hid");
  whiteblock[2].classList.remove("hid");
  whiteblock[3].classList.add("hid");

  theplanetImg[1].style.zIndex = "5";
  theplanetImg[2].style.zIndex = "3";
  theplanetImg[3].style.zIndex = "3";
  theplanetImg[0].style.zIndex = "3";
});
theNameOfPlanet[3].addEventListener("click", function () {
  head.innerText = "TITAN";
  long.innerText =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  bil.innerText = "1.6 bil. km";
  years.innerText = "7 YEARS";
  whiteblock[0].classList.add("hid");
  whiteblock[1].classList.add("hid");
  whiteblock[2].classList.add("hid");
  whiteblock[3].classList.remove("hid");

  theplanetImg[0].style.zIndex = "5";
  theplanetImg[2].style.zIndex = "3";
  theplanetImg[3].style.zIndex = "3";
  theplanetImg[1].style.zIndex = "3";
});
