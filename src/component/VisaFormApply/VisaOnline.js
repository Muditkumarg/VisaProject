import React from "react"
import './VisaOnline.css'
import { useState } from "react"
import FooterPage from "../../Footer/footer"
import { BsCheckLg } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import 'react-calendar/dist/Calendar.css'
import { FiPhoneCall } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import axios from "axios";
import { useNavigate } from "react-router-dom"
export default function VisaOnlinePage() {

    const nevigate = useNavigate();

    // const initialState = { visatype: "0", adult: "1", child: "0" }
    const [travelData, setTravelData] = useState();
   

    const location = useLocation();
    const [packageData,setPackageData] = useState(location.state[1])
    const [bannerData,setBannerData] = useState({...location.state[0]})
    
    console.log(packageData)
    console.log(bannerData[0].servicename)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTravelData({ ...travelData, [name]: value })
    }

    const handleVisaSubmit = (e)=>{
        const id = e.target.getAttribute("id")
        console.log(id)
        axios.get(`http://localhost:4000/api/getservicepackagebyid/${id}`).then((res) => {
            nevigate('/firststepform', {state :res.data})

        })
    }
   
    

    return (
        <>
            <div className="paronama">
                <div class="paronamaPannel">
                    <img className="bannerStyle" src={`http://localhost:4000/uploads/${bannerData[0].countrybanner}`} alt="" />
                </div>
            </div>
            <div className="titlePannel">
                <div class="headingTitle">
                    <h2 >{bannerData[0].servicename}</h2>
                </div>

                <div className="dubaiContainer container">
                    <div class="dubaiVisaCardPannel card ">
                        <div class="card-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                        <div class=" row ">
                                            {packageData?.map((row) => {
                                                return (
                                                    <div class="cardCol col-xl-4 col-lg-4 col-md-4">
                                                        <div class="subCard card h-100">
                                                            <>
                                                                <div class="cardTitle0 card-title">{row.packageduration}</div>
                                                                <div class="cardTitle1 card-title">{row.packagetype}</div>
                                                                <div class="cardTitle2 card-title">Rs {row.packageprice}</div>
                                                                <ul className="middleBodycontainer">
                                                                    <li class="cardMiddleBody ">
                                                                        <BsCheckLg className="middleBodyIcon" /> {row.singleentry}
                                                                    </li>
                                                                    <li class="cardMiddleBody ">
                                                                        <BsCheckLg className="middleBodyIcon" /> {row.consulatefees}
                                                                    </li>
                                                                    <li class="cardMiddleBody ">
                                                                        <BsCheckLg className="middleBodyIcon" /> {row.servicecharge}
                                                                    </li>
                                                                    <li class="cardMiddleBody ">
                                                                        <BsCheckLg className="middleBodyIcon" /> {row.alltaxes}
                                                                    </li>
                                                                    <li class="cardMiddleBody ">
                                                                        <BsCheckLg className="middleBodyIcon" /> {row.insurance}
                                                                    </li>
                                                                </ul>
                                                                <button type="button" class="ApplyVisaBtn btn btn-primary" id = {row._id} onClick={handleVisaSubmit} >Apply</button>
                                                            </>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div className="row">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="applyVisaCard card">
                                                    {/* <div class="applyVisaCardBody card-body">
                                                        <h5 class="applyVisaTitle card-title">Apply Online</h5>

                                                        <select class="applyVisaSelect shadow-none form-select form-select-lg " name="visatype" aria-label=".form-select-lg example" onChange={handleChange}>
                                                            <option value="0" >Type of visa</option>
                                                            {location.state?.map((row) => {

                                                                return (<>
                                                                    <option value={[row.packageprice, row.packageduration, row.packagetype]}  >{row.packageduration} days {row.packagetype}</option>

                                                                </>)
                                                            })}
                                                        </select>
                                                        <label class="form-label">Travel on</label>
                                                        <input className="applyVisaDateSelect shadow-none form-select form-select-lg  " name="traveldate" type="date" onChange={handleChange}></input>
                                                        <label class="form-label">Travelers</label>
                                                        <div className="travelSelectPannel " >
                                                            <select class="travelSelect form-select shadow-none" aria-label="Default select example" name="adult" onChange={handleChange} >
                                                                
                                                                <option selected value="1">1 adult</option>
                                                                <option value="2">2 adults</option>
                                                                <option value="3">3 adults</option>
                                                                <option value="4">4 adults</option>
                                                                <option value="5">5 adults</option>
                                                                <option value="6">6 adults</option>
                                                                <option value="7">7 adults</option>
                                                                <option value="8">8 adults</option>
                                                                <option value="9">9 adults</option>
                                                            </select>
                                                            <select class="travelSelect form-select shadow-none" aria-label="Default select example" name="child" onChange={handleChange} >
                                                                <option selected value="0">0 children</option>
                                                                <option value="1">1 child</option>
                                                                <option value="2">2 children</option>
                                                                <option value="3">3 children</option>
                                                                <option value="4">4 children</option>
                                                                <option value="5">5 children</option>
                                                                <option value="6">6 children</option>
                                                                <option value="7">7 children</option>
                                                                <option value="8">8 children</option>
                                                            </select>
                                                        </div>
                                                        {travelData.visatype === "0" ?
                                                            < button type="button" class="travelApplyButton btn btn-warning">Apply</button>:
                                                    <button type="button" class="travelApplyButton btn btn-warning">Apply from {calculation}</button>
}
                                                </div> */}
                                                <ul class="applyVisaBottom list-group list-group-flush">
                                                    {/* <li class=" list-group-item"></li> */}
                                                    <li class="callList list-group-item">

                                                        <div class="applyVisaBtmRow row">
                                                            <div class="callCol1 col col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-2">
                                                                <FiPhoneCall className="callIcon" />
                                                            </div>
                                                            <div class="callCol2 col col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 ">

                                                                <p className="colPara" >Talk to our Travel Experts</p>
                                                                <div>
                                                                    <span className="applyVisaSpan"  >India  </span>
                                                                    <a className="callLink" href="tel:05744154172">05744154172</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="applyVisaBtmRow row">
                                                            <div class="callCol1 col col-xl-4 col-lg-4 col-md-2 col-sm-2 col-xs-2">
                                                                <BsWhatsapp className="callIcon" />
                                                            </div>
                                                            <div class="callCol2 col col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 ">
                                                                <p className="colPara" >Get your Visa on WhatsApp</p>
                                                                <div className="whataAppPannel">
                                                                    <span className="applyVisaSpan"  >India  </span>
                                                                    <a className="callLink" href="tel:057441">09897154172</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div className="support">
                                                            <h6 className="supportHeading" >Support</h6>
                                                            <p className="timePannelPara" >Call centre timings:</p>
                                                            <div className="timeContent">Monday to Sunday -
                                                                <p className="timePara" > 9AM to 7PM</p>

                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                </ul>
                                               
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="headingContent" >Documents required for Dubai visa application</div>
                        <ul className="doccumentListPannel">
                            <li className="doccumentList" >Scanned colour copy of your pan card</li>
                            <li className="doccumentList">Scanned colour copy of the first and last page of your passport</li>
                            <li className="doccumentList">The passport should be valid for at least 6 months from the date of return in India, with a minimum of two blank pages</li>
                            <li className="doccumentList">Scanned colour copy of your passport-size photograph taken against a white background</li>
                            <li className="doccumentList">Confirmed return air ticket (not mandatory for application)</li>
                        </ul>
                        <div className="headingContent" >Additional documents required for Dubai Transit visa application</div>
                        <ul className="doccumentListPannel">
                            <li className="doccumentList" >Confirmed return air tickets</li>
                            <li className="doccumentList">Visa copy of the country you are travelling to</li>
                            <li className="doccumentList">Birth Certificate for child (age below 18 years)</li>

                        </ul>
                        <div className="headingContent" >Note:</div>
                        <ul className="doccumentListPannel">
                            <li className="doccumentList" >We do not provide Dubai work / job / employment visa</li>
                            <li className="doccumentList">Medical insurance is compulsory for travel to the UAE</li>
                            <li className="doccumentList">Dubai family visa price consists of 2 Adults & 1 Children (Below 18 yrs) travelling together</li>
                            <li className="doccumentList">Dubai express tourist visa price is valid only for the applications received during office working hours and visa will be processed only after receiving full payment. </li>
                            <li className="doccumentList">All the optional Dubai visa related services would be available at an additional cost. Get in touch with our travel experts who will assist you with your booking. </li>
                            <li className="doccumentList">Dubai transit visa price does not include OK to Board fees and is not applicable if the itinerary is India-Dubai-India</li>
                            <li className="doccumentList">Dubai visa price exclude OK to Board charges</li>
                            <li className="doccumentList">Dubai tourist visa for Indians is valid for 58 days; Dubai transit visa is valid for 30 days</li>
                            <li className="doccumentList">Dubai Visa for Indian childrens below 18 years of age have to provide passport copies of their parents.</li>
                            <li className="doccumentList">The Consulate may ask for additional documents if required.</li>
                            <li className="doccumentList">Flight ticket copies have to provided 48 hours prior to departure for processing your Ok to Board.</li>
                            <li className="doccumentList">A scanned copy of your documents should be in .jpeg format.</li>
                        </ul>


                    </div>

                </div>
                <FooterPage />
            </div>
         
        </div >
        </>
    )

}