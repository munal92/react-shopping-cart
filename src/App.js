import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
//Product Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    console.log("add Item", item);
    setCart([...cart, item]);
  };

  const removeItem = (item) => {
    // add the given item to the cart
    console.log("removed Item", item);
	 setCart(cart.filter( dt => dt.id !== item.id).map(filteredArr => filteredArr))
	
  };
  console.log("cart ", cart);
  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation cart={cart} />
      </CartContext.Provider>

      <ProductContext.Provider value={{ products, addItem }}>
        <Route exact path="/">
          <Products />
        </Route>
      </ProductContext.Provider>

      <CartContext.Provider value={{cart,removeItem}}>
        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </CartContext.Provider>
    </div>
  );
}

export default App;
