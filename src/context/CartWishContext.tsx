import { ReactNode, createContext, useState } from "react";
import { Producto } from "./ProductContext";
import { CardProps } from "../components/Card";

export const CartWishContext = createContext<{
  cartArray: Producto[];
  setCartArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  wishListArray: Producto[];
  setWishListArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  toWishList: CardProps[];
  setToWishList: React.Dispatch<React.SetStateAction<CardProps[]>>;
  toCartList: CardProps[];
  setToCartList: React.Dispatch<React.SetStateAction<CardProps[]>>;
}>({
  cartArray: [],
  setCartArray: () => [],
  wishListArray: [],
  setWishListArray: () => [],
  toWishList: [],
  setToWishList: () => [],
  toCartList: [],
  setToCartList: () => [],
});

export const CartWishProvider = ({ children }: { children: ReactNode }) => {
  const [wishListArray, setWishListArray] = useState<Producto[]>([]);
  const [toWishList, setToWishList] = useState<CardProps[]>([]);
  const [cartArray, setCartArray] = useState<Producto[]>([]);
  const [toCartList, setToCartList] = useState<CardProps[]>([]);

  return (
    <CartWishContext.Provider
      value={{
        cartArray,
        setCartArray,
        wishListArray,
        setWishListArray,
        toWishList,
        setToWishList,
        toCartList,
        setToCartList,
      }}
    >
      {children}
    </CartWishContext.Provider>
  );
};
