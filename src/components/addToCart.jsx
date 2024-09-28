import { useState } from "react";
import toast from "react-hot-toast";
import { BiHeart } from "react-icons/bi";

const AddToCart = () => {
  const [num, setNum] = useState(0);
  const add = () => {
    setNum(num + 1);
    toast.success("product added to cart");
  };

  const subtract = () => {
    if (num > 0) {
      setNum(num - 1);
      toast.success("product removed to cart");
    }
    else{
        toast.error("product not in cart")
    }
  };

  const buy = () => {
    toast.success("Purchase successfully");
  };

  return (
    <div className="flex items-center gap-4">
      {/* increment */}
      <div className="flex items-center h-[44px] w-[159px] justify-between border border-black rounded-md">
        <button
          className="w-[40px] h-full border-r border-black"
          onClick={subtract}
        >
          -
        </button>
        <div>{num}</div>
        <button
          className="w-[40px] h-full border-l border-black bg-[#DB4444] text-white"
          onClick={add}
        >
          +
        </button>
      </div>

      {/* button */}
      <button
        className="py-[10px] px-6 bg-[#DB4444] text-white rounded"
        onClick={buy}
      >
        Buy Now
      </button>

      {/* Wishlist */}
      <div className="cursor-pointer w-[40px] h-[40px] border-[#00000080] border flex justify-center items-center rounded">
        <BiHeart size={20} />
      </div>
    </div>
  );
};

export default AddToCart;
