import { NavBar } from "../components/NavBar";
import { ReactNode } from "react";

interface LayoutPageProps {
  children: ReactNode;
}

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <>
      <>
        <NavBar />
        <div className="layout-container"></div>
        {children}
      </>
    </>
  );
};
