import React from "react";

export default function ServicesAttributesPage (){

    return(
        <>
          <div class="card">
                        <div class=" cardHeaderContent card-header">
                            Services Attributes
                        </div>
                        <div class="card-body">
                            <div class="serviceBodyContainer  container overflow-hidden">
                                <div class="row gy-5">
                                    <div class=" col-xl-4 col-lg-4 col-sm-12 col-xs-12">
                                        <div className="servicesCol">
                                          Services name
                                            <select class=" serviceForm form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">Dubai Visa online</option>
                                                <option value="2">Singapure Visa Online</option>
                                                <option value="3">Vietnam Visa Online</option>
                                                <option value="4">Thiland Visa Online</option>
                                                <option value="5">Dubai Family Visa</option>
                                                <option value="6">Vietnam Visa Online</option>
                                                <option value="7">Malaysiya Visa Online</option>
                                                <option value="8">Sri Lanka Visa Online</option>
                                                <option value="9">UK Visa Online</option>
                                                <option value="10">US Visa Online</option>
                                                <option value="11">New Zealand Visa Online</option>
                                                <option value="12">Australia Visa</option>
                                                <option value="13">Qatar Visa</option>
                                                <option value="14">Egypt Visa Online</option>
                                                <option value="15">Turkey Visa Online</option>
                                                <option value="16">Turkey Visa</option>
                                                <option value="17">Japan Visa Online</option>
                                                <option value="18">Dubai Cruise Visa</option>
                                                <option value="19">Canada Visa</option>
                                                <option value="21">Shengen Visa</option>
                                                <option value="22">Oman Visa Online</option>
                                                <option value="23">Saudi Arab Visa Online</option>
                                                <option value="24">Indonesia Visa online</option>
                                                <option value="25">Philippines Visa online</option>
                                                <option value="26">Luxembourg Visa</option>
                                                <option value="27">Combodia Visa</option>
                                                <option value="28">Slovakiya Visa</option>
                                                <option value="29">Malta Visa</option>
                                                <option value="30">Cyprus Visa Online</option>
                                                <option value="31">Hungary Visa Online</option>
                                                <option value="32">Estonia Visa </option>
                                                <option value="33">Finland Visa</option>
                                                <option value="34">Austria Visa</option>
                                                <option value="35">Sweden Visa</option>
                                                <option value="36">Latvia Visa</option>
                                                <option value="37">Iceland Visa</option>
                                                <option value="38">Slovenia Visa</option>
                                                <option value="39">Israel Visa online</option>
                                                <option value="38">Portugal Visa</option>
                                                <option value="38">Denmark Visa</option>
                                                <option value="38">China Visa</option>
                                                <option value="38">Kenya Visa online</option>
                                                <option value="38">Azerbaijan Visa</option>
                                                <option value="5">Hong Kong Visa</option>
                                                <option value="37">Czech Republic Visa </option>
                                                <option value="38">Russia Visa</option>
                                                <option value="39">UAE Visa Extension</option>
                                                <option value="38">Bungladesh Visa Online</option>
                                                <option value="38">Bahrain Visa Online</option>
                                                <option value="38">Tanzania Visa Online</option>
                                                <option value="38">Italy Visa</option>
                                                <option value="38">France Visa</option>
                                                <option value="38">Norway Visa</option>
                                                <option value="38">Spain Visa</option>
                                                <option value="38">Netherlands Visa</option>
                                                <option value="38">Switzerland Visa</option>
                                                <option value="38">Greece Visa</option>
                                                <option value="38">Belgium Visa</option>
                                                
                                            </select>

                                        </div>
                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-sm-12 col-xs-12">
                                        <div className="servicesCol">
                                            Visa Price
                                            <input class="serviceForm form-control" type="text" placeholder="Default input" ></input>
                                        </div>

                                    </div>
                                    <div class=" col-xl-4 col-lg-4 col-sm-12 col-xs-12">
                                        <div className="servicesCol">
                                            <div class="mb-3">
                                                <input class="form-control" type="file" id="formFile"></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class=" col-xl-12 col-lg-12 col-sm-12 col-xs-12">
                                        <div class="servicesButtonPannel">
                                            <button type=" button" class=" servicesButton btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}