import { useContext } from "react";
import { Producto } from "../context/ProductContext";
import { Category, CategoryState } from "../pages/ShopPage";
import { Card, CardProps } from "./Card";
import { ShopContext } from "../context/ShopContext";

type CardRowProps = {
  products: Producto[];
  category: Category;
  showAllProducts: CategoryState;
  defaultProductsCount: 3;
  toggleShowAllProducts: (category: Category) => void;
};

const numerator = (
  price: CardProps["price"],
  discountPercentage: CardProps["discountPercentage"]
) => {
  const priceWithDiscount = price * (1 - discountPercentage / 100);
  return Math.round(priceWithDiscount * 100) / 100;
};

export const CardRow = (props: CardRowProps) => {
  const { filter, min, max, input } = useContext(ShopContext);
  const {
    products,
    category,
    showAllProducts,
    defaultProductsCount,
    toggleShowAllProducts,
  } = props;

  return (
    <>
      {products
        .filter((e) => e.category === category)
        .filter((e) => e.price >= min && e.price <= max)
        .filter(
          (e) =>
            e.title.toLowerCase().includes(input.toLowerCase()) ||
            e.brand.toLowerCase().includes(input.toLowerCase()) ||
            e.description.toLowerCase().includes(input.toLowerCase())
        )
        .slice(0, showAllProducts[category] ? undefined : defaultProductsCount)
        .map((e) => (
          <div className="product" key={e.title}>
            <Card
              rating={e.rating}
              productImages={e.images}
              name={e.title}
              price={numerator(e.price, e.discountPercentage)}
              discountPercentage={e.discountPercentage}
              stock={e.stock}
            />
          </div>
        ))}
      {products.filter((e) =>
        filter === "all"
          ? e.category === category
          : e.category === (filter as Category)
      ).length > defaultProductsCount && (
        <div className="div-button">
          <button
            className="button-load"
            onClick={() =>
              toggleShowAllProducts(
                filter === "all" ? category : (filter as Category)
              )
            }
          >
            {showAllProducts[filter === "all" ? category : (filter as Category)]
              ? "-"
              : "+"}
          </button>
        </div>
      )}
    </>
  );
};
