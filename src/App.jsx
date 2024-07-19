import React, { useState } from 'react';
import './App.css'; // Assuming App.css exists for styles

const products = [
  { id: 1, name: 'Product 1', price: 10, image: './assets/fries.jpg' },
  { id: 2, name: 'Product 2', price: 15, image: './assets/burger.jpg' },
  { id: 3, name: 'Product 3', price: 20, image: './assets/icecream.jpg' },
  { id: 4, name: 'Product 4', price: 25, image: './assets/pizza.jpg' },
  // Add more products with image paths here
];

const Product = ({ product, onAddToCart }) => {
  return (
    <div key={product.id} className="product-item">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <button onClick={() => onAddToCart(product.name, product.price)}>
        Add to Cart
      </button>
    </div>
  );
};

const CartItem = ({ item }) => {  
  return (
    <li>
      {item.name} - ${item.price.toFixed(2)}
    </li>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (name, price) => {
    setCart((prevCart) => [...prevCart, { name, price }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Cart is empty!');
      return;
    }

    // Simulate checkout process (replace with actual payment processing)
    alert(`Your total is: $${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}`);
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="container">
      <div className="product-list">
        <h2>Products</h2>
        <ul className="product-items">
          {products.map((product) => (
            <Product key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </ul>
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul id="cart-items">
          {cart.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}
        </ul>
        <p id="cart-total">Total: ${total}</p>
        <button id="clear-cart" onClick={clearCart}>
          Clear Cart
        </button>
        <button id="checkout" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default App;
