import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { LayoutPage } from "./layout/LayoutPage";
import "./main.css";
import { MetricsPage } from "./pages/MetricsPage.tsx";
import { LoginPage } from "./pages/LoginPage.tsx";
import { CartPage } from "./pages/CartPage.tsx";
import { WishListPage } from "./pages/WishListPage.tsx";
import { ShopPage } from "./pages/ShopPage.tsx";
import { ShopProvider } from "./context/ShopContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductProvider>
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <LayoutPage>
                  <App />
                </LayoutPage>
              }
            />
            <Route
              path="/metrics"
              element={
                <LayoutPage>
                  <MetricsPage />
                </LayoutPage>
              }
            />
            <Route
              path="/cart"
              element={
                <LayoutPage>
                  <CartPage />
                </LayoutPage>
              }
            />
            <Route
              path="/wishList"
              element={
                <LayoutPage>
                  <WishListPage />
                </LayoutPage>
              }
            />
            <Route
              path="/shop"
              element={
                <LayoutPage>
                  <ShopPage />
                </LayoutPage>
              }
            />
            <Route
              path="/login"
              element={
                <LayoutPage>
                  <LoginPage />
                </LayoutPage>
              }
            />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </ProductProvider>
  </React.StrictMode>
);
