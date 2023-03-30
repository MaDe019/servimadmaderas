let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.display = "block";
  } else {
    document.getElementById("header").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
};
