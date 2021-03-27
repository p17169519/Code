
topbutton = document.getElementById("topBtn");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

menuToggler.addEventListener('click', ev => {
  myBasket.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "x" ? "≡" : "x";
});
