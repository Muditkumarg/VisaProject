import { useEffect, useState } from "react";
import ReadMoreData from './ReadMoreData.json'
import './FirstStep.css'
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function StepOne() {

  const nevigate = useNavigate();
  const location = useLocation();

  const [dataFromVisaPage, setDataFromVisaPage] = useState(location.state)
  const [readMore, setReadMore] = useState(ReadMoreData);
  const [readMoreButton, setReadMoreButton] = useState(false);
  const [offerCodevalue, setOfferCodeValue] = useState("");
  const [businessGst, setBusinessGst] = useState(false);
  const [error,setError] = useState({});

  const [signupData,setSignUpData] = useState({
    email:" ",
    contactnumber:" "
  })

  const handleSinUpChange=(e)=>{
    const { name, value } = e.target;
    setSignUpData({...signupData,[name]:value})
     setData({...data,[name]:value})
  }

 
  const [data, setData] = useState({
    applyBy:"User",
    emailApplyMember:"",
    status:"Panding",
    titleadult1: "", titleadult2: "", titleadult3: "", titleadult4: "", titleadult5: "", titleadult6: "", titleadult7: "", titleadult8: "", titleadult9: "",
    firstnameadult1: "", firstnameadult2: "", firstnameadult3: "", firstnameadult4: "", firstnameadult5: "", firstnameadult6: "", firstnameadult7: "", firstnameadult8: "", firstnameadult9: "",
    lastnameadult1: "", lastnameadult2: "", lastnameadult3: "", lastnameadult4: "", lastnameadult5: "", lastnameadult6: "", lastnameadult7: "", lastnameadult8: "", lastnameadult9: "",
    dobadult1: "", dobadult2: "", dobadult3: "", dobadult4: "", dobadult5: "", dobadult6: "", dobadult7: "", dobadult8: "", dobadult9: "",
    nationalityadult1: "", nationalityadult2: "", nationalityadult3: "", nationalityadult4: "", nationalityadult5: "", nationalityadult6: "", nationalityadult7: "", nationalityadult8: "", nationalityadult9: "",
    genderadult1: "", genderadult2: "", genderadult3: "", genderadult4: "", genderadult5: "", genderadult6: "", genderadult7: "", genderadult8: "", genderadult9: "",
    phonenumberadult1: "", phonenumberadult2: "", phonenumberadult3: "", phonenumberadult4: "", phonenumberadult4: "", phonenumberadult6: "", phonenumberadult7: "", phonenumberadult8: "", phonenumberadult9: "",
    emailadult1: "", emailadult2: "", emailadult3: "", emailadult4: "", emailadult5: "", emailadult6: "", emailadult7: "", emailadult8: "", emailadult9: "",
    passportnumberadult1: "", passportnumberadult2: "", passportnumberadult3: "", passportnumberadult4: "", passportnumberadult5: "", passportnumberadult6: "", passportnumberadult7: "", passportnumberadult8: "", passportnumberadult9: "",
    titlechild1: "", titlechild2: "", titlechild3: "", titlechild4: "", titlechild5: "", titlechild6: "", titlechild7: "", titlechild8: "",
    firstnamechild1: "", firstnamechild2: "", firstnamechild3: "", firstnamechild4: "", firstnamechild5: "", firstnamechild6: "", firstnamechild7: "", firstnamechild8: "",
    lastnamechild1: "", lastnamechild2: "", lastnamechild3: "", lastnamechild4: "", lastnamechild5: "", lastnamechild6: "", lastnamechild7: "", lastnamechild8: "",
    dobchild1: "", dobchild2: "", dobchild3: "", dobchild4: "", dobchild5: "", dobchild6: "", dobchild7: "", dobchild8: "",
    nationalitychild1: "", nationalitychild2: "", nationalitychild3: "", nationalitychild4: "", nationalitychild5: "", nationalitychild6: "", nationalitychild7: "", nationalitychild8: "",
    genderchild1: "", genderchild2: "", genderchild3: "", genderchild4: "", genderchild5: "", genderchild6: "", genderchild7: "", genderchild8: "",
    phonenumberchild1: "", phonenumberchild2: "", phonenumberchild3: "", phonenumberchild4: "", phonenumberchild5: "", phonenumberchild6: "", phonenumberchild7: "", phonenumberchild8: "",
    emailchild1: "", emailchild2: "", emailchild3: "", emailchild4: "", emailchild5: "", emailchild6: "", emailchild7: "", emailchild8: "",
    passportnumberchild1: "", passportnumberchild2: "", passportnumberchild3: "", passportnumberchild4: "", passportnumberchild5: "", passportnumberchild6: "", passportnumberchild7: "", passportnumberchild8: "",
  });
  console.log("data",data)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  // console.log("form data",data)



  const offerCode = (e) => {
    setOfferCodeValue(e.target.value);
  };

  const businessGstOnchange = (e) => {
    setBusinessGst(e.target.checked);
    if (e.target.checked === true) {
      alert(
        "If your business has a GSTN and requires a GST invoice for this purchase, please contact our Travel Experts for assistance. We do not support GSTN processing on our consumer website at this time."
      );
    }
  };

  const [addAdult, setAddAdult] = useState(1);
  const [addChild, setAddChild] = useState(0);

  const AdulthandleClick = () => {
    setAddAdult(addAdult + 1);
  };
  console.log(addAdult);

  const AdultdeleteMore = () => {
    setAddAdult(addAdult - 1);
  }
  const ChildhandleClick = () => {
    setAddChild(addChild + 1);
    console.log(addChild);
  };

  const ChilddeleteMore = () => {
    setAddChild(addChild - 1);
  }

  const ReadMore = () => {
    setReadMore(ReadMoreData);
    setReadMoreButton((current) => !current);

    if (readMoreButton == false) {
      setReadMore(ReadMoreData.slice(0, 1));
    }
  };
  
  const handleValidate = (value) => {
    let error = {}
    
    console.log(!value["titleadult" + addAdult])
    if (!value["titleadult" + addAdult]) {
      error.titleadult = "title required"
    }
    if (!value["firstnameadult" + addAdult]) {
      error["firstnameadult" + addAdult] = "first name required";
    }
    if (!value["lastnameadult" + addAdult]) {
      error.lastnameadult = "last name required"
    }
    if (!value["dobadult" + addAdult]) {
      error.dobadult = "date of birth required"
    }
    if (!value["nationalityadult" + addAdult]){
      error.nationalityadult = "nationality required"
    }
    if (!value["genderadult" + addAdult]){
      error.genderadult = "gender required"
    }
    if (!value["phonenumberadult" + addAdult]) {
      error.phonenumberadult = "phone number required"
    }
    if (!value["emailadult" + addAdult]) {
      error.emailadult = "email required"
    }
    if (!value["passportnumberadult" + addAdult]) {
      error.passportnumberadult = "passport number required"
    }
  // else if (!value["titlechild" + addChild]) {
  //     error.titlechild = "title required"
  //   }
  //   if (!value["firstnamechild" + addChild]) {
  //     error.firstnamechild = "first name required"
  //   }
  //   if (!value["lastnamechild" + addChild]) {
  //     error.lastnamechild = "last name required"
  //   }
  //   if (!value["dobchild" + addChild]) {
  //     error.dobchild = "date of birth required"
  //   }
  //   if (!value["nationalitychild" + addChild]) {
  //     error.nationalitychild = "nationality required"
  //   }
  //   if (!value["genderchild" + addChild]) {
  //     error.genderchild = "gender required"
  //   }
  //   if (!value["phonenumberchild" + addChild]) {
  //     error.phonenumberchild = "phone number required"
  //   }
  //   if (!value.emailchild + addChild) {
  //     error.emailchild = "email required"
  //   }
  //   if (!value["emailchild" + addChild]) {
  //     error.passportnumberchild = "passport number required"
    // }
     else 
    {
      DataPostApi();
    }
    setError(error)
  }
  const DataPostApi = () => {

    axios.post("http://localhost:4000/api/usersignup", signupData).then((res) => {
      const { message, success } = res.data;
      if (success === true) {
          alert(
              message,
          // nevigate('/emailactivate', {state:res.data})
          axios.post("http://localhost:4000/api/visaapply", data).then((res) => {

          const { message, success, result } = res.data
          if (success) {
            Swal.fire(
              message
            )
          } else {
            alert(message)
          }
        })
          )

      } else {
          alert(message)
      }
  })


  }

const handleClick=()=>{
  handleValidate(data);
}




  return (
    <>
      <section className="firstStep-section">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-9 border-end">
              <div className="firstStep-topSection">
                <p>Confirm your details</p>
              </div>
              <div className="firstStep-topSection">
                <p>VISA PROCESSING</p>
              </div>
              <div className="apply-details mt-2 pb-2 border-bottom">
                <div className="row">
                  <div className="col-md-2 mt-3 mb-4">
                    <span className="apply-icon ">
                      <i className="fas fa-clipboard iconStyle"></i>
                    </span>
                  </div>
                  <div className="col-md-10 stepOneList">
                    <strong>Please note important information</strong>
                    <p>
                      <u>
                        Service name: <strong>{dataFromVisaPage.packageduration} {dataFromVisaPage.packagetype}</strong>
                      </u>
                    </p>
                    <ul className="pl-0">
                      {readMore.map((item, index) => {
                        return (
                          <li key={index} className="mt-2">
                            {item.listItem}
                          </li>
                        );
                      })}
                    </ul>
                    <span onClick={ReadMore}>
                      {readMoreButton === true ? "Read More" : "Read Less"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="offer-code mt-3 mb-2">
                <div className="row">
                  <div className="col-md-2 mt-2 mb-3">
                    <span className="apply-icon">
                      <i className="fas fa-file-zipper iconStyle"></i>
                    </span>
                  </div>
                  <div className="col-md-10 ">
                    <input
                      type="text"
                      placeholder="Offer Code"
                      onChange={(e) => {
                        offerCode(e);
                      }}
                    />
                    &nbsp;&nbsp;
                    {offerCodevalue.length <= 0 ? (
                      <button className="offer-codeBtn" disabled>
                        REDEEM
                      </button>
                    ) : (
                      <button className="offer-code-btn">REDEEM</button>
                    )}
                  </div>
                </div>
              </div>
              <div className="firstStep-topSection mb-4">
                <p>TRAVELLERS</p>
              </div>

              <div className="travellers-container">
                <div className="border-bottom mb-3">
                  {Array.from(Array(addAdult)).map((c, index) => {
                    return (

                      <div key={c} className="col-md-12">
                        <div className="row pb-3">
                          <div className="col-md-2 mt-2 mb-4">
                            <span className="apply-icon">
                              <i className="far fa-user text-white iconStyle"></i>
                            </span>
                          </div>
                          <div className="col-md-1">
                            <p className="mt-2">Adult</p>
                          </div>
                          <div className="col-md-9">
                            <div className="row g-2 ">
                              <div className="col-md-2">
                                <select name={["titleadult" + addAdult]} onChange={handleChange} className="form-control">
                                  <option>Title</option>
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                  <option>Ms</option>
                                </select>
                                <p className="error">{error.titleadult}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="first name" name={["firstnameadult" + addAdult]} onChange={handleChange} />
                                <p className="error">{ error["firstnameadult"+addAdult]}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Last name" name={["lastnameadult" + addAdult]} onChange={handleChange} />
                                <p className="error">{error.lastnameadult}</p>
                              </div>
                              <div className="col-md-4">
                                <input type="date" className="form-control" name={["dobadult" + addAdult]} placeholder="Date of birth(dd-mm-yyyy)" onChange={handleChange} />
                                <p className="error">{error.dobadult}</p>
                              </div>
                              <div className="col-md-2"></div>
                              <div className="col-md-3">
                                <select name={["nationalityadult" + addAdult]} onChange={handleChange} className="form-control" id="">
                                  <option>Select</option>
                                  <option value="Indian">Indian</option>
                                  <option value="Canadian" >Canadian </option>
                                </select>
                                <p className="error">{error.nationalityadult}</p>
                              </div>
                              <div className="col-md-3">
                                <select name={["genderadult" + addAdult]} className="form-control" onChange={handleChange}>
                                  <option value="">Please Select</option>
                                  <option value="Male">male </option>
                                  <option value="Fenmale">female</option>
                                  <option value="Others">Others</option>
                                </select>
                                <p className="error">{error.genderadult}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="number" className="form-control" placeholder="Phone Number" name={["phonenumberadult" + addAdult]} onChange={handleChange} />
                                <p className="error">{error.phonenumberadult}</p>
                              </div>
                              <div className="col-md-2"></div>
                              <div className="col-md-3">
                                <input type="email" className="form-control" placeholder="Email" name={["emailadult" + addAdult]} onChange={handleChange} />
                                <p className="error">{error.emailadult}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Passport Number" name={["passportnumberadult" + addAdult]} onChange={handleChange} />
                                <p className="error">{error.passportnumberadult}</p>
                              </div>
                              <div className="col-md-3 delete-more-btn mt-4 d-flex justify-content-center">
                                {
                                  addAdult == 1 ? "" :
                                    <i key={index} className="far fa-trash-can close-more-button" title="Delete the Item" onClick={(addAdult) => { AdultdeleteMore(addAdult) }}></i>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {addAdult < 9 ? (
                    <div className="row col-md-12 pb-4 mt-2">
                      <div className="text-end add-more-button">
                        <button
                          className="btn btn-success border-0"
                          onClick={AdulthandleClick}
                        >
                          <i className="fas fa-user-plus"></i>&nbsp;Add More
                        </button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="border-bottom mb-3">
                  {Array.from(Array(addChild)).map((c, index) => {
                    return (
                      <div key={c} className="col-md-12">
                        <div className="row pb-3">
                          <div className="col-md-2 mt-2 mb-4">
                            <span className="apply-icon">
                              <i className="far fa-user text-white iconStyle"></i>
                            </span>
                          </div>
                          <div className="col-md-1">
                            <p className="mt-2">Child</p>
                          </div>
                          <div className="col-md-9">
                            <div className="row g-2 ">
                              <div className="col-md-2">
                                <select name={["titlechild" + addChild]} onChange={handleChange} className="form-control">
                                  <option>Title</option>
                                  <option>Mr</option>
                                  <option>Mrs</option>
                                  <option>Ms</option>
                                </select>
                                <p className="error">{error.titlechild}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" name={["firstnamechild" + addChild]} onChange={handleChange} className="form-control" placeholder="first name" />
                                <p className="error">{error.firstnamechild}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" name={["lastnamechild" + addChild]} onChange={handleChange} placeholder="Last name" />
                                <p className="error">{error.lastnamechild}</p>
                              </div>
                              <div className="col-md-4">
                                <input type="number" className="form-control" name={["dobchild" + addChild]} onChange={handleChange} placeholder="Date of birth(dd/mm/yyyy)" />
                                <p className="error">{error.childdob}</p>
                              </div>
                              <div className="col-md-2"></div>
                              <div className="col-md-3">
                                <select name={["nationalitychild" + addChild]} onChange={handleChange} className="form-control" id="">
                                  <option value="">Select nationality</option>
                                  <option value="">Indian</option>
                                  <option value="Canadian" name="Canadian">Canadian</option>
                                </select>
                                <p className="error">{error.childnationality}</p>
                              </div>
                              <div className="col-md-3">
                                <select name={["genderchild" + addChild]} className="form-control" onChange={handleChange} >
                                  <option value="">Gender</option>
                                  <option value="Male">male </option>
                                  <option value="Fenmale">female</option>
                                  <option value="Others">Others</option>
                                </select>
                                <p className="error">{error.genderchild}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" name={["phonenumberchild" + addChild]} onChange={handleChange} placeholder="Phone Number" />
                                <p className="error">{error.phonenumberchild}</p>
                              </div>
                              <div className="col-md-2"></div>
                              <div className="col-md-3">
                                <input type="email" className="form-control" name={["emailchild" + addChild]} onChange={handleChange} placeholder="Email" />
                                <p className="error">{error.emailchild}</p>
                              </div>
                              <div className="col-md-3">
                                <input type="text" className="form-control" name={["passportnumberchild" + addChild]} onChange={handleChange} placeholder="Passport Number" />
                                <p className="error">{error.passportnumberchild}</p>
                              </div>
                              <div className="col-md-3 delete-more-btn mt-4 d-flex justify-content-center">
                                {
                                  addChild == 0 ? ""
                                    :
                                    <i key={index} className="far fa-trash-can close-more-button" title="Delete the Item" onClick={(addAdult) => { ChilddeleteMore(addAdult) }}></i>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {
                    addChild < 8 ?
                      <div className="row col-md-12 pb-4 mt-2">
                        <div className="text-end add-more-button">
                          <button className="btn btn-success border-0" onClick={ChildhandleClick}>
                            <i className="fas fa-user-plus"></i>&nbsp;Add Children
                          </button>
                        </div>
                      </div>
                      :
                      ""
                  }
                </div>
                <div className="select-date-container border-bottom pb-3">
                  <div className="row">
                    <div className="col-md-7 ">
                      <p className="mt-2 ">Select Booking Date</p>
                    </div>
                    <div className="col-md-5">
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>

                <div className=" mb-3 mt-3">
                  <div className="row pb-3">
                    <div className="col-md-2 mt-2 mb-4">
                      <span
                        className="apply-icon"
                        style={{ background: "#F7F5F3" }}>
                        <i className="far fa-user text-dark iconStyle"></i>
                      </span>
                    </div>
                    <div className="col-md-2">
                      <p className="mt-1">Recipient</p>
                    </div>
                    <div className="col-md-8">
                      <div className="row g-2 ">
                        <div className="col-md-6">
                          <input type="email" className="form-control" name="emailApplyMember" onChange={handleSinUpChange}  placeholder="Email Address"/>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" name="contactnumber" onChange={handleSinUpChange}  placeholder="Phone Number"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4"></div>&nbsp;&nbsp;
                  <div className="col-lg-4 col-md-8">
                    <div className="">
                      <input className="form-check-input firstStep-check-box" type="checkbox" value="" defaultChecked id="flexCheckDefault"
                      />
                      <label className="form-check-label firstStep-check-label" htmlFor="flexCheckDefault">
                        &nbsp; I accept the{" "}
                        <span className="bg-transparent text-primary">
                          rules
                        </span>{" "}
                        of this trip
                      </label>
                    </div>
                    <div className=" ">
                      <input className="form-check-input firstStep-check-box" type="checkbox" value="" id="flexCheckChecked"/>
                      <label className="form-check-label firstStep-check-label" htmlFor="flexCheckChecked">
                        &nbsp; Send me the best deals by email
                      </label>
                    </div>
                    <div className="">
                      <input className="form-check-input firstStep-check-box" type="checkbox" onChange={(e) => {businessGstOnchange(e)}} value="" id="flexCheckChecked"/>
                      <label  className="form-check-label firstStep-check-label" htmlFor="flexCheckChecked">
                        &nbsp; I need a business GST invoice
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row pb-3">
                  <div className=" col-md-12 text-end ">
                    {businessGst === false ? (
                      <button className="offer-codeBtn bg-primary text-white" onClick={handleClick} >submit</button>
                    ) : (
                      <button className="offer-codeBtn d-none">submit</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="firstStep-topSection"></div>
              <div className="firstStep-Right-topSection sticky-top">
                <div className="row px-2 mt-2">
                  <div className="col-md-6">
                    <p>Base fare</p>
                  </div>
                  <div className="col-md-6">
                    <p>1,000</p>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row px-2">
                    <div className="col-md-6">
                      <p>Surcharges and taxes</p>
                    </div>
                    <div className="col-md-6">
                      <p>3,000</p>
                    </div>
                  </div>
                </div>
                <div className="total-amount text-end">
                  <strong className="text-primary">Rs {dataFromVisaPage.packageprice * (addAdult + addChild)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
