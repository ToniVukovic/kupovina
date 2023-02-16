import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { InnerCart } from "../cart/inner-cart";

import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <>
      <InnerCart />
      <div className={totalAmount > 0 && "shop"}>
        <div className="shopTitle">
          <h1>Trgovina</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>
  );
};
