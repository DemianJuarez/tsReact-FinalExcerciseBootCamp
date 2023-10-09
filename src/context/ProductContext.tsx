import { createContext, ReactNode, useState } from "react";

export const ProductContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageProfile: string;
  setImageProfile: React.Dispatch<React.SetStateAction<string>>;
}>({
  open: true,
  setOpen: () => {},
  imageProfile: "",
  setImageProfile: () => {},
});

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [imageProfile, setImageProfile] = useState<string>("");
  return (
    <ProductContext.Provider
      value={{ open, setOpen, imageProfile, setImageProfile }}
    >
      {children}
    </ProductContext.Provider>
  );
};
