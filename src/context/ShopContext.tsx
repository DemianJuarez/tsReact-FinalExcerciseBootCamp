import { createContext, ReactNode, useState } from "react";

export type FilterCategory =
  | "smartphones"
  | "laptops"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "home-decoration"
  | "all";

export const ShopContext = createContext<{
  filter: FilterCategory;
  setFilter: React.Dispatch<React.SetStateAction<FilterCategory>>;
  min: number;
  setMin: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  setMax: React.Dispatch<React.SetStateAction<number>>;
}>({
  filter: "all",
  setFilter: () => {},
  min: 0,
  setMin: () => {},
  max: 30,
  setMax: () => {},
});

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(30);
  return (
    <ShopContext.Provider
      value={{ filter, setFilter, min, setMin, max, setMax }}
    >
      {children}
    </ShopContext.Provider>
  );
};
