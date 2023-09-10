import { plus, minus, quantityNumber, cartQuantity } from './cart.js';
import { menu, close } from './nav.js';

const openCart = document.querySelector('.js-cart');
const cartItems = document.querySelector('.js-cart-items');
openCart.addEventListener('click', () => {
  cartItems.classList.toggle('active');
});

const addToCart = document.querySelector('.add__to__cart');
const cart = document.querySelector('.empty__cart');
const checkout = document.querySelector('.checkout__container');

addToCart.addEventListener('click', () => {
  cart.innerHTML = `

    <img
    src="/images/image-product-1-thumbnail.jpg"
    alt="Product Image" />

    <div class="cart__item__container">
      <span class="cart__item__title">
        Fall Limited Edition Sneakers <br />
      </span>
      <span class="cart__item__price"> $125.00 x ${quantityNumber} <span class="total">$${
    125.0 * quantityNumber
  }.00 </span></span>
    </div>
    
    <img
    src="/images/icon-delete.svg"
    alt="Delete Icon"
    class="delete__icon"
    id="delete_icon" />

      
      `;

  cartQuantity.classList.add('active');
  cartQuantity.innerHTML = quantityNumber;

  checkout.innerHTML = `
      <button class="checkout__button"> Checkout </button>`;

  const emptyCart = cart.querySelector('.delete__icon');

  emptyCart.addEventListener('click', () => {
    cart.innerHTML = `Your cart is empty.`;
    checkout.innerHTML = '';
    cartQuantity.classList.remove('active');
  });
});
