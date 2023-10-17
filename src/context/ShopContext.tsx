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
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}>({
  filter: "all",
  setFilter: () => {},
  min: 0,
  setMin: () => {},
  max: 2000,
  setMax: () => {},
  input: "",
  setInput: () => {},
});

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(2000);
  const [input, setInput] = useState<string>("");
  return (
    <ShopContext.Provider
      value={{ filter, setFilter, min, setMin, max, setMax, input, setInput }}
    >
      {children}
    </ShopContext.Provider>
  );
};
