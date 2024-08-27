//------------------------------------------------------
// Toggle Class Active untuk Hamburger Menu (YANG AKAN MUNCUL ADALAH NAVBARNAV)
const NavbarNav = document.querySelector(".navbar-nav");

//Ketika Hamburger-Menu di Klik
document.querySelector("#hamburger-menu").onclick = (event) => {
  NavbarNav.classList.toggle("active");
  event.preventDefault();
};
//------------------------------------------------------
// Toggle Class Active untuk Search Form (YANG AKAN MUNCUL ADALAH SEARCH FORM)
const SearchForm = document.querySelector(".search-form");
const SearchBox = document.querySelector("#search-box");
const SearchBtn = document.querySelector("#search-button");

//Ketika SearchForm di Klik
document.querySelector("#search-button").onclick = (event) => {
  SearchForm.classList.toggle("active");
  SearchBox.focus();
  event.preventDefault();
};
//------------------------------------------------------
// Toggle Class Active untuk Detail Item (YANG AKAN MUNCUL ADALAH DETAIL MODEL)
const DetailModal = document.querySelector("#item-detail-modal");
const DetailButtons = document.querySelectorAll(".item-detail-button");

//Ketika Detail Button di Klik
DetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    DetailModal.style.display = "flex";
    e.preventDefault();
  };
});
//Ketika tombol close di Modal diKlik
document.querySelector(".modal .close-icon").onclick = (e) => {
  DetailModal.style.display = "none";
  e.preventDefault();
};
//Ketika klik di luar
window.onclick = (e) => {
  if (e.target === DetailModal) {
    DetailModal.style.display = "none";
  }
};

//------------------------------------------------------
// Toggle Class Active untuk Shopping Cart (YANG AKAN MUNCUL ADALAH SHOPPING CART)
const ShoppingCart = document.querySelector(".shopping-cart");

//Ketika Shopping Cart di klik
document.querySelector("#shopping-cart").onclick = (e) => {
  ShoppingCart.classList.toggle("active");
  e.preventDefault();
};

//#########################################################
// Klik di luar elemen untuk menghilangkan sesuatu
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart");

document.addEventListener("click", function (event) {
  //   kalau yang di klik selain tombol hamburger-menu dan navbar menu maka hilangkan active
  if (!hm.contains(event.target) && !NavbarNav.contains(event.target)) {
    NavbarNav.classList.remove("active");
  }

  //   kalau yang di klik selain tombol search button dan search form maka hilangkan active
  if (!sb.contains(event.target) && !SearchForm.contains(event.target)) {
    SearchForm.classList.remove("active");
  }

  //   kalau yang di klik selain tombol cart maka hilangkan active
  if (!sc.contains(event.target) && !ShoppingCart.contains(event.target)) {
    ShoppingCart.classList.remove("active");
  }
});
