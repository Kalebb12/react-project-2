import Banner from "../components/banner";
import Navbar from "../components/navbar";

const HomePage = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Navbar/>
            <Banner/>
        </div>
    );
}
 
export default HomePage;