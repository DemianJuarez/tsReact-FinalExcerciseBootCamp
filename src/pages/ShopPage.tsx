import { Filter } from "../components/Filter";
import { ProductContext } from "../context/ProductContext";
import { ShopContext } from "../context/ShopContext";
import { useContext, useState } from "react";
import "./ShopPage.css";
import { CardRow } from "../components/CardRow";
import { Navigate } from "react-router-dom";

export type Category =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration";

const categoryArray: Category[] = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
];

export type CategoryState = Record<Category, boolean>;

export const ShopPage = () => {
  const { products } = useContext(ProductContext);
  const { filter } = useContext(ShopContext);
  const [showAllProducts, setShowAllProducts] = useState<CategoryState>({
    smartphones: false,
    laptops: false,
    fragrances: false,
    skincare: false,
    groceries: false,
    "home-decoration": false,
  });
  const defaultProductsCount = 3;

  const toggleShowAllProducts = (category: Category) => {
    setShowAllProducts((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="shopPageContainer">
      <Filter />
      {filter === "all" ? (
        <div className="productsContainer">
          {categoryArray.map((category) => (
            <div className={`${category}Category`} key={category}>
              <h2 className="titleCategory">Category {category}</h2>
              <div className={`products${category}`}>
                <CardRow
                  products={products}
                  category={category}
                  showAllProducts={showAllProducts}
                  defaultProductsCount={defaultProductsCount}
                  toggleShowAllProducts={toggleShowAllProducts}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="productsContainer">
          <div className={`${filter}Category`} key={filter}>
            <h2 className="titleCategory">Category {filter}</h2>
            <div className={`products${filter}`}>
              <CardRow
                products={products.filter(
                  (product) => product.category === filter
                )}
                category={filter}
                showAllProducts={showAllProducts}
                defaultProductsCount={defaultProductsCount}
                toggleShowAllProducts={toggleShowAllProducts}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
