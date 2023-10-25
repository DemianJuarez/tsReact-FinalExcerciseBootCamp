import "./MetricsPage.css";

import { useContext, useEffect, useState } from "react";
import { ProductContext, Producto } from "../context/ProductContext";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
} from "recharts";
import { CartWishContext } from "../context/CartWishContext";
import { numerator } from "../utils";
import { Navigate } from "react-router-dom";

type StockCategory = {
  [key: string]: number;
};

export const MetricsPage = () => {
  const { products } = useContext(ProductContext);
  const { boughtArray } = useContext(CartWishContext);
  const [chooseBar, setChooseBar] = useState<string>("fragrances");
  const [arrayBar, setArrayBar] = useState<Producto[]>([]);
  const [labelsBar, setLabelsBar] = useState<string[]>([]);
  const [priceBar, setPriceBar] = useState<number[]>([]);
  const [discountBar, setDiscountBar] = useState<number[]>([]);
  const [discountedPriceBar, setDiscountedPriceBar] = useState<number[]>([]);

  const [arrayPie, setArrayPie] = useState<Producto[]>([]);
  const [stockCategoryPie, setStockCategoryPie] = useState<StockCategory>({});

  useEffect(() => {
    if (chooseBar !== "") {
      const filteredBar = products.filter((e) => e.category === chooseBar);
      setArrayBar(filteredBar);
    } else {
      setArrayBar(products);
    }
  }, [chooseBar, products]);

  useEffect(() => {
    setArrayPie(products);
  }, [products, arrayPie]);

  useEffect(() => {
    const stockCalculado: StockCategory = {};
    arrayPie.forEach((product) => {
      const { category, stock } = product;
      stockCalculado[category] = (stockCalculado[category] || 0) + stock;
    });
    setStockCategoryPie(stockCalculado);
  }, [arrayPie]);

  const transformToChartData = (stockCategoryPie: StockCategory) => {
    return Object.keys(stockCategoryPie).map((category) => ({
      name: category,
      value: stockCategoryPie[category],
    }));
  };

  const dataPie = transformToChartData(stockCategoryPie);

  useEffect(() => {
    const priceArray = arrayBar.map((e) => e.price);
    const discountArray = arrayBar.map((e) => Math.floor(e.discountPercentage));
    const labelArray = arrayBar.map((e) => e.title);
    const discountedPriceArray = arrayBar.map((e) =>
      Math.floor(numerator(e.price, e.discountPercentage))
    );
    setLabelsBar(labelArray);
    setPriceBar(priceArray);
    setDiscountBar(discountArray);
    setDiscountedPriceBar(discountedPriceArray);
  }, [arrayBar]);

  const combinedArray = labelsBar.map((element, index) => ({
    labels: element,
    discountedPrice: discountedPriceBar[index],
    price: priceBar[index],
    discount: discountBar[index],
    product: labelsBar[index],
  }));

  const dataBar = combinedArray.map((e) => ({
    name: e.product,
    discountedPrice: e.discountedPrice,
    price: e.price,
    discountPercent: e.discount,
  }));
  const session = localStorage.getItem("sessionData");

  return session === null ? (
    <Navigate to="/login" />
  ) : (
    <div className="MetricsPageContainer">
      <div className="Container">
        <div className="BarContainer">
          <h2>
            Difference between products with oferts and products w/o oferts
          </h2>

          <BarChart
            width={1250}
            height={300}
            data={dataBar}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="discountedPrice" stackId="a" fill="#8884d8" />
            <Bar dataKey="price" stackId="" fill="#82ca9d" />
            <Bar dataKey="discountPercent" fill="#fc7135" />
          </BarChart>
          <div className="buttonsBar">
            <button
              className="smartphonesBar"
              onClick={() => {
                setChooseBar("smartphones");
              }}
            >
              smartphones
            </button>
            <button
              className="laptopsBar"
              onClick={() => {
                setChooseBar("laptops");
              }}
            >
              laptops
            </button>
            <button
              className="fragrancesBar"
              onClick={() => {
                setChooseBar("fragrances");
              }}
            >
              fragrances
            </button>
            <button
              className="skincareBar"
              onClick={() => {
                setChooseBar("skincare");
              }}
            >
              skincare
            </button>
            <button
              className="groceriesBar"
              onClick={() => {
                setChooseBar("groceries");
              }}
            >
              groceries
            </button>
            <button
              className="home-decorationBar"
              onClick={() => {
                setChooseBar("home-decoration");
              }}
            >
              home-decoration
            </button>
          </div>
        </div>
        <div className="secondRow">
          <div className="PieContainer">
            <h2>Quantity of Stock</h2>
            <PieChart width={350} height={350}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={dataPie}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </div>
          <h2>Bought Products: {boughtArray.length}</h2>
          <div className="boughtContainer">
            {boughtArray?.map((product, index) => (
              <div key={index}>
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
