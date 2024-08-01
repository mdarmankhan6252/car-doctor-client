import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <Nav/>
            <Outlet></Outlet>
            <Footer/>         
        </div>
    );
};

export default Root;