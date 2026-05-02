import React from "react";

function Hero() {
    return (
        <div className="container ">
            <div className="row mb-5  text-center border-bottom mt-5">
                <h1 className="fs-1"> Pricing </h1>
                <p className="p-4  fs-5 text-muted">Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row p-5 text-center mt-5">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 className="m-3" > Free Equity delivery </h1>
                    <p className="text-muted"> All equity delivery investments(NSE, BSE), are absolutely free - Zero brokerage </p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg"/>
                    <h1 className="m-3" > Intraday and F&O trades </h1>
                    <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intreaday trades across equity, currency and commodity trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg"/>
                    <h1 className="m-3" > Free Direct MF </h1>
                    <p className="text-muted"> All direct mutual fund investments are absolutely free - Zero brokerage </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;