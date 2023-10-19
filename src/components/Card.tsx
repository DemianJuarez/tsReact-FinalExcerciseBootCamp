import "./Card.css";
import { Button } from "./Button";
import { useContext } from "react";
import { CartWishContext } from "../context/CartWishContext";

export type CardProps = {
  rating: number;
  productImages: string[];
  name: string;
  price: number;
  discountPercentage: number;
  stock: number;
};

function Card(props: CardProps) {
  const [products] = useContext(ProductContext);
  const { rating, productImages, name, price, stock } = props;
  const { setToWishList, cartArray, setToCartList } =
    useContext(CartWishContext);

  const addToWishlist = () => {
    // Agrega el producto a wishListArray
    const updatedCartArray = [...cartArray];
    const foundProduct = products.find(
      (product) => product.title === productToAdd.name
    );

    if (foundProduct) {
      updatedCartArray.push(foundProduct);
      setCartArray(updatedCartArray);
    }
  };
  //usar products find desde aca

  const addToCart = () => {
    // Agrega el producto a cartArray
    setToCartList((prevToCartList) => [...prevToCartList, props]);
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
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <p className="product-stock">{stock}</p>
      </div>
      <div className="buttons-div">
        <Button text="Whishlist" onClick={addToWishlist} />
        <Button text="Cart" onClick={addToCart} />
      </div>
    </div>
  );
}

export { Card };
