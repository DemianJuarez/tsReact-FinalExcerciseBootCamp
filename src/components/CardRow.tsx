import { useContext } from "react";
import { Producto } from "../context/ProductContext";
import { Category, CategoryState } from "../pages/ShopPage";
import { Card } from "./Card";
import { ShopContext } from "../context/ShopContext";
import { numerator } from "../utils";

type CardRowProps = {
  products: Producto[];
  category: Category;
  showAllProducts: CategoryState;
  defaultProductsCount: 3;
  toggleShowAllProducts: (category: Category) => void;
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
              id={e.id}
              title={e.title}
              description={e.description}
              price={e.price}
              discountPercentage={e.discountPercentage}
              rating={e.rating}
              stock={e.stock}
              brand={e.brand}
              category={e.category}
              thumbnail={e.thumbnail}
              productImages={e.images}
              discountedPrice={numerator(e.price, e.discountPercentage)}
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
