import React from "react";

function Rightsection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlayLink, appStoreLink}) {
    return (
        <div className="container  border-top mt-5 p-4">
            <div className="row">
                <div className="col-6 p-4 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="container">
                        <div className="row mb-4 fs-5 fw-bold">
                            <div className="col-6">
                                <a href={tryDemo}>Try Demo</a>

                            </div>
                            <div className="col-6">
                                <a href={learnMore}>Learn More</a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <a href={googlePlayLink} className="p-5"><img src="media/images/googlePlayBadge.svg" alt="Google Play" /></a>
                        <a href={appStoreLink} className="p-5"><img src="media/images/appstoreBadge.svg" alt="App Store" /></a>
                    </div>
                </div>
                <div className="col-6 p-4">
                    <img src={imageURL} /> {/* since imageURL is a prop , it is written in curly braces and js will replace it with the actual value of imageURL and as a string */}

                </div>
            </div>
        </div>
    );
}

export default Rightsection;