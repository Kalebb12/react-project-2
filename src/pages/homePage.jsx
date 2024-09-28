import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Products from "../components/products";

const HomePage = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Navbar/>
            <Banner/>
            <Products />
        </div>
    );
}
 
export default HomePage;