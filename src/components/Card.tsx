import "./Card.css";
import { Button } from "./Button";

export type CardProps = {
  rating: number;
  productImages: string[];
  name: string;
  price: number;
  discountPercentage: number;
  stock: number;
};

function Card(props: CardProps) {
  const { rating, productImages, name, price, stock } = props;

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
        <Button text="Whishlist" />
        <Button text="Cart" />
      </div>
    </div>
  );
}

export { Card };
