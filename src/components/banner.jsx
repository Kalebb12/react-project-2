import { Link } from "react-router-dom";
import Slider from "./common/swiper";

const Banner = () => {
  const links = [
    {
      to: "",
      label: "Laptops",
    },
    {
      to: "",
      label: "Beauty",
    },
    {
      to: "",
      label: "Furniture",
    },
    {
      to: "",
      label: "Groceries",
    },
    {
      to: "",
      label: "Kitchen-Accessories",
    },
    {
      to: "",
      label: "Mens-Shirts",
    },
    {
      to: "",
      label: "Mens-Shoes",
    },
    {
      to: "",
      label: "Mens-Watches",
    },
    {
      to: "",
      label: "Mobile-Accessories",
    },
  ];
  return (
    <div className="flex px-3 py-4 flex-1 gap-4 items-center h-[450px]">
      <ul className="flex flex-col gap-4 px-5 list-none min-w-[200px]">
        {links.map((link,i) => {
          return (
            <li key={i}>
              <Link to="" className="no-underline cursor-pointer">
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
