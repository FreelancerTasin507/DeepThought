// hambargur
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLink = document.getElementById("navLink");

  hamburger.addEventListener("click", function () {
    navLink.classList.toggle("show");
  });
});
// hambargur

// drawer
document.addEventListener("DOMContentLoaded", function () {
  const leftDrawer = document.getElementById("leftDrawer");
  const rightDrawer = document.getElementById("rightDrawer");
  const leftDrawerDiv = document.querySelector(".left_drawer_div");
  const rightDrawerDiv = document.querySelector(".right_drawer_div");

  leftDrawerDiv.addEventListener("click", function () {
    leftDrawer.classList.toggle("expanded");
  });

  rightDrawerDiv.addEventListener("click", function () {
    rightDrawer.classList.toggle("expanded");
  });
});
// drawer
