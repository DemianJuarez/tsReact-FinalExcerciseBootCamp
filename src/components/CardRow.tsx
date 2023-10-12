import { useContext } from "react";
import { Producto } from "../context/ProductContext";
import { Category, CategoryState } from "../pages/ShopPage";
import { Card } from "./Card";
import { ShopContext } from "../context/ShopContext";

type CardRowProps = {
  products: Producto[];
  category: Category;
  showAllProducts: CategoryState;
  defaultProductsCount: 3;
  toggleShowAllProducts: (category: Category) => void;
};

export const CardRow = (props: CardRowProps) => {
  const { filter } = useContext(ShopContext);
  const {
    products,
    category,
    showAllProducts,
    defaultProductsCount,
    toggleShowAllProducts,
  } = props;

  console.log(filter);
  return (
    <>
      {products
        .filter((e) => e.category === category)
        .slice(0, showAllProducts[category] ? undefined : defaultProductsCount)
        .map((e) => (
          <div className="product" key={e.title}>
            <Card
              rating={e.rating}
              productImages={e.images}
              name={e.title}
              price={e.price}
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
