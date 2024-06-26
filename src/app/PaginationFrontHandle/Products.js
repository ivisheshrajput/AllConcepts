"use client";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Products = ({ products }) => {
  const [page, setPage] = useState(1);
  const selectPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };
  return (
    <>
      <div className="px-9">
        {products ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(page * 10 - 10, page * 10).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.images[0]} // Use the first image in the array
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded">
                    ${product.price}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[14px] font-semibold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-[10px]">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">Loading Products...</div>
        )}
      </div>
      {products && products.length > 0 && (
        <div className="my-4 flex justify-center items-center space-x-2">
          <span
            className={`${
              page > 1 ? "cursor-pointer  " : "cursor-not-allowed  "
            }`}
            onClick={() => selectPageHandle(page - 1)}
          >
            <GrPrevious />
          </span>
          {[...Array(Math.ceil(products.length / 10))].map((_, i) => {
            return (
              <span
                onClick={() => selectPageHandle(i + 1)}
                key={i}
                className={`py-2 px-4  rounded-full cursor-pointer ${
                  page === i + 1
                    ? "bg-gray-500 text-white "
                    : "bg-white text-black "
                }`}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={`${
              page < products.length / 10
                ? "cursor-pointer  "
                : "cursor-not-allowed  "
            }`}
            onClick={() => selectPageHandle(page + 1)}
          >
            <GrNext />
          </span>
        </div>
      )}
    </>
  );
};

export default Products;
