import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container mt-5 p-3">
            <div className="row text-center mb-5">
                <h1 className="mb-4">Technology</h1>
                <h3 className="text-muted mb-3">Sleek , modern and intuitive trading platforms</h3>
                <p> check out our <Link to="/" style={{textDecoration: "none"}}>investment offerings</Link></p>
            </div>
        </div>
    );
}

export default Hero;