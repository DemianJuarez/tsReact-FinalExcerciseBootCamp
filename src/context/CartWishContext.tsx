import { ReactNode, createContext, useState } from "react";
import { Producto } from "./ProductContext";

export const CartWishContext = createContext<{
  cartArray: Producto[];
  setCartArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  wishListArray: Producto[];
  setWishListArray: React.Dispatch<React.SetStateAction<Producto[]>>;
}>({
  cartArray: [],
  setCartArray: () => [],
  wishListArray: [],
  setWishListArray: () => [],
});

export const CartWishProvider = ({ children }: { children: ReactNode }) => {
  const [wishListArray, setWishListArray] = useState<Producto[]>([]);
  const [cartArray, setCartArray] = useState<Producto[]>([]);

  return (
    <CartWishContext.Provider
      value={{
        cartArray,
        setCartArray,
        wishListArray,
        setWishListArray,
      }}
    >
      {children}
    </CartWishContext.Provider>
  );
};
