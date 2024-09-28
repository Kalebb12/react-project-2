import { Link, useParams } from "react-router-dom";
import UseFetch from "../components/hooks/useFetch";
import Navbar from "../components/navbar";
import { useState } from "react";
import AddToCart from "../components/addToCart";
import { BsStarFill } from "react-icons/bs";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    err,
    loading,
    data: product,
  } = UseFetch("https://dummyjson.com/products/" + id);

  const [previewIndex, setPreviewIndex] = useState(0);
  
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
              <Link to={"/category/" + product.category}>
                {product.category}
              </Link>
            </li>
            <li className="text-[#ca9e9e]">{product.title}</li>
          </ul>
        </div>
        {err && <p>Error : {err}</p>}
        {loading && <p>Loading...</p>}

        {/* Make reusable component here */}
        {!loading && !err &&  (
          <div className="flex gap-[70px] items-start">
            {/* images */}
            <div className="grid-container">
              {product.images.map((_, i) => {
                return (
                  <img
                    src={product.images[i]}
                    onClick={() => {
                      setPreviewIndex(i);
                    }}
                    alt={product.title}
                    key={i}
                    className="object-contain w-[full] bg-[#F5F5F5] h-[140px] cursor-pointer rounded"
                  />
                );
              })}
              <img
                src={product.images[previewIndex]}
                alt=""
                className="object-contain w-full h-full bg-[#F5F5F5] rounded preview"
              />
            </div>

            {/* details */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-[24px]">{product.title}</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    { Array(Math.round(product.rating)).fill(null).map((_, i) => {
                      return (
                        <BsStarFill
                          fill="#FFAD33"
                          width={20}
                          height={20}
                          key={i}
                        />
                      );
                    })}
                  </div>
                  <div className="text-[14px]">
                    ({product.reviews.length} Reviews)
                  </div>
                  <div className={`${product.availabilityStatus == "In Stock" ?" text-[#00FF66]" : "text-red-500"} text-[14px] border-l border-black px-2`}>
                    {product.availabilityStatus}
                  </div>
                </div>
                <h2 className="text-[24px]">
                  ${product.price.toLocaleString()}
                </h2>
              </div>
              <p>{product.description}</p>
              <hr className="bg-black" />

              <div className="flex gap-4 items-center">
                <span>Colours:</span>
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 bg-[#A0BCE0] rounded-full border border-black"></div>
                  <div className="w-5 h-5 bg-[#E07575] rounded-full"></div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div>Size:</div>
                <div className="flex gap-2 items-center">
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">
                    Xs
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">
                    S
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">
                    M
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">
                    L
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center border border-[#00000080] hover:bg-[#DB4444] hover:text-white transition-all">
                    XL
                  </span>
                </div>
              </div>

              <AddToCart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
