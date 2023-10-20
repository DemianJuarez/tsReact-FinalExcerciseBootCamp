import "./Card.css";
import { Button } from "./Button";
import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";
import { ProductContext } from "../context/ProductContext";
import { useLocation } from "react-router-dom";

export type CardProps = {
  rating: number;
  productImages: string[];
  name: string;
  price: number;
  discountPercentage: number;
  stock: number;
};

function Card(props: CardProps) {
  const { products } = useContext(ProductContext);
  const { rating, productImages, name, price, stock } = props;
  const { wishListArray, cartArray, setWishListArray, setCartArray } =
    useContext(CartWishContext);

  const location = useLocation();
  const { pathname } = location;

  const addToWishlist = () => {
    const updatedWishArray = [...wishListArray];
    const foundProduct = products.find((product) => product.title === name);

    if (foundProduct) {
      updatedWishArray.push(foundProduct);
      setWishListArray(updatedWishArray);
    }
  };

  const addToCart = () => {
    const updatedCartArray = [...cartArray];
    const foundProduct = products.find((product) => product.title === name);

    if (foundProduct) {
      updatedCartArray.push(foundProduct);
      setCartArray(updatedCartArray);
    }
  };

  return (
    <div className="card">
      <div className="product-image-div">
        <p className="product-rating">{rating}/5</p>
        <div className="product-image">
          <img src={productImages[0]} alt="" className="image" />
        </div>
      </div>
      <div className="product-description">
        <p className="product-name">Name: {name}</p>
        <p className="product-price">Price: {price}</p>
        <p className="product-stock">Stock: {stock}</p>
      </div>
      <div className="buttons-div">
        {pathname === "/shop" && (
          <>
            <Button text="Whishlist" onClick={addToWishlist} />
            <Button text="Cart" onClick={addToCart} />
          </>
        )}
      </div>
    </div>
  );
}

export { Card };
