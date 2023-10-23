import { ReactNode, createContext, useEffect, useState } from "react";
import { Producto } from "./ProductContext";
import { saveToLocalStorage, loadFromLocalStorage } from "../utilsStorage";

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
  const [wishListArray, setWishListArray] = useState<Producto[]>(
    loadFromLocalStorage("wishList") || []
  );
  const [cartArray, setCartArray] = useState<Producto[]>(
    loadFromLocalStorage("cartList") || []
  );
  const [boughtArray, setBoughtArray] = useState<Producto[]>([
    loadFromLocalStorage("boughtList") || [],
  ]);

  useEffect(() => {
    saveToLocalStorage("wishList", wishListArray);
    saveToLocalStorage("cartList", cartArray);
    saveToLocalStorage("boughtList", boughtArray);
  }, [wishListArray, cartArray, boughtArray]);

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
