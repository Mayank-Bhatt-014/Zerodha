import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
        <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Home image" className="mb-5" />
                <h1>Invest in Everything</h1>
                <p>Join millions of investors who trust us to grow their wealth. Sign up now and take control of your financial future!</p>
                <button className="btn btn-primary p-2 fs-5" style={{width:"20%" , margin:"0 auto"}}>Get Started</button>
                
        </div>
    </div>

  );
}

export default Hero;