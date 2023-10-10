import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

export const ShopPage = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
      <div>
        <p>
          {products &&
            products.map((e) => (
              <div className="product" key={e.title}>
                <p>{e.title}</p>
                <p>precio q tiene q ir con descuento{e.discountPercentage}</p>
                <p>{e.stock}</p>
              </div>
            ))}
        </p>
      </div>
    </div>
  );
};
