import { Link, useParams } from "react-router-dom";
import UseFetch from "../components/hooks/useFetch";
import Navbar from "../components/navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    err,
    loading,
    data: product,
  } = UseFetch("https://dummyjson.com/products/" + id);

  return (
    <div>
      <Navbar />
      <div className="px-3">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>{product.category}</a>
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
        {err && <p>Error : {err}</p>}
        {loading && <p>Loading...</p>}

        {/* Make reusable component here */}
          {!loading && !err && (
            <div className="flex gap-[70px] items-start justify-center">
              {/* images */}
              <div className="grid-container">
                {
                  product.images.map((_,i)=>{
                    return <div><img src={product.images[i]} alt={product.title} key={i} className=""/></div>
                  })
                }
                <div className="cols"><img src={product.images[0]} alt="" className="object-contain w-full h-full"/></div>
              </div>

              {/* details */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h2 className="font-semibold text-[24px]">{product.title}</h2>
                  <div className="flex items-center gap-2">
                    <div>rating...</div>
                    <div className="text-[14px]">({product.reviews.length} Reviews)</div>
                    <div className="text-[#00FF66] text-[14px] border-l border-black px-2">In Stock</div>
                  </div>
                  <h2 className="text-[24px]">${product.price}</h2>
                </div>
                <p>{product.description}</p>
                <hr className="text-black"/>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default ProductDetails;
