import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import "./CartPage.css";
import { Card } from "../components/Card";
import { Producto } from "../context/ProductContext";

export const CartPage = () => {
  const numerator = (
    price: Producto["price"],
    discountPercentage: Producto["discountPercentage"]
  ) => {
    const priceWithDiscount = price * (1 - discountPercentage / 100);
    return Math.round(priceWithDiscount * 100) / 100;
  };

  const { cartArray } = useContext(CartWishContext);
  return (
    <div className="container">
      <div className="CartPageContainer">
        <h1>Cart</h1>
        <div className="cartContainer">
          {cartArray.map((product) => (
            <div className={`${product.title}`} key={product.title}>
              <Card
                rating={product.rating}
                productImages={product.images}
                name={product.title}
                price={numerator(product.price, product.discountPercentage)}
                discountPercentage={product.discountPercentage}
                stock={product.stock}
              />
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
};
