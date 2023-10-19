import "./MetricsPage.css";

import { useContext, useEffect, useState } from "react";
import { ProductContext, Producto } from "../context/ProductContext";
import { CardProps } from "../components/Card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const MetricsPage = () => {
  const { products } = useContext(ProductContext);
  const [chooseBar, setChooseBar] = useState<string>("fragrances");
  const [arrayBar, setArrayBar] = useState<Producto[]>([]);
  const [labelsBar, setLabelsBar] = useState<string[]>([]);
  const [priceBar, setPriceBar] = useState<number[]>([]);
  const [discountBar, setDiscountBar] = useState<number[]>([]);
  const [discountedPriceBar, setDiscountedPriceBar] = useState<number[]>([]);

  const numerator = (
    price: CardProps["price"],
    discountPercentage: CardProps["discountPercentage"]
  ) => {
    const priceWithDiscount = price * (1 - discountPercentage / 100);
    return Math.round(priceWithDiscount * 100) / 100;
  };

  useEffect(() => {
    if (chooseBar !== "") {
      const filteredBar = products.filter((e) => e.category === chooseBar);
      setArrayBar(filteredBar);
    } else {
      setArrayBar(products);
    }
  }, [chooseBar]);

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

  console.log(arrayBar);
  console.log(labelsBar);
  console.log(discountBar);
  console.log(discountedPriceBar);
  console.log(priceBar);

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
    discount: e.discount,
  }));
  console.log("🚀 ~ file: MetricsPage.tsx:66 ~ dataBar ~ dataBar:", dataBar);

  return (
    <div className="MetricsPageContainer">
      <div className="Container">
        <BarChart
          width={1500}
          height={300}
          data={dataBar}
          margin={{
            top: 20,
            right: 30,
            left: 20,
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
          <Bar dataKey="discount" fill="#ffc658" />
        </BarChart>
        <button
          onClick={() => {
            setChooseBar("smartphones");
          }}
        >
          smartphones
        </button>
        <button
          onClick={() => {
            setChooseBar("laptops");
          }}
        >
          laptops
        </button>
        <button
          onClick={() => {
            setChooseBar("fragrances");
          }}
        >
          fragrances
        </button>
        <button
          onClick={() => {
            setChooseBar("skincare");
          }}
        >
          skincare
        </button>
        <button
          onClick={() => {
            setChooseBar("groceries");
          }}
        >
          groceries
        </button>
        <button
          onClick={() => {
            setChooseBar("home-decoration");
          }}
        >
          home-decoration
        </button>
      </div>
    </div>
  );
};
