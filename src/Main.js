import { Icon } from '@iconify/react';
import React from "react";
import './App.css';




export default function MainContent() {
    return(
        <div className="py-md-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="mb-4 mb-xl-0 text-center text-md-start">
                        <h1 className="display-4 fw-bold mb-3 ls-sm ">Design a better
                             Website template 
                        </h1>
                        <p className="mb-4 lead">
                            Building your brand's Website and get detailed insights on how templates are
                            Created
                        </p>

                        <a href='https://www.youtube.com/watch?v=JRzWRZahOVU'
                            className="btn btn-success btn-lg display-5 px-4 mt-5 rounded-5">FREE DOWNLOAD</a>
                    </div>
                </div>
                <div className="offset-xl-1 col-xl-5 col-lg-6 col-md-12">
                        <div className="d-block mt-n5 text-center">
                            <a href='https://www.youtube.com/watch?v=JRzWRZahOVU' className='text-dark mt-5'><Icon icon="gg:play-button" className='display-3 border rounded-circle shadow-sm mt-5'/></a>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}