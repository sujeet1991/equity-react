import React from 'react';
import './formcontainer.css';

export default function FormContainer(props) {
    return (
        <div className="equitytacontbox">
            <div className="equitytacontboxin">
                {props.children}
            </div>
           
        </div>
    )
}
