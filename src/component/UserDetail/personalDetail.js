import React from 'react';

import ButtonCom from '../ButtonCom/BtnCom';
import Aux from '../../HOC/aux';
const personalDetail=(props)=>{
    return(
        <Aux>
            
            
            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">ENTER  PAN</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="ENTER A Valid PAN" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">Date of Birth</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="Enter DOB" />  
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="w100pc simdispblock ">
                    <label className="textLabel">NAME AS ON PAN</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="ENTER NAME as on pan card" />  
                </div>
            </div>   
            {/* next */}

            <div className="eqrow">
                <div className="twoclnwfirst w100pc ">
                    <div className="twoclnsubcln1big simdispblock">
                        <div className="twoclnwfirstin">DO YOU HAVE AADHAR NO.</div>
                    </div>
                    <div className="twoclnsubcln2small  simdispblock">
                        <div className="yesnobox simdispblock bdrnil">
                            <div className="yesnoboxin brd-lft-0">
                                <div className="checklft simdispblock">
                                    <div className="radio radio-info radio-inline">
                                        <input type="radio" name="politicallyExposed" id="radio9" value="option1" className="brdcheck"/>   
                                        <label htmlFor="radio9">
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
                                        <input type="radio" name="politicallyExposed" id="radio10" value="option1" className="brdcheck"/>   
                                        <label htmlFor="radio10">
                                                NO
                                              </label>  
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="notebx" style={{'display':'none'}}>
                    <div className="notebxin">
                        <div className="simdispblock">
                            <div className="padt1">
                                <input name="" type="checkbox"   id="hereby" defaultChecked={true}/>
                            </div>
                        </div>
                        <div className="simdispblock w95pc marl5">
                        <label id="aadharhereby" htmlFor="hereby">I hereby agree to authenticate myself using Aadhaar through eSign Service and also confirm to affix my Signature (generated through eSign DSC) on the Equity Account Opening application form.</label>
                        </div>
                    </div>
                </div>
                <div className="notebx" style={{'display':'none'}}>
                    <div className="notebxin">
                        
                        <div className="simdispblock w95pc marl5">
                        <label id="aadharhereby" htmlFor="hereby">I hereby agree to authenticate myself using Aadhaar through eSign Service and also confirm to affix my Signature (generated through eSign DSC) on the Equity Account Opening application form.</label>
                        </div>
                    </div>
                </div>
            </div>
{/* next */}
          <div className="eqrow clearfix">
            <div className="inputfield clearfix">
                <div className="inputhead clearfix">
                <p className="headtxt"> Enter your AADHAR NO.
                    <span className="fieldtxt aadhaar_display"></span> 
                 </p>
                    <span id="" className="status unverified aadhaarverified"> 
                        <span id="" className="tooltippanel">Unverified</span>
                    </span>  
                    <p className="editurl editaadhaarpanel"> <span className="bluelnk edit_aadhaarpanel">EDIT</span><span id=""> | <span className="bluelnk" id="">RE-SEND OTP</span></span> </p> 
                    <div className="clear"></div>    
                </div>
                <div className="inputfldpanel aadhaarpanel">
                    <input type="text" className="inputaadharfld only_d" maxLength="12" name="aadhaar_number"    id="" placeholder="Enter Your Aadhar Here" />
                    <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'none'}} id="" value="VERIFY"></input>
                    <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter aadhar no.</span>
                </div>
                <div className="inputfldpanel aadhaarpanelotp" style={{'display':'none'}}>
                    <input type="text" className="inputaadharfld only_d" id="" placeholder="Enter OTP Here" maxLength="6"/>
                 <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'block'}} id="" value="SUBMIT OTP"/>
                <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter OTP</span>

                </div>

            </div>
            </div>  
            {/* next */}
            <div className="eqrow">
                <div className="w100pc simdispblock ">
                    <label className="textLabel">FATHER / SPOUSE NAME</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="FATHER / SPOUSE NAME" />  
                </div>
            </div>   
            {/* next */}

            <div className="eqrow clearfix">
            <div className="inputfield clearfix">
                <div className="inputhead clearfix">
                <p className="headtxt"> Enter your email id 
                    <span className="fieldtxt aadhaar_display"></span> 
                 </p>
                    <span id="" className="status unverified aadhaarverified"> 
                        <span id="" className="tooltippanel">Unverified</span>
                    </span>  
                    <p className="editurl editaadhaarpanel"> <span className="bluelnk edit_aadhaarpanel">EDIT</span><span id=""> | <span className="bluelnk" id="">RE-SEND OTP</span></span> </p> 
                    <div className="clear"></div>    
                </div>
                <div className="inputfldpanel aadhaarpanel">
                    <input type="text" className="inputaadharfld only_d" maxLength="12" name="aadhaar_number"    id="" placeholder="Enter Your Email Id Here" />
                    <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'none'}} id="aadhaar_submit" value="VERIFY"></input>
                    <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter aadhar no.</span>
                </div>
                <div className="inputfldpanel aadhaarpanelotp" style={{'display':'none'}}>
                    <input type="text" className="inputaadharfld only_d" id="" placeholder="Enter Email OTP Here" maxLength="6"/>
                 <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'block'}} id="" value="SUBMIT OTP"/>
                <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter OTP</span>

                </div>

            </div>
            </div>  
            {/* next */}

            <div className="eqrow clearfix">
            <div className="inputfield clearfix">
                <div className="inputhead clearfix">
                <p className="headtxt">  Enter your mobile no. 
                    <span className="fieldtxt aadhaar_display"></span> 
                 </p>
                    <span id="" className="status unverified aadhaarverified"> 
                        <span id="" className="tooltippanel">Unverified</span>
                    </span>  
                    <p className="editurl editaadhaarpanel"> <span className="bluelnk edit_aadhaarpanel">EDIT</span><span id=""> | <span className="bluelnk" id="">RE-SEND OTP</span></span> </p> 
                    <div className="clear"></div>    
                </div>
                <div className="inputfldpanel aadhaarpanel">
                    <input type="text" className="inputaadharfld only_d" maxLength="10" name="aadhaar_number"    id="" placeholder="Enter Your Mobile Number Here" />
                    <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'none'}} id="aadhaar_submit" value="VERIFY"></input>
                    <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter aadhar no.</span>
                </div>
                <div className="inputfldpanel aadhaarpanelotp" style={{'display':'none'}}>
                    <input type="text" className="inputaadharfld only_d" id="" placeholder="Enter Email OTP Here" maxLength="6"/>
                 <input type="button" className="btnoverinput aadhaarbtn" style={{'display':'block'}} id="" value="SUBMIT OTP"/>
                <span className="tooltip1 field_er error" style={{'display':'none'}}>Please enter OTP</span>

                </div>

            </div>
            </div>  
            {/* next */}
            <div className="eqrow">
                <div className="w50pc simdispblock radiobx">
                    <div className="clearfix">
                        <span className="select_gender_female">
                            <input type="radio" name="gender" id="female" className="radio2 "/>
                            <label htmlFor="female">&nbsp;</label>
                        </span>
                        <span className="select_gender_male">
                          <input type="radio" name="gender" id="male" className="radio2"/>
                            <label htmlFor="male">&nbsp;</label>
                        </span>
                        <label className="genderin1" htmlFor="input-6"> <span className="">SELECT GENDER</span> </label>
                    </div>
                </div>
                <div className="cln48pc simdispblock marg-t-15">
                    <div className="clearfix">
                    <span className="select_marital_single marital1">
                        <input type="radio" name="marital" id="single" className="radio2" />
                        <label htmlFor="single">&nbsp;</label>
                    </span> 
                    <span className="select_marital_married marital2">
                        <input type="radio" name="marital" id="married" className="radio2"/>
                        <label htmlFor="married">&nbsp;</label>
                    </span>
                    <label className="genderin2" htmlFor="input-6">
                    <span className="">MARITAL STATUS</span> </label>
                    </div>
                </div>
                
            </div>
           {/* next */}
           <div className="eqrow">
                <div className=" w100pc simdispblock aadharcol">
                    <div className="twoclnsubcln1 simdispblock">
                    <div className="twoclnwfirstin">Nationality</div>
                    </div>
                    <div className="twoclnsubcln2 simdispblock ">
                    <div className="yesnobox simdispblock">
                        <div className="yesnoboxin brd-l-0">
                        <div className="radio radio-info radio-inline">
                            <input type="radio" name="nationality" id="indian" value="indian" className="brdcheck"/>
                            <label htmlFor="indian">
                            Indian
                            </label>
                            
                        </div>
                        </div>
                    </div>
                    <div className="yesnobox simdispblock">
                        <div className="yesnoboxin">
                        <div className="radio radio-info radio-inline">
                            <input type="radio" name="nationality" id="others" value="others" className="brdcheck"/>
                            <label htmlFor="others">
                            Others
                            </label>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
           {/* next */}
           <div className="eqrow">
                <div className="w100pc simdispblock aadharcol">
                    <div className="twoclnsubcln1 statushead simdispblock">
                        <div class="twoclnwfirstin">Status</div>
                    </div>
                    <div className="twoclnsubcln2 simdispblock statuspanel">
                        <div className="yesnobox simdispblock">
                            <div className="yesnoboxin brd-l-0">
                                <div className="radio radio-info radio-inline">
                                    <input type="radio" name="resident_status" id="rindividual" value="rindividual" className="brdcheck"/>
                                    <label htmlFor="rindividual">
                                    RESIDENT <span className="hide-in-mobile">INDIVIDUAL</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="yesnobox simdispblock">
                            <div className="yesnoboxin">
                                <div className="radio radio-info radio-inline">
                                    <input type="radio" name="resident_status" id="nresident" value="nresident" className="brdcheck"/>
                                    <label htmlFor="nresident">
                                     NON RESIDENT
                                </label>
                                </div>
                            </div>
                        </div>

                        <div className="yesnobox simdispblock lastcol">
                            <div className="yesnoboxin">
                            <div className="radio radio-info radio-inline">
                                <input type="radio" name="resident_status" id="fnational" value="fnational" className="brdcheck"/>
                                <label htmlFor="fnational">
                                Foreign National
                                </label>
                            </div>
                            </div>
                         
                        </div>




                    </div>
                </div>
           </div>
           {/* next */}

           <div className="eqrow clearfix">
                <label className="textLabel">COMMUNICATION ADDRESS </label>
                <textarea className="input input__field--hoshi2 txtarea"></textarea>
            </div> 
            {/* next */}
            

            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">PinCode</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="Enter your PinCode" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">city</label>
                    <input className="input input__field--hoshi2" type="text"   placeholder="city" />  
                </div>
            </div>
            {/* next */}
            <div className="eqrow clearfix">
                <div className="w100pc simdispblock ">
                    <label className="textLabel">State</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="Enter State" />  
                </div>
                
            </div>
            <div class="chckboxrow">
                <div className="simdispblock">
                        <input name="" id="paddress" type="checkbox" value=""/>
                </div>
                <div className="simdispblock chckmr">
                    <label for="paddress">My permanent address is same as above</label>
                </div>
            </div>
            {/* next */}
            <div className="eqrow clearfix">
                <label className="textLabel">COMMUNICATION ADDRESS </label>
                <textarea className="input input__field--hoshi2 txtarea"></textarea>
            </div> 
            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">PinCode</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="Enter your PinCode" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">city</label>
                    <input className="input input__field--hoshi2" type="text"   placeholder="city" />  
                </div>
            </div>
            {/* next */}
            <div className="eqrow clearfix">
                <div className="w100pc simdispblock ">
                    <label className="textLabel">State</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="Enter State" />  
                </div>
                
            </div>
            {/* next */}
            <ButtonCom btnName="Review & submit now"/>
        </Aux>
    )
}

export default personalDetail;