"use client";
import { useState, useEffect } from "react";

const useFetchData = () => {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const dataAPI = await fetch("https://dummyjson.com/products?limit=100");
      const dataJSON = await dataAPI.json();
      setProduct(dataJSON.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return product;
};

export default useFetchData;
