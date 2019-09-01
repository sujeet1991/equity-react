import React from 'react';
import Select from 'react-select';
import ButtonCom from '../ButtonCom/BtnCom';
import Aux from '../../HOC/aux';
const bankDetail=(props)=>{
    return(
        <Aux>
            <div className="eqrow">
                <div className="selttwfirst simdispblock">
                    <div className="selttwocln1 simdispblock">
                        <div className="seltwfirstin">Select A BANK ACCOUNT TYPE</div> 
                    </div>
                    <div className="selttwocln2 simdispblock">
                        <div className="txtlabbox simdispblock brd-r-1">
                            <div className="txtlabin">
                                <div className="radio radio-info radio-inline">
                                    <input type="radio" name="radio4" id="radio8" value="option4" className="brdcheck"/>
                                    <label htmlFor="radio8">
                                    SAVING
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="txtlabbox simdispblock bgN">
                            <div className="txtlabin">
                                <div className="radio radio-info radio-inline">
                                    <input type="radio" name="radio4" id="radio9" value="option4" className="brdcheck"/>
                                    <label htmlFor="radio9">
                                        CURRENT
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* next */}
            <div className="eqrow">
                <div className="wid74">
                <Select className="selectopn"
                        name="occupation"
                        placeholder="SELECT BANK"
                        onChange={props.handleChange}
                        options={[{value:"ICICI",label:"ICICI"},{value:"SBI",label:"SBI"}]}
                    />
                </div>
                <div className="wid24 clngap ifscbtn">
                    <button type="button" className="btnifsc" data-popup-target="#step1" >Get IFSC Code</button>
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">IFSC CODE</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="IFSC CODE" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">MICR CODE</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="MICR CODE" />  
                </div>
            </div>
            {/* next */}
            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">SELECT BANK CITY</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="SELECT BANK CITY" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">SELECT BANK BRANCH</label>
                    <input className="input input__field--hoshi2" type="text"  disabled={true} placeholder="SELECT BANK BRANCH" />  
                </div>
            </div>
            {/* next */}
           <div className="eqrow clearfix">
                <label className="textLabel">BANK ADDRESS </label>
                <textarea className="input input__field--hoshi2 txtarea"></textarea>
            </div> 
            {/* next */}
            <div className="eqrow">
                <div className="w100pc simdispblock ">
                    <label className="textLabel">NAME AS ON BANK</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="ENTER NAME AS ON BANK" />  
                </div>
            </div>   
            {/* next */}

            <div className="eqrow">
                <div className="cln48pc simdispblock ">
                    <label className="textLabel">BANK ACCOUNT NUMBER</label>
                    <input className="input input__field--hoshi2" type="text"  placeholder="ENTER BANK ACCOUNT NUMBER" />  
                </div>
                <div className="cln48pc simdispblock clngap marg-t-15">
                    <label className="textLabel">RETYPE BANK ACCOUNT NUMBER</label>
                    <input className="input input__field--hoshi2" type="text"   placeholder="ReEnter Bank Account number" />  
                </div>
            </div>
            {/* next */}
            <div className="eqrow clearfix">
                 <div className="verificationPanel">
                     <div className="col-panel">
                     <p><img src={require('./images/accountverifiedicon.png')} alt="accountverification"/></p>
                    
                     <p className="copytxt">Get your Account Instantely
                                      Verified</p>
                      <span className="recomendtag"><img src={require('./images/recommendtag.png')} alt="recommendtag"/></span>     
                      <div className="canceledpanel">
                          <p className="failed">
                              <img src={require('./images/cross.png')} alt="cross"/>
                              </p>
                          <span className="statusmsg">Failed</span><button type="button" className="retrybtn">Retry</button></div>           
                     </div>
                </div>   
                <p className="txtdivide">OR</p>
               <div className="col-panel">
                <p><img src={require('./images/chequeicon.png')} alt="chequeicon"/></p>
                <p className="copytxt">Courier a cheque for offline
                    verification</p>
                <span className="iavstatus"><img src={require('./images/successsmall.png')} alt="successsmall"/></span>  
               </div> 
                
            </div>
            {/* next */}
            <ButtonCom btnName="Continue"/>
        </Aux>
    )
}

export default bankDetail;