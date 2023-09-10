export { plus, minus, quantityNumber, cartQuantity };

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const quantity = document.querySelector('.quantity');
const cartQuantity = document.querySelector('.cart__quantity');

let quantityNumber = 1;

plus.addEventListener('click', () => {
  quantityNumber++;
  quantity.innerHTML = quantityNumber;
});

minus.addEventListener('click', () => {
  if (quantityNumber === 1) {
    quantity.innerHTML = 1;
  } else {
    quantityNumber--;
    quantity.innerHTML = quantityNumber;
  }
});

cartQuantity.innerHTML = quantityNumber;
