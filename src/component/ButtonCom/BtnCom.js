import React from 'react';
import Aux from '../../HOC/aux';
import './BtnCom.css';

const BtnCom =(props)=>{
    return(
        <Aux>
            <div className="btnrowbox">
                <input type="button" className="btnsubmit btnbankdet" value={props.btnName} tabIndex="21"/>
            </div>
            <div className="lasttext"> By Clicking Review &amp; Submit button "I herby authorize Aditya Birla Money Limited (ABML) to share my account and balance details / transaction information based on the client code mapped through a secured network without further authentication with Aditya Birla Customer Service Limited (ABCSL) for the purpose of or in connection with servicing matters including but not limited to marketing, cross selling, promotions, generating, reports or for providing aggregation services via myuniverse.co.in platform". </div>
        </Aux>
    )
}
export default BtnCom