import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center">
            <h1 className="text-5xl">Opps sorry !! 404 Error </h1><br />
            <h4 className="text-3xl">Page not found</h4>
            <Link to='/'><button className="btn btn-warning">Go Home</button></Link>
        </div>
    );
};

export default Error;