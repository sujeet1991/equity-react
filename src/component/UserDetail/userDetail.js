import React from 'react';
import Select from 'react-select';
import Aux from '../../HOC/aux';
import ButtonCom from '../ButtonCom/BtnCom';
import './userDetail.css';

const userDetail=(props)=>{
    const options = [
        { value: 'Mumbai', label: 'Mumbai' },
        { value: 'Delhi', label: 'Delhi' },
        { value: 'Pune', label: 'pune' },
      ];
    return (
        <Aux>
            <div className="eqrow">
                <div className="cln48pc disinline">
                    <Select className="selectopn"
                        name="income"
                        placeholder="INCOME RANGE (P.A)"
                        onChange={props.handleChange}
                        options={options}
                    />
                </div>
                <div className="cln48pc disinline clngap">
                    <Select className="selectopn"
                        name="occupation"
                        placeholder="SELECT OCCUPATION"
                        onChange={props.handleChange}
                        options={[{value:"PROFESSION",label:"PROFESSION"},{value:"BUSINESS",label:"BUSINESS"}]}
                    />
                </div>


            </div>
            {/* next */}
            <div className="eqrow">
            <Select className="selectopn"
                        name="occupation"
                        placeholder="SELECT ACCOUNT TYPE"
                        onChange={props.handleChange}
                        options={[{value:"Saving",label:"Saving"},{value:"Current",label:"Current"}]}
                    />
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="twoclnwfirst w100pc ">
                    <div className="twoclnsubcln1big simdispblock">
                        <div className="twoclnwfirstin">ARE YOU POLITICALLY EXPOSED PERSON?</div>
                    </div>
                    <div className="twoclnsubcln2small  simdispblock">
                        <div className="yesnobox simdispblock bdrnil">
                            <div className="yesnoboxin brd-lft-0">
                                <div className="checklft simdispblock">
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="politicallyExposed" id="radio1" value="option1" className="brdcheck"/>   
                                        <label htmlFor="radio1">
                                                Yes
                                              </label>  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="yesnobox simdispblock bdrnil">
                            <div className="yesnoboxin brd-lft-0">
                                <div className="checklft simdispblock">
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="politicallyExposed" id="radio2" value="option1" className="brdcheck"/>   
                                        <label htmlFor="radio2">
                                                NO
                                              </label>  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="twoclnwfirst w100pc ">
                    <div className="twoclnsubcln1big simdispblock">
                        <div className="twoclnwfirstin">number OF YEARS OF INVESTMENT/TRADING EXPERIENCE</div>
                    </div>
                    <div className="twoclnsubcln2small simdispblock">
                        <div className="selectpanel borderleft-one">
                        <Select className="selectopn removeborder"
                        name="tradingYear"
                        placeholder=""
                        onChange={props.handleChange}
                        options={[{value:"2",label:"3"},{value:"3",label:"3"}]}
                    />
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="twoclnwfirst w100pc packlist">
                    <div className="seltwfirstin">
                        CHOOSE YOUR ACCOUNT OPENING STARTER PACK <span className="bluelink"> (View Details)</span>
                    </div>
                    <div className="packpanel">
                        <div>
                            <ul className="radiolist">
                                <li>
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="radio2" id="radio3" value="option2" className="brdcheck"/>
                                        <label htmlFor="radio3">
                                        BASIC <span className="hide-in-mobile">PLAN</span> <span className="redtxt">(Free)</span>
                                        </label>

                                    </div>

                                </li>
                                <li>
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="radio2" id="radio4" value="option2" className="brdcheck"/>
                                        <label htmlFor="radio4">
                                        PREMIUM <span className="hide-in-mobile">PACK</span> <span className="redtxt">(Rs.999)</span>
                                        </label>

                                    </div>

                                </li>
                                <li>
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="radio2" id="radio5" value="option2" className="brdcheck"/>
                                        <label htmlFor="radio5">
                                        PREMIUM PLUS <span className="hide-in-mobile">PACK</span> <span className="redtxt">(Rs.1999)</span>
                                        </label>

                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="twoclnwfirst w100pc packlist">
                    <div className="seltwfirstin">
                    Select Tariff <span className="bluelink"> (View Details)</span>
                    </div>
                    <div className="packpanel">
                        <div>
                            <ul className="radiolist">
                                <li>
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="radio2" id="radio6" value="option2" className="brdcheck"/>
                                        <label htmlFor="radio6">
                                              BSDA <br className="hide-in-desktop"/><span className="lightcolor">(BASIC SERVIE DEMAT ACCOUNT)</span>
                                        </label>

                                    </div>

                                </li>
                                <li>
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="radio7" id="radio7" value="option2" className="brdcheck"/>
                                        <label htmlFor="radio7">
                                        PREMIUM <span className="hide-in-mobile">PACK</span> <span className="redtxt">(Rs.999)</span>
                                        </label>

                                    </div>

                                </li>
                               
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            {/* next */}
            <ButtonCom btnName="Continue"/>
        </Aux>
    )
}

export default userDetail
