import UseFetch from "./hooks/useFetch";
import ProductList from "./productList";

const Products = () => {
  const {
    data: products,
    loading,
    err,
  } = UseFetch(
    "https://dummyjson.com/products?sortBy=price&order=desc&limit=10"
  );

  const {
    data: mobile,
    loading: pending,
    err: error,
  } = UseFetch("https://dummyjson.com/products/category/smartphones");

  const {
    data: ourProducts,
    loading: isPending,
    err: erro,
  } = UseFetch("https://dummyjson.com/products");
  return (
    <div className=" px-3 py-4">
      <ProductList
        tag={"Today's"}
        title={"Flash Sales"}
        products={products.products}
        loading={loading}
      />
      <ProductList
        tag={"Mobile Phones"}
        title={"Bestsellers"}
        products={mobile.products}
        loading={pending}
      />
      <ProductList
        tag={"Our Products"}
        title={"New Arrivals"}
        products={ourProducts.products}
        loading={isPending}
      />
    </div>
  );
};

export default Products;
