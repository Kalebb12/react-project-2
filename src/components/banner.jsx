import { Link } from "react-router-dom";
import Slider from "./common/swiper";

const Banner = () => {
  const links = [
    {
      to: "/category/Laptops",
      label: "Laptops",
    },
    {
      to: "/category/Beauty",
      label: "Beauty",
    },
    {
      to: "/category/Furniture",
      label: "Furniture",
    },
    {
      to: "/category/Groceries",
      label: "Groceries",
    },
    {
      to: "/category/Kitchen-Accessories",
      label: "Kitchen-Accessories",
    },
    {
      to: "/category/Mens-Shirts",
      label: "Mens-Shirts",
    },
    {
      to: "/category/Mens-Shoes",
      label: "Mens-Shoes",
    },
    {
      to: "/category/Mens-Watches",
      label: "Mens-Watches",
    },
    {
      to: "/category/Mobile-Accessories",
      label: "Mobile-Accessories",
    },
  ];
  return (
    <div className="flex px-3 py-4 flex-1 gap-4 items-center h-[450px]">
      <ul className="flex flex-col gap-4 px-5 list-none min-w-[200px]">
        {links.map((link,i) => {
          return (
            <li key={i}>
              <Link to={link.to} className="no-underline cursor-pointer">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Slider component */}
      <Slider/>
    </div>
  );
};

export default Banner;
