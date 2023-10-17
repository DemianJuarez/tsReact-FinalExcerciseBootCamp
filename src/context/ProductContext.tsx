import { createContext, ReactNode, useEffect, useState } from "react";

export const ProductContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageProfile: string;
  setImageProfile: React.Dispatch<React.SetStateAction<string>>;
  products: Producto[];
  setProducts: React.Dispatch<React.SetStateAction<Producto[]>>;
  wishlistArray: Producto[];
  setWishlistArray: React.Dispatch<React.SetStateAction<Producto[]>>;
  cartArray: Producto[];
  setCartArray: React.Dispatch<React.SetStateAction<Producto[]>>;
}>({
  open: true,
  setOpen: () => {},
  imageProfile: "",
  setImageProfile: () => {},
  products: [],
  setProducts: () => {},
  wishlistArray: [],
  setWishlistArray: () => {},
  cartArray: [],
  setCartArray: () => {},
});

interface Response {
  limit: number;
  products: Producto[];
  skip: number;
  total: number;
}

export interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [imageProfile, setImageProfile] = useState<string>("");
  const [products, setProducts] = useState<Producto[]>([]);
  const [wishlistArray, setWishlistArray] = useState<Producto[]>([]);
  const [cartArray, setCartArray] = useState<Producto[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const api: string = "https://dummyjson.com/products";
      const returned = await fetch(api);
      const data: Response = await returned.json();
      setProducts(data.products);
    };
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        open,
        setOpen,
        imageProfile,
        setImageProfile,
        products,
        setProducts,
        wishlistArray,
        setWishlistArray,
        cartArray,
        setCartArray,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
