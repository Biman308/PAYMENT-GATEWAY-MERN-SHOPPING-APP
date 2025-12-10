import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { Link } from "react-router-dom";

const CategoryList = () => {
  // 1. Initialize with an empty array
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const categoryLoading = new Array(13).fill(null);

  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(SummaryApi.categoryProduct.url);
      const dataResponse = await response.json();

      setLoading(false);

      // 2. DEFENSIVE CODE: Only set state if dataResponse.data actually exists
      if (dataResponse.data) {
        setCategoryProduct(dataResponse.data);
      } else {
        // If API returns an error message, keep it an empty array to prevent crash
        setCategoryProduct([]); 
        console.error("API Error or Empty Data:", dataResponse);
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
    }
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto bg-white -mt-10">
      <div className="flex items-center gap-4 justify-between overflow-scroll scrollbar-none">
        {loading
          ? categoryLoading.map((el, index) => {
              return (
                <div
                  className="h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse"
                  key={"categoryLoading" + index}
                ></div>
              );
            })
          : // 3. OPTIONAL CHAINING: Add '?' before .map just in case
            categoryProduct?.map((product, index) => {
              return (
                <Link
                  to={"/product-category/" + product?.category}
                  className="cursor-pointer"
                  key={product?.category || index}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center">
                    <img
                      src={product?.productImage[0]}
                      alt={product?.category}
                      className="h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all"
                    />
                  </div>
                  <p className="text-center text-sm md:text-base capitalize">
                    {product?.category}
                  </p>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryList;
