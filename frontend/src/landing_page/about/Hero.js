import React from "react";

function Hero() {
    return (
        <div className="container">
            <div className="row mt-5 p-5 mb-5">
                <h1 className="fs-3 text-center">We pioneered the discount broking model in India.<br/> Now, we are breaking ground with our technology.</h1>
            </div>

             <div className="row mt-5 border-top p-5 border-bottom mb-5">
                <div className="col-6 text-muted p-4">
                    <p>
                        We kick-started operation on the 15th of August, 2010. with the goal of breaking all barriers that traders and investores face in india in termms of cost , suppost , and technology. we name the company Zerodha, which is a combination of the words Zero and Rodha (which means barrier in Sanskrit)
                    </p>
                    <p>
                        Today, our disruptive priciing models and in-house technology have made us the biggest stock broker in india.
                    </p>
                    <p>
                        Over 1+ Crore clients place millions of orders everyday through our powerful ecosystem of investment platforms, contributing over 15% of all indian retail trading volumes.
                    </p>
                </div>
                <div className="col-6 text-muted p-4">
                    <p>
                        In addition, we run a number of popular open online educational initiatives, including Varsity, the largest online stock market education book in the world covering everything from the basics to advanced strategies, and Trading Q&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <p>
                        Rainmatter, our fintech incubator, has funded and mentored over 100 startups in the financial services space, with a focus on building products that can be integrated into our ecosystem.
                    </p>
                    <p>
                        With a customer-first approach, we have built a strong community of traders and investors who trust us with their money. We are committed to providing the best possible experience for our clients and helping them achieve their financial goals.
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Hero;