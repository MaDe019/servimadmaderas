let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.add("oculto");
  } else {
    document.getElementById("header").classList.remove("oculto");
  }
  prevScrollpos = currentScrollPos;
});
