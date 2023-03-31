let prevScrollpos = window.pageYOffset;
var header = document.getElementById("header");
let showHeaderTimeout;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    header.classList.remove("oculto");
    prevScrollpos = currentScrollPos;
  } else {
    header.classList.add("oculto");
    clearTimeout(showHeaderTimeout);
    showHeaderTimeout = setTimeout(function () {
      header.classList.remove("oculto");
    }, 2000);
  }
});

// función para que cuando se haga click en el icono del menu hamburguesa se extienda por 3 segundos mas mostrar el header
var btnHeader = document.getElementById("btn-header");

btnHeader.addEventListener("click", function () {
  header.classList.add("oculto");
});

// función que se oculta header cuando haces click en uno de sus botones
let navLink = document.getElementById("nav__link");

navLink.addEventListener("click", function () {
  header.classList.remove("oculto");
});
