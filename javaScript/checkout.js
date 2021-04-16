let btn = document.querySelector(".button");

function tenOff() {
  let basketCost = localStorage.getItem('totalCost');
  let newCost = document.getElementById('newCost');
  let dCode = document.querySelector('#discountOff').value.toUpperCase();
  let correctDiscount = "KK10";


  if (dCode == correctDiscount) {
    let reduceBy = basketCost / 100 * 10;
    let discountedPrice = basketCost - reduceBy;
    newCost.textContent = "Reduced price: £" + `${discountedPrice}`;
  } else {
    alert("Wrong discount code");
  }
}

btn.addEventListener("click", tenOff);
