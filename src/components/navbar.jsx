import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-8 px-3 py-4">
      <div className="flex gap-[190px] items-center">
        <h2 className="font-extrabold text-[24px]">Exclusive</h2>
        {/* links */}
        <div className="flex items-center gap-12">
          <a href="#" className="font-[Poppins] hover:underline no-underline">Home</a>
          <a href="#" className="font-[Poppins] hover:underline no-underline">Contacts</a>
          <a href="#" className="font-[Poppins] hover:underline no-underline">About</a>
          <a href="#" className="font-[Poppins] hover:underline no-underline">Signup</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-[10px] rounded-[4px] py-[7px] pr-5 px-3 bg-[#F5F5F5]">
          <input type="text" className="text-[12px] bg-transparent outline-none" placeholder="What are you looking for?" />
          <img src="/search.svg" alt="" />
        </div>
        <div className="flex items-center gap-4">
            <FaRegHeart  size={20}/>
            <IoCartOutline size={25}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;