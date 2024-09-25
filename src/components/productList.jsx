import ProductCard from "./common/productCard";
import UseFetch from "./hooks/useFetch";

const ProductList = () => {
  const { data, loading, err } = UseFetch(
    "https://dummyjson.com/products?sortBy=rating&order=desc&limit=10"
  );
  const products = data.products;
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
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
      <div className="flex w-full overflow-x-scroll gap-[30px] scrollbar-hidden">
      {loading &&
        Array(10)
          .fill(null)
          .map((_, i) => {
            return (
              <div className="min-w-[270px] flex flex-col gap-4" key={i}>
                <div className="skeleton rounded w-[270px] h-[250px]"></div>
                <div className="h-4 skeleton w-28"></div>
                <div className="w-full h-4 skeleton"></div>
                <div className="w-full h-4 skeleton"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
