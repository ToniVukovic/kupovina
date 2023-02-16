import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const InnerCartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    removeAll,
  } = useContext(ShopContext);

  return (
    <div className="innerCartItem">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <div className="innerCountHandler">
          <button className="minus" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="plus" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
      <button className="remove-all" onClick={() => removeAll(id)}>
        x
      </button>
    </div>
  );
};
