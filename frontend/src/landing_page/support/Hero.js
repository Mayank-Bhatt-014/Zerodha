import React from "react";

function Hero() {
    return (
        <div className="container-fluid" id="support-hero" style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
            <div className="p-5  mb-2" id="supportWrapper">
                <h3 className="fs-1 p-2">Support Portal</h3>
                <button className="btn btn-primary"><a href="" style={{ color: "white", textDecoration: "none" }}>My Tickets</a></button>
            </div>
            <div className="row p-5">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 p-3 text-center fs-5" type="search" placeholder="How do i open my account? , how do i activate F&O..." aria-label="Search" style={{width: "80%" , display: "inline"}}/>
                        <button className="btn btn-outline-success my-2 my-sm-0 m-5 p-3" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Hero;