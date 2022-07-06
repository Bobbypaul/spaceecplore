const menuIcon = document.querySelector(".menu");
const cancelIcon = document.querySelector(".cancel");
const menuBox = document.querySelector(".menu-box");

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
