const menuIcon = document.querySelector(".menu");
const cancelIcon = document.querySelector(".cancel");
const menuBox = document.querySelector(".menu-box");

const theCircleCon = document.querySelector(".small-circle-con");
const theSmallCircles = theCircleCon.querySelectorAll(".small");

const tech = document.querySelectorAll(".tech");

const head = document.querySelector(".space");
const long = document.querySelector(".long-text");

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
theSmallCircles[0].addEventListener("click", function () {
  head.innerText = "LAUCH VEHICLE";
  long.innerText =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

  theSmallCircles[0].classList.remove("borderandcolor");
  theSmallCircles[1].classList.add("borderandcolor");
  theSmallCircles[2].classList.add("borderandcolor");

  tech[2].style.zIndex = "5";
  tech[1].style.zIndex = "2";
  tech[0].style.zIndex = "2";
});
theSmallCircles[1].addEventListener("click", function () {
  head.innerText = "SPACE CAPSULE";
  long.innerText =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  theSmallCircles[0].classList.add("borderandcolor");
  theSmallCircles[1].classList.remove("borderandcolor");
  theSmallCircles[2].classList.add("borderandcolor");

  tech[0].style.zIndex = "5";
  tech[1].style.zIndex = "2";
  tech[2].style.zIndex = "2";
});
theSmallCircles[2].addEventListener("click", function () {
  head.innerText = "SPACEPORT";
  long.innerText =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  theSmallCircles[0].classList.add("borderandcolor");
  theSmallCircles[1].classList.add("borderandcolor");
  theSmallCircles[2].classList.remove("borderandcolor");

  tech[1].style.zIndex = "5";
  tech[2].style.zIndex = "2";
  tech[0].style.zIndex = "2";
});
