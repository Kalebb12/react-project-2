import Banner from "../components/banner";
import Navbar from "../components/navbar";
import ProductList from "../components/productList";

const HomePage = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Navbar/>
            <Banner/>
            <ProductList />
        </div>
    );
}
 
export default HomePage;