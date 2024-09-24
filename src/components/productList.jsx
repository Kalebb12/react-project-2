import { useEffect, useState } from "react";
import ProductCard from "./common/productCard";
import UseFetch from "./hooks/useFetch";

const ProductList = () => {
    const {data :products, loading , err} = UseFetch()

  return (
    <div className="flex flex-col gap-4 px-3 py-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-10 bg-[var(--red)] rounded"></div>
          <span className="text-[var(--red)] font-semibold">Today’s</span>
        </div>
        <div>
          <h2 className="text-[36px] font-semibold">Flash Sales</h2>
        </div>
      </div>
      {/* col -2 */}
      <div className="flex w-full overflow-x-scroll gap-[30px] scrollbar-hidden">
        {products &&
          products.map((product) => {
            
            return (
              <ProductCard key={product.id} product={product}/>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
