import React from 'react';
import './container.css';

const container=(props)=>{
    return (
        <div className="equityform clearfix">
            {props.children}
        </div>
    )
}
export default container;
