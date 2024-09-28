import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

const Navbar = () => {
  const [ query, setQuery ] = useState("");
  const { user } = useContext(GlobalContext);

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: '/products',
      search: `?q=${query}`,
    });
  }


  return (
    <nav className="flex items-center justify-between gap-8 px-3 py-4">
      <div className="flex gap-[190px] items-center">
        <h2 className="font-extrabold text-[24px]">Exclusive</h2>
        {/* links */}
        <div className="flex items-center gap-12">
          <Link to="/" className="font-[Poppins] hover:underline no-underline">
            Home
          </Link>
          <Link to="#" className="font-[Poppins] hover:underline no-underline">
            Contacts
          </Link>
          <Link to="#" className="font-[Poppins] hover:underline no-underline">
            About
          </Link>
          {!user && (
            <Link
              to="/register"
              className="font-[Poppins] hover:underline no-underline"
            >
              Signup
            </Link>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <form onSubmit={(e)=>handleSubmit(e)} className="flex gap-[10px] rounded-[4px] py-[7px] pr-5 px-3 bg-[#F5F5F5]">
          <input
            type="text"
            className="text-[12px] bg-transparent outline-none"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <img src="/search.svg" alt="" />
        </form>
        <div className="flex items-center gap-4">
          <FaRegHeart size={20} />
          <IoCartOutline size={25} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
