import { Producto } from "./context/ProductContext";

export const numerator = (
  price: Producto["price"],
  discountPercentage: Producto["discountPercentage"]
) => {
  const priceWithDiscount = price * (1 - discountPercentage / 100);
  return Math.round(priceWithDiscount * 100) / 100;
};
