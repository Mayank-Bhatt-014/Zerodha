import React from 'react';

function Education() {
    return(
        <div className="container mt-5 p-4">
            <div className="row mt-5">
                <div className="col-6">
                    <img src='media/images/education.svg' />
                
                </div>
                <div className="col-6">
                    <h1 className='mb-3'> Free and open market education</h1>
                    <p className='mb-3'>Varsity , the largest online stock market education book in the wordl covering everything from the basics to advanced strategies.</p>

                    <a href="#"  style={{textDecoration: "none"}} >Explore Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-3 mt-5'>Trading Q&A . the most active trading and investment community in India for ll your market related queries.</p>

                    <a href="#" style={{textDecoration: "none"}} >Trading Q&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        
    );
}

export default Education;