import { Outlet } from "react-router-dom";
import NavBar from "../Sharate/NavBar";


const Root = () => {
    return (
        <div className="font-lato">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;