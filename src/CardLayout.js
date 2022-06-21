import React from "react";
import { Icon } from '@iconify/react';



export default function CardLayout(){
    return(
        <div className="container shadow-sm p-5">
            <div className="row gy-3">
                <div className="col-12 col-md-4">
                    <div className="card border-0">
                        <Icon icon="emojione-monotone:light-bulb" className='display-1' />
                        <div className='title'>
                            <h5>Intuitive Thinking</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card border-0">
                    <Icon icon="la:carrot" className='display-1'/>
                    <div className='title'>
                            <h5>Orange for Carrots</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="card border-0">
                    <Icon icon="ph:infinity-thin" className='display-1'/>
                    <div className='title'>
                            <h5>Infinite Possibilities</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}