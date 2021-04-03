if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
  var removeBasketItemButtons = document.getElementsByClassName('btn-remove')
      for (var i = 0; i < removeBasketItemButtons.length; i++) {
          var button = removeBasketItemButtons[i]
          button.addEventListener('click', removeBasketItem)
      }

  var quantityInputs = document.getElementsByClassName('basket-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  

  var addToBasket = document.getElementsByClassName('addBtn')
  for (var i = 0; i < addToBasket.length; i++) {
    var button = addToBasket[i]
    button.addEventListener('click', addToBasketClicked)
  }

}



function addToBasketClicked(event) {
  var button = event.target
  var food = button.parentElement.parentElement
  var title = food.getElementsByClassName('foodTitle')[0].innerText
  var priceOf = food.getElementsByClassName('price')[0].innerText
  addItemToBasket(title, priceOf)
  updateBasketTotal()
}

function addItemToBasket(title, priceOf) {
  var basketRow = document.createElement('div')
  basketRow.classList.add('basket-row')
  var basketItems = document.getElementsByClassName('basket-items')[0]
  var basketItemNames = basketItems.getElementsByClassName('basket-item-title')
  for (var i = 0; i < basketItemNames.length; i++) {
    if (basketItemNames[i].innerText == title) {
      alert('Item already added, adjust quantity in basket')
      return
    }
  }
  var basketRowContents = `
        <div class="basket-item basket-column">
            <span class="basket-item-title">${title}</span>
        </div>
        <span class="basket-price basket-column">${priceOf}</span>
        <div class="basket-quantity basket-column">
            <input class="basket-quantity-input" type="number" value="1">
            <button class="btn-remove" type="button">REMOVE</button>
        </div>`
}

function updateBasketTotal() {
  var basketItemContainer = document.getElementsByClassName('basket-items')[0]
  var basketRows = basketItemContainer.getElementsByClassName('basket-row')
  var total = 0
  for (var i = 0; i < basketRows.length; i++) {
    var basketRow = basketRows[i]
    var priceElement = basketRow.getElementsByClassName('basket-price')[0]
    var quantityElement = basketRow.getElementsByClassName('basket-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('£',''))
    var quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('basket-total-price')[0].innerText = '£' + total
}
