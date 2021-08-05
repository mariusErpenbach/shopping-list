import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]); // Initializing the cart state with an empty array, 
  const [totalBill, setTotalBill] = useState(0); // initializing the totalBill with with start value of 0

  const addToCart = (item) => { 
    setCart((prevStat) => [...prevStat, item]); 
    console.log(cart);
  };
  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} />
  ));

  const bill = () => // bill function will be called by clicking the button
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0)); // reducing all prices to one total bill price, and return it throuh the acc
  return (
    <React.Fragment>
      <div>
        <button onClick={bill}>Total bill</button> <h6>{totalBill}€</h6>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;
