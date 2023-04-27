//esconder nav bar cuando hacemos scroll

let prevScrollpos = window.pageYOffset;

window.onscroll = function scrolling() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

// menu cortina

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  prevScrollpos = 0;
}
