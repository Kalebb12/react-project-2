import { useEffect, useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsEye, BsStarFill } from "react-icons/bs";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const fetchProducts = async () => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-10 px-3 py-4">
      <div className="flex flex-col gap-6">
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
            const arr = Array(Math.floor(product.rating)).fill(null);
            return (
              <div
                key={product.id}
                className="min-w-[270px] flex flex-col gap-4 relative items-start"
              >
                <img
                  src={product.images[0]}
                  alt=""
                  className="rounded w-[270px] h-[250px] bg-[#F5F5F5] object-contain"
                />
                <div className="px-3 py-1 bg-[var(--red)] inline-block rounded absolute top-3 left-3 text-[12px] text-white">
                  {product.discountPercentage}%
                </div>
                <div className="absolute flex flex-col gap-2 top-3 right-3">
                  <div className="w-[34px] h-[34px] justify-center items-center  flex bg-white rounded-full">
                    <BsEye size={20} />
                  </div>
                  <div className="w-[34px] h-[34px] justify-center items-center flex bg-white rounded-full">
                    <BiHeart size={20} />
                  </div>
                </div>
                <div></div>
                <div className="flex flex-col gap-2">
                  <span className="font-medium  font-[Poppins]">
                    {product.title}
                  </span>
                  <div className="flex gap-3 font-medium">
                    <span className="text-[var(--red)]  font-[Poppins]">
                      {product.price}
                    </span>
                    <s className=" font-[Poppins] text-[var(--gray)]">
                      {(
                        (100 * product.price) /
                        (100 - product.discountPercentage)
                      ).toFixed(2)}
                    </s>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {arr.map((_, i) => {
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
                    <span className="text-[var(--gray)]  font-[Poppins] font-medium">
                      ({product.reviews.length})
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
