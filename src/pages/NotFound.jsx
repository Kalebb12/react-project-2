import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />

      <div className="text-sm breadcrumbs px-3">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="text-[#ca9e9e]">404 Error</li>
        </ul>
      </div>

      <div className="text-center justify-center items-center flex flex-col h-[80vh] w-full">
        <h1 className="text-[110px] font-medium">404 Not Found</h1>
        <p>Your visited page not found. visit home page</p>
      </div>
    </div>
  );
};

export default NotFound;
