"use client";
import React from "react";
import Products from "./Products";
import useFetchData from "@/hooks/useFetchData";

const Page = () => {
  const product = useFetchData();
  return <Products products={product} />;
};

export default Page;
