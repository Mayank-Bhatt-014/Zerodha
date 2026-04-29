import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 p-4">
        <div className="row mt-5">
            <div className="col-4">
                <h1 className="mb-4">Unbeatable Pricing</h1>
                <p className="mb-3">We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges.</p>
                <a href="#" className="btn btn-primary">See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-2"></div> {/* for the spacing btw 2 columns , yes we can use margin or padding but this is easier */}
            <div className="col-6">
                <div className="row text-center">
                    <div className="col-6 p-4 border">
                        <h1 className="mb-3"> ₹0</h1>
                        <p> Free equity delivery and <br/> direct mutual funds</p>
                    </div>
                    <div className="col-6 p-4 border">
                        <h1 className="mb-3"> ₹20</h1>
                        <p> Intraday and F&O</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}      

export default Pricing;