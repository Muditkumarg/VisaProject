import React, { useState } from "react";
import './UserDashBoard.css'
import UserNavigationBar from "./UserNavigationBar";

import axios from "axios";
import { useEffect } from "react";


export default function UserDashBoardPage() {

    

    const initialState1 = { countryImage: " " }
    const initialState2 = { servicename: " ", packagetype: " ", packageduration: " ", singleentry: " ", consulatefees: " ", servicecharge: " ", alltaxes: " ", insurance: " ", packageprice: " ", CountryBanner: " " }
    const [message, setMessage] = React.useState(true);
    const [serviceData, setServiceData] = useState(initialState1);
    const [serviceGetData, setServiceGetData] = useState([]);
    const [error, setError] = useState({})
    const [editDetail, setEditDetail] = useState();
    const [addPackageData, setAddPackageData] = useState(initialState2)
    const [packageGetData, setPackageGetData] = useState([]);

    let count = 1;

    const chooseMessage = (message) => {
        setMessage(message);
    }

    const servicePostApi = () => {

        const config = {
            header: {
                "Content-Type": "multipart/form-data"
            }
        }

        const formData = new FormData();

        formData.append('country', serviceData.countryImage);
        formData.append("servicename", serviceData.servicename)
        formData.append("visaprice", serviceData.visaprice);
        axios.post("http://localhost:4000/api/postservice", formData, config).then((res) => {
            const { message, success } = res.data;
            if (success) {
                alert(
                    message,
                )
                window.location.reload();
            } else {
                alert(message)
            }
        })

    }
    const serviceGetApi = () => {
        axios.get("http://localhost:4000/api/getservice").then((res) => {
            setServiceGetData(res.data)
        })
    }
    const GetPackageApi = () => {
        axios.get("http://localhost:4000/api/getservicepackage").then((res) => {
            setPackageGetData(res.data)
        })
    }

    useEffect(() => {
        serviceGetApi();
        GetPackageApi()
    }, []);

    console.log(packageGetData);
    const countPackageData = packageGetData.filter((item) => item.servicename).length
    console.log(countPackageData)


    // useEffect(() => {

    // }, []);

    const imageUpload = (e) => {
        const files = e.target.files[0];
        setServiceData({ ...serviceData, countryImage: files })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setServiceData({ ...serviceData, [name]: value })
    }

    const handleValidate = (value) => {
        let error = {}
        if (!value.servicename) {
            error.servicename = "servicename require"
        }

        else if (!value.visaprice) {
            error.visaprice = "visaprice require"
        }
        else {
            servicePostApi()
        }
        setError(error);
    }

    const handleClick = () => {
        handleValidate(serviceData)
    }

    const imageChange = (e) => {
        const files = e.target.files[0];
        setEditDetail({ ...editDetail, countryImage: files })

    }

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setEditDetail({ ...editDetail, [name]: value });
    }

    const handleEditSubmit = () => {

        const formData = new FormData();

        formData.append('country', editDetail.countryImage);
        formData.append("servicename", editDetail.servicename)
        formData.append("visaprice", editDetail.visaprice);
        formData.append("id", editDetail._id)

        axios.put("http://localhost:4000/api/updateservice", formData).then((res) => {

            const { massage, success, result } = res.data
            if (success) {
                alert(massage)
                setServiceGetData(result)
                window.location.reload();
            } else {
                alert(massage)
            }

        })
    }


    // console.log(editDetail)


    const bannerUpload = (e) => {
        const files = e.target.files[0];
        setAddPackageData({ ...addPackageData, CountryBanner: files })
    }
    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setAddPackageData({ ...addPackageData, [name]: value })

    }

    // console.log(addPackageData)

    const AddPackageApi = () => {
        const formData = new FormData();

        formData.append("banner", addPackageData.CountryBanner);
        formData.append("servicename", addPackageData.servicename)
        formData.append("packagetype", addPackageData.packagetype);
        formData.append("packageduration", addPackageData.packageduration);
        formData.append("singleentry", addPackageData.singleentry);
        formData.append("consulatefees", addPackageData.consulatefees);
        formData.append("servicecharge", addPackageData.servicecharge);
        formData.append("alltaxes", addPackageData.alltaxes);
        formData.append("insurance", addPackageData.insurance);
        formData.append("packageprice", addPackageData.packageprice);

        axios.post("http://localhost:4000/api/postservicepackage", formData).then((res) => {
            const { message, success } = res.data;
            if (success) {
                alert(
                    message,
                )
                window.location.reload();
            } else {
                alert(message)
            }
        })

    }

    const handlePackegeClick = () => {
        AddPackageApi(addPackageData);

    }


    return (
        <>
  <UserNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
                <div className="visaContainer"></div>
            <div className="servicesContainer container">
                <div className="headTable">
                    <div class="tableHeadContainer container">
                        <div class="row">
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                <div class="">
                                    <input type="search" aria-controls="enquirytable" className="inputSearch" placeholder="Search..."></input>
                                    <hr className="searchLine" ></hr>
                                </div>
                            </div>
                            <div class="col-xl-10 col-lg-10 col-md-2 col-sm-2 col-xs-2 ">
                                <div className="addBtn">
                                    <button data-bs-toggle="modal" data-bs-target="#modalone" type="button" class="userTableButton btn btn-outline-primary" >Apply Now<em className="userTableButtonSign" >+</em></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col-xl-12 col-sm-12 col-md-12 col-xs-12 ">
                    <div class="TableCard card">
                        <div class="card-body tableBody">
                            <table class="serviceTable table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scope="col">Date Entered</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Refrence Number</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Application Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {serviceGetData?.map((row) => {
                                            return (
                                                <tr>
                                                    <td >{count++}</td>
                                                    <td className="servicename" value={row.servicename} >{row.servicename}</td>
                                                    <td className="visaprice">{row.visaprice}</td>
                                                   
                                                    <td> 
                                                    </td>
                                                    
                                                    <td>
                                                        <div class="col serviceTableButtonPannel">
                                                        <a className="serviceTableButton" href="/servicespackage">{packageGetData.filter((item)=>item.servicename===row.servicename).length}</a>
                                                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleUpdate}>Add Plan</button>
                                                            <button data-bs-toggle="modal" data-bs-target="#modalone" value={row} type="button" id={row._id} class="serviceTableButton btn btn-outline-primary" onClick={handleUpdate}>Edit</button>
                                                            <button type="button" class="deleteserviceTableButton serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleDelete}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>


    {/* <..............................................Apply first Modal...............................-----------> */}
            <div class="modal fade" id="modalone" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="userApplyModal modal-dialog modal-dialog-scrollable">
                    <div class="userApplyModalContent modal-content">
                        <div class="header modal-header">
                            <h5 class="noticeHeading modal-title" id="staticBackdropLabel">NOTICE</h5>
                            <button type="button" class="closeButton btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>In conjuction with the <em>holyday seasion</em> below -</p>
                           <p> please note that the High Commission/Consulate of Malasia will be closed on the following dates.
                            </p>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="userTableButton btn btn-outline-primary" >proceed<em className="userTableButtonSign" >+</em></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <--------------------------------------Apply Second Modal------------------------------------------------------> */}

            <div class="modal fade" id="modaltwo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="userApplyModal modal-dialog ">
                    <div class="userApplyModalContent modal-content">
                        <div class="header modal-header">
                            <h5 class="noticeHeading modal-title" id="staticBackdropLabel">NOTICE</h5>
                            <button type="button" class="closeButton btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="userTableButton btn btn-outline-primary"  >Apply Now<em className="userTableButtonSign" >+</em></button>
                        </div>
                    </div>
                </div>
            </div>



            {/* <------------------------------------Add Package Modal--------------------------------> */}

            <div class="editModalStyle modal fade" id="modaltwo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="editModalPannel modal-dialog">
                    <div class="editModalContainer modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Add Services Package From</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Services Name</label>
                                {editDetail === undefined ? (
                                    <>
                                        {/* <input class="editInputField form-control" name="servicename" id="serviceid" onChange={handleAddChange} ></input> */}
                                        <select class=" serviceForm form-select" name="servicename" aria-label="Default select example" onChange={handleAddChange}  >
                                            <option selected>Select Service</option>
                                            <option></option>
                                        </select>
                                    </>
                                ) :
                                    <>
                                        {/* <input class="editInputField form-control" name="servicename" id="visaid" defaultValue={editDetail.servicename} onChange={handleAddChange} ></input> */}
                                        <select class=" editInputField form-select" name="servicename" aria-label="Default select example" onChange={handleAddChange}>
                                            <option selected>Select Service</option>
                                            <option >{editDetail.servicename}</option>
                                        </select>
                                    </>
                                }
                                <label for="editInputLable exampleFormControlInput1" class="modalLableshadow-none form-label">Package Duration</label>
                                <input placeholder="Enter Package Duration" class="editInputField shadow-none form-control" name="packageduration" id="exampleFormControlInput1" onChange={handleAddChange} ></input>
                                <label for="editInputLable exampleFormControlInput1" class="modalLable form-label">Packege Type</label>
                                <input placeholder="Enter Package Type" class="editInputField shadow-none form-control" name="packagetype" id="exampleFormControlInput1" onChange={handleAddChange} ></input>


                                <label for="editInputLable exampleFormControlInput1" class="modalLable  form-label">Package Attributes</label>
                                <div className="attributesStylePannel">
                                    <select class="attributesStyle shadow-none form-select" name="singleentry" aria-label="Default select example" onChange={handleAddChange}>
                                        <option selected value=" " >Select</option>
                                        <option >Single entry</option>
                                        <option >Multiple entry</option>
                                    </select>
                                    <select class="attributesStyle shadow-none form-select" name="consulatefees" aria-label="Default select example" onChange={handleAddChange}>
                                        <option selected value=" " >Select</option>
                                        <option >Consulate fees</option>
                                    </select>
                                    <select class="attributesStyle shadow-none form-select" name="servicecharge" aria-label="Default select example" onChange={handleAddChange}>
                                        <option selected value=" " >Select</option>
                                        <option  >Service charges</option>
                                    </select>
                                    <select class="attributesStyle shadow-none form-select" name="alltaxes" aria-label="Default select example" onChange={handleAddChange}>
                                        <option selected value=" " >Select</option>
                                        <option >All taxes</option>
                                    </select>
                                    <select class="attributesStyle shadow-none  form-select" name="insurance" aria-label="Default select example" onChange={handleAddChange}>
                                        <option selected value=" " >Select</option>
                                        <option >Insurance</option>
                                    </select>
                                </div>
                                <label for="editInputLable exampleFormControlInput1" class="modalLable form-label">Price</label>
                                <input placeholder="Enter Price" class="editInputField shadow-none form-control" name="packageprice" id="exampleFormControlInput1" onChange={handleAddChange} ></input>
                                <label for="formFile" class="modalLable form-label">Upload Banner Image</label>
                                <input class="editInputField form-control" type="file" id="modalLable shadow-none formFile" name="banner" onChange={bannerUpload}></input>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handlePackegeClick} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}