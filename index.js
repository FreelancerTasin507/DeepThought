// hambargur
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLink = document.getElementById("navLink");

  hamburger.addEventListener("click", function () {
    navLink.classList.toggle("show");
  });
});
// hambargur 