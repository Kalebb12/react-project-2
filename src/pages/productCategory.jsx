import { Link, useParams } from "react-router-dom";
import UseFetch from "../components/hooks/useFetch";
import Navbar from "../components/navbar";
import ProductList from "../components/productList";

const ProductCategory = () => {
  const { title } = useParams();

  const { loading, err, data } = UseFetch(
    `https://dummyjson.com/products/category/${title}`
  );
  const products = data.products;
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-4  px-3 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/">category</Link>
            </li>
            <li className="text-[#ca9e9e]">{title}</li>
          </ul>
        </div>
        {/* col -2 */}
        <ProductList products={products} loading={loading} tag={"Category"} title={title}/>
      </div>
    </div>
  );
};

export default ProductCategory;
