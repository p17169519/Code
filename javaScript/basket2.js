let baskets = document.querySelectorAll('.addBtn');
let products = [
  {
    catogry: 'Pizza',
    title: 'Margherita',
    size: 8,
    price: 8.00,
    basketNo: 0
  },
  {
    catogry: 'Pizza',
    title: 'Pepperoni',
    size: 8,
    price: 8.50,
    basketNo: 0
  },
  {
    catogry: 'Pizza',
    title: 'Ham & Mushroom',
    size: 8,
    price: 8.50,
    basketNo: 0
  },
  {
    catogry: 'Pizza',
    title: 'Meat Feast',
    size: 8,
    price: 8.50,
    basketNo: 0
  },
  // kebab**************************************
  {
    catogry: 'Kebab',
    title: 'Doner',
    price: 5.00,
    basketNo: 0
  },
  {
    catogry: 'Kebab',
    title: 'Lamb Shish',
    price: 6.00,
    basketNo: 0
  },
  {
    catogry: 'Kebab',
    title: 'Kofte',
    price: 6.00,
    basketNo: 0
  },
  {
    catogry: 'Kebab',
    title: 'Chicken',
    price: 5.50,
    basketNo: 0
  },
  // Burgers***************************************************
  {
    catogry: 'Burger',
    title: 'Beef Burger',
    price: 5.00,
    basketNo: 0
  },
  {
    catogry: 'Burger',
    title: 'Doner Burger',
    price: 7.00,
    basketNo: 0
  },
  {
    catogry: 'Burger',
    title: 'Cheese Burger',
    price: 6.00,
    basketNo: 0
  },
  {
    catogry: 'Burger',
    title: 'Chicken Burger',
    price: 5.50,
    basketNo: 0
  },
// Sides ***********************************************************
  {
    catogry: 'Sides',
    title: 'Fries',
    price: 2.00,
    basketNo: 0
  },
  {
    catogry: 'Sides',
    title: 'Garlic Bread',
    price: 4.00,
    basketNo: 0
  },
  {
    catogry: 'Sides',
    title: 'Garlic Mushrooms',
    price: 2.00,
    basketNo: 0
  },
  {
    catogry: 'Sides',
    title: 'Chicken Nuggets',
    price: 2.00,
    basketNo: 0
  },
// Drinks*******************************************************
{
  catogry: 'Drinks',
  title: 'Pepsi',
  price: 1.00,
  basketNo: 0
},
{
catogry: 'Drinks',
title: 'Pepsi Max',
price: 1.00,
basketNo: 0
},
{
catogry: 'Drinks',
title: 'Fanta',
price: 1.00,
basketNo: 0
},
{
catogry: 'Drinks',
title: 'Sprite',
price: 1.00,
basketNo: 0
},
// Desserts************************************************
{
catogry: 'Desserts',
title: 'Chocolate Fudge Cake',
price: 3.50,
basketNo: 0
},
{
catogry: 'Desserts',
title: 'New York Cheesecake',
price: 3.50,
basketNo: 0
},
{
catogry: 'Desserts',
title: 'Cornflake Tart',
price: 2.00,
basketNo: 0
},
{
catogry: 'Desserts',
title: 'Vanilla Ice Cream',
price: 1.50,
basketNo: 0
},
]

for (let i=0; i< baskets.length; i++) {
  baskets[i].addEventListener('click', () => {
    basketNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadBasketNumbers() {
  let productNumbers = localStorage.getItem('basketNumbers');

  if(productNumbers) {
    document.querySelector('.inBasket').textContent = productNumbers;
  }

}

function basketNumbers(product) {
  let productNumbers = localStorage.getItem('basketNumbers');

  productNumbers = parseInt(productNumbers);

  if(productNumbers) {
    localStorage.setItem('basketNumbers', productNumbers + 1);
    document.querySelector('.inBasket').textContent = productNumbers + 1;

  } else {
    localStorage.setItem('basketNumbers', 1);
    document.querySelector('.inBasket').textContent = 1;
  }

  setItems(product);

}

function setItems(product) {
  let basketItems = localStorage.getItem('productsInBasket');
  basketItems = JSON.parse(basketItems);

  if (basketItems != null) {

    if (basketItems[product.title] == undefined) {
      basketItems = {
        ...basketItems,
        [product.title]: product
      }
    }
    basketItems[product.title].basketNo += 1;
  } else {
    product.basketNo = 1;
    basketItems = {
      [product.title]: product
    }
  }

  localStorage.setItem("productsInBasket", JSON.stringify(basketItems));
  location.reload();
}

function totalCost(product) {
  // console.log("The product price is", product.price);
  let basketCost = localStorage.getItem('totalCost');

  console.log("my basket cost is", basketCost);
  console.log(typeof basketCost);

  if (basketCost != null) {
    basketCost = parseFloat(basketCost);
    localStorage.setItem("totalCost", basketCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }

}

function displayBasket() {
  let basketItems = localStorage.getItem("productsInBasket");
  basketItems = JSON.parse(basketItems)

  let basketContainer = document.querySelector(".basketContent");
  let basketCost = localStorage.getItem('totalCost');
  // let basketCostFixed = (basketCost.toFixed(2));

  if(basketItems && basketContainer) {
    basketContainer.innerHTML = '';
    Object.values(basketItems).map(item => {
      basketContainer.innerHTML += `
      <div class="insideBasket">
        <div class="product">
          <ion-icon name="close-circle-outline"></ion-icon>
          <span>${item.title}</span>
        </div>
        <div class="quantity">
          <span>${item.basketNo}</span>
        </div>
        <div class="total">
          £${item.basketNo * item.price}
        </div>
      </div>
      `
    });

    basketContainer.innerHTML += `

      <div class="finalTotal">
      £${basketCost}
      </div>
    `


  }
}

onLoadBasketNumbers();
displayBasket();
