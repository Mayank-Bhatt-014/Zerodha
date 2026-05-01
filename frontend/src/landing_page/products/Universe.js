import React from "react";

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center mb-5 border-top p-4 ">
                <h1>The Zerodha Universe</h1>
                <p className="p-4"> Extend your trading experience even further with our partner platforms.</p>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-4 p-5">
                    <img src="media/images/smallcaseLogo.png" style={{ width: '60%', height: '40%' }} alt="Smallcase by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/streakLogo.png" style={{ width: '60%', height: '40%' }} alt="Streak by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/sensibullLogo.svg" style={{ width: '60%', height: '40%' }} alt="Sensibull by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Options trading platform</p>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-4 p-5">
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: '60%', height: '40%' }}  alt="Smallcase by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Thematic investment platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/goldenpiLogo.png" style={{ width: '60%', height: '40%' }} alt="GoldenPi by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/dittoLogo.png" style={{ width: '60%', height: '40%' }} alt="Ditto by Zerodha" className="mb-3" />
                    <p className="text-small text-muted mt-3">Options trading platform</p>
                </div>
            </div>
        </div>
    );
}

export default Universe;