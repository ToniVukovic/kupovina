import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

import "./cart.css";
import { InnerCartItem } from "./inner-cart-item";

export const InnerCart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
      {totalAmount > 0 && (
        <div className="inner-wrapper">
          <h3>Your selected items</h3>
          <div className="inner-items">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <InnerCartItem data={product} />;
              }
            })}
            <div className="inner-checkout">
              <p>Subtotal: ${totalAmount} </p>

              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
