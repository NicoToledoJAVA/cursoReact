// Cart.jsx
import React from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../context/CarContext';

const Cart = ({ showCart, toggleCart, handleBuy, handleClearCart }) => { // Recibe handleBuy y handleClearCart
  const { cartItems, removeItem } = useCart();

  const removeFromCart = (wineId) => {
    removeItem(wineId);
  };

  if (!showCart) return null;

  let precioTotal = cartItems
    .reduce((total, wine) => total + (wine.price * wine.quantity), 0)
    .toLocaleString('es-AR');

  return (
    <div id="carrito" className="carrito-visible black-and-white">
      <div className="carrito-body">
        <h4 className="cart-head">Esta Venta:</h4>
        <ul className="list-cart list-cart-flush cart-middle">
          {cartItems.length === 0 ? (
            <li className="list-cart-item">La venta está vacía...</li>
          ) : (
            cartItems.map((wine) => (
              <li key={wine.id} className="list-cart-item">
                {wine.name} (x{wine.quantity}):
                <span className="cart-item-precio bolder">
                  ${(wine.price * wine.quantity).toLocaleString('es-AR')}
                </span>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => removeFromCart(wine.id)}
                >X</button>
              </li>
            ))
          )}
        </ul>
        <div className="list-cart-item black-and-white bolder">
          Total:
          <span className="cart-total bolder cart-item-precio">
            ${precioTotal}
          </span>
        </div>
        <div className="list-cart-item cart-bot">
          <button type="button" className="button button-green" onClick={handleBuy}>Vender</button>
          <button type="button" className="button button-red" onClick={handleClearCart}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;