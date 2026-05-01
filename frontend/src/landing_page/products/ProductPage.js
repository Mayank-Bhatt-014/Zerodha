import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";

function ProductPage() {
    return (
        <>
            <Hero />
            <Leftsection imageURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fastt trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly across all your devices - web, mobile, and tablet."
                tryDemo="#"
                learnMore="#"
                googlePlayLink="#"
                appStoreLink="#"
            />
            <Rightsection imageURL="media/images/console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                tryDemo="#"
                learnMore="#"
                googlePlayLink="#"
                appStoreLink="#" />
            <Leftsection imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="#"
                learnMore="#"
                googlePlayLink="#"
                appStoreLink="#"
            />
            <Rightsection imageURL="media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlayLink="#"
                appStoreLink="#" />
            <Leftsection imageURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="#"
                learnMore="#"
                googlePlayLink="#"
                appStoreLink="#"
            />
            <p className="text-center mt-5 mb-5">
                Want to know more about our technology stack? Check out the Zerodha.tech
                blog.
            </p>
            <Universe />
        </>
    );
}

export default ProductPage;