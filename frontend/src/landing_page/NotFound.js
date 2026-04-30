import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container p-5 mt-5 mb-5">
            <div className="row text-center mb-4">
                <h1 className="mt-5">404 Not found</h1>
                <p className="mb-5 mt-3">Sorry, the page you are looking for does not exist.</p>
                <Link to="/"><button className="btn btn-primary p-2 fs-5 mb-5" style={{ width: "20%", margin: "0 auto" }}>Go back home</button></Link>
            </div>
        </div>
    );
}

export default NotFound;