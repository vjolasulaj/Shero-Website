function togglevisibility(id) {
  const el = document.getElementById(id);
  el.classList.toggle("display-block");
}

function toggleSvgDirection(selector) {
  const el = document.querySelector(selector);
  const elscale = el.style.transform;
  if (elscale === "rotate(-180deg)") {
    el.style.transform = "rotate(0)";
  } else {
    el.style.transform = "rotate(-180deg)";
  }
}

const customerServiceTitle = document.getElementById("customer-service");
const infoLinksTitle = document.getElementById("info-links-title");
const moreLinksTitle = document.getElementById("more-links-title");

customerServiceTitle.addEventListener("click", () => {
  togglevisibility("customer-links");
  toggleSvgDirection("#customer-service > svg");
});

infoLinksTitle.addEventListener("click", () => {
  togglevisibility("info-links");
  toggleSvgDirection("#info-links-title > svg");
});

moreLinksTitle.addEventListener("click", () => {
  togglevisibility("more-links");
  toggleSvgDirection("#more-links-title > svg");
});

function toggleMobileNav() {
  const backdrop = document.getElementById("backdrop");
  const sidenav = document.getElementById("sidenav");
  const body = document.getElementsByTagName("body")[0];
  body.classList.toggle("overflow-hidden");
  backdrop.classList.toggle("display-block");
  sidenav.classList.toggle("display-flex");
}

const closeButton = document.getElementById("sidenav-close");
closeButton.addEventListener("click", () => {
  toggleMobileNav();
});

const openButton = document.getElementById("menu-svg");
openButton.addEventListener("click", () => {
  toggleMobileNav();
});

function toggleSearchBar() {
  const navCenter = document.getElementById("nav-center");
  const navRight = document.getElementById("nav-right");
  const searchInputMobile = document.getElementById("search-input-mobile");
  navCenter.classList.toggle("display-none");
  navRight.classList.toggle("display-none");
  searchInputMobile.classList.toggle("display-none");
}

const searchButton = document.getElementById("search-svg");
searchButton.addEventListener("click", () => {
  toggleSearchBar();
});

