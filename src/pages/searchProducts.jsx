import { Link, useLocation } from "react-router-dom";
import ProductList from "../components/productList";
import UseFetch from "../components/hooks/useFetch";
import Navbar from "../components/navbar";

const SearchProducts = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const { err, loading, data } = UseFetch(
    "https://dummyjson.com/products/search?q=" + query
  );

  return (
    <div>
      <Navbar />
      <div className=" px-3 py-4">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#ca9e9e]">
              {query.charAt(0).toUpperCase() + query.slice(1)}
            </li>
          </ul>
        </div>
        <ProductList
          products={data.products}
          loading={loading}
          tag={"Results"}
          title={query.charAt(0).toUpperCase() + query.slice(1)}
          err={err}
        />
      </div>
    </div>
  );
};

export default SearchProducts;
