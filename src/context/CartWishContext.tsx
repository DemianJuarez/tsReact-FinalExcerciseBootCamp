import { ReactNode, createContext, useState } from "react";
import { Producto } from "./ProductContext";

export const CartWishContext = createContext<{
  cartArray: Producto[];
  setCartArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  wishListArray: Producto[];
  setWishListArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  boughtArray: Producto[];
  setBoughtArray: React.Dispatch<React.SetStateAction<Producto[]>>;
}>({
  cartArray: [],
  setCartArray: () => [],
  wishListArray: [],
  setWishListArray: () => [],
  boughtArray: [],
  setBoughtArray: () => [],
});

export const CartWishProvider = ({ children }: { children: ReactNode }) => {
  const [wishListArray, setWishListArray] = useState<Producto[]>([]);
  const [cartArray, setCartArray] = useState<Producto[]>([]);
  const [boughtArray, setBoughtArray] = useState<Producto[]>([]);

  return (
    <CartWishContext.Provider
      value={{
        cartArray,
        setCartArray,
        wishListArray,
        setWishListArray,
        boughtArray,
        setBoughtArray,
      }}
    >
      {children}
    </CartWishContext.Provider>
  );
};
