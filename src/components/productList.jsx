import ProductCard from "./common/productCard";

const ProductList = ({ tag, title, products, loading, err }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-5 h-10 bg-[var(--red)] rounded"></div>
          <span className="text-[var(--red)] font-semibold">{tag}</span>
        </div>
        <div>
          <h2 className="text-[36px] font-semibold">{title}</h2>
        </div>
      </div>
      <div>
        {err && (
          <div className="text-red-500 text-sm">An error occurred: {err}</div>
        )}
      </div>
      <div className="flex w-full overflow-x-scroll gap-[30px] scrollbar-hidden">
        {products && products.length > 0 ? (
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        ) : (
          <div className="text-gray-400 text-sm">No products found</div>
        )}
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
