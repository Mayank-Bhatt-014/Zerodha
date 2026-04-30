import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row mt-5 p-5 mb-5 text-center">
                <h1> People </h1>
            </div>

            <div className="row mt-5  p-5  mb-5">
                <div className="col-6 p-4 text-center text-muted">
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius: "100%", width: "70%"}} />
                    <h4 className="mt-5 mb-2">Nithin Kamath</h4>
                    <h5> Founder , CEO</h5>
                </div>
                <div className="col-6 text-muted p-4">
                    <p className="p-3" style={{lineHeight: "35px"}}>
                        Nithin bootstrapped and founded Zerodha in 2019 to overcome the hurdles he faced during his decade long stint as a trader.Today, Zerodha has changed the landscape of int the India stock Broking industry.
                    </p>
                    <p className="p-3" style={{lineHeight: "35px"}}>
                        He is a member of the SEBI secondary market advisory committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className="p-3" style={{lineHeight: "35px"}}>
                       Playing basketball is his zen.
                       <br/>
                    </p>
                    <p className="p-3" style={{lineHeight: "35px"}}>
                        Connect on HomePage / TradingQnA / Twitter
                    </p>

                </div>
            </div>
        </div>

    );
}

export default Team;