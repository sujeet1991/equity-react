import React,{Component} from 'react';
import './tabmenu.css';

 class tabmenu extends Component{
     render(){
        return (
            <div className="equitytabox">
                <ul className="ultopbdr">
                    <li className="libox eqtab3 Selected">
                        <div className="eqinn">
                            <div className="eqcommonicon eqtabicon simdispblock"></div>
                            <div className="eqtxt simdispblock">
                            USER <span className="hide-in-mobile">DETAILS</span>
                            </div>
                        </div>
                    </li>
                    <li className="libox eqtab2 ">
                        <div className="eqinn">
                        <div className="eqcommonicon eqtabicon simdispblock"></div>
                        <div className="eqtxt simdispblock">BANK <span className="hide-in-mobile">DETAILS</span></div>
                        </div>
                    </li>
                    <li className="libox eqtab1 bdrrnil">
                        <div className="eqinn">
                            <div className="eqcommonicon eqtabicon simdispblock"></div>
                            <div className="eqtxt simdispblock">PERSONAL <span className="hide-in-mobile">DETAILS</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
     }
 
}
export default tabmenu;
