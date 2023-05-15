import React, { useState } from "react";
import './Services.css'
import AdminNavigationBar from "../NevigatinBar";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
export default function ServicesPage() {

    const initialState1 = { countryImage: " ", countryBanner: " " }
    const initialState2 = { servicename: " ", packagetype: " ", packageduration: " ", singleentry: " ", consulatefees: " ", servicecharge: " ", alltaxes: " ", insurance: " ", packageprice: " " }
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
        formData.append('countrybanner', serviceData.countryBanner);
        formData.append("servicename", serviceData.servicename)
        formData.append("visaprice", serviceData.visaprice);


        axios.post("http://localhost:4000/api/postservice", formData, config).then((res) => {
            const { message, success } = res.data;
            if (success) {
                Swal.fire(
                    message
                )
                window.location.reload();
            } else {
                Swal.fire(
                    message
                )
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

    const imageUpload = (e) => {
        const files = e.target.files[0];
        setServiceData({ ...serviceData, countryImage: files })
    }

    const bannerImageUpload = (e) => {
        const files = e.target.files[0];
        setServiceData({ ...serviceData, countryBanner: files })
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

    
    const bannerChange = (e) => {
        const files = e.target.files[0];
        setEditDetail({ ...editDetail, countryBanner: files })
    
    }

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setEditDetail({ ...editDetail, [name]: value });
    }

    const handleEditSubmit = () => {

        const formData = new FormData();
        formData.append('country', editDetail.countryImage);
        formData.append('countrybanner', editDetail.countryBanner)
        formData.append("servicename", editDetail.servicename)
        formData.append("visaprice", editDetail.visaprice);
        formData.append("id", editDetail._id)

        axios.put("http://localhost:4000/api/updateservice", formData).then((res) => {

            const { massage, success, result } = res.data
            if (success) {
                Swal.fire(
                    massage
                )
                setServiceGetData(result)
                window.location.reload();

            } else {
                alert(massage)
            }
        })

    }

    const handleUpdate = (e) => {
        const id = e.target.getAttribute("id");
        axios.get(`http://localhost:4000/api/getservicebyid/${id}`).then((res) => {
            setEditDetail(res.data);
        })
    }

    const handleDelete = (e) => {
        const id = e.target.getAttribute("id");
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/api/deleteservice/${id}`).then((res) => {
                    const { message, success } = res.data;
                    if (success) {
                        Swal({
                            title: message,
                            text: "You clicked the button!",
                            icon: "success",
                        })

                    } else {
                        alert(message)
                    }
                })
                window.location.reload();
            }

        })



    }

  
    const handleAddChange = (e) => {
        const { name, value } = e.target;
        setAddPackageData({ ...addPackageData, [name]: value })
    }



    const AddPackageApi = () => {
        axios.post("http://localhost:4000/api/postservicepackage", addPackageData).then((res) => {
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
            <AdminNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`} >
                <div className="servicesContainer">
                    <div className="headTable">
                        <div class="tableHeadContainer container">
                            <div class="row">
                                <div class="col col-xl-2 col-lg-2 col-md-2 col-sm- col-xs-1">
                                    <div class="">
                                        <input type="search" aria-controls="enquirytable" className="inputSearch" placeholder="Search..."></input>
                                        <hr className="searchLine" ></hr>
                                    </div>
                                </div>
                                <div class="col col-xl-10 col-lg-10  ">
                                    <div className="addBtn">
                                        <button data-bs-toggle="modal" data-bs-target="#modal" type="button" class="serviceTableButton btn btn-outline-primary" >Add Services</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="editModalStyle modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="editModalPannel modal-dialog">
                            <div class="editModalContainer modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Services Add Form</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label class=" form-label" >Service Name</label>
                                        <select class=" editInputField form-select" name="servicename" aria-label="Default select example" onChange={handleChange}>
                                            <option selected>Open this select menu</option>
                                            <option value="Dubai Visa online">Dubai Visa online</option>
                                            <option value="Singapure Visa Online">Singapure Visa Online</option>
                                            <option value="Vietnam Visa Online">Vietnam Visa Online</option>
                                            <option value="Thiland Visa Online">Thiland Visa Online</option>
                                            <option value="Dubai Family Visa">Dubai Family Visa</option>
                                            <option value="Malaysiya Visa Online">Malaysiya Visa Online</option>
                                            <option value="Sri Lanka Visa Online">Sri Lanka Visa Online</option>
                                            <option value="UK Visa Online">UK Visa Online</option>
                                            <option value="US Visa Online">US Visa Online</option>
                                            <option value="New Zealand Visa Online">New Zealand Visa Online</option>
                                            <option value="Australia Visa">Australia Visa</option>
                                            <option value="Qatar Visa">Qatar Visa</option>
                                            <option value="Egypt Visa Online4">Egypt Visa Online</option>
                                            <option value="Turkey Visa Online">Turkey Visa Online</option>
                                            <option value="Turkey Visa">Turkey Visa</option>
                                            <option value="Japan Visa Online">Japan Visa Online</option>
                                            <option value="Dubai Cruise Visa">Dubai Cruise Visa</option>
                                            <option value="Canada Visa">Canada Visa</option>
                                            <option value="Shengen Visa">Shengen Visa</option>
                                            <option value="Oman Visa Online">Oman Visa Online</option>
                                            <option value="Saudi Arab Visa Online">Saudi Arab Visa Online</option>
                                            <option value="Indonesia Visa online">Indonesia Visa online</option>
                                            <option value="Philippines Visa online">Philippines Visa online</option>
                                            <option value="Luxembourg Visa">Luxembourg Visa</option>
                                            <option value="Combodia Visa">Combodia Visa</option>
                                            <option value="Slovakiya Visa">Slovakiya Visa</option>
                                            <option value="Malta Visa">Malta Visa</option>
                                            <option value="Cyprus Visa Online">Cyprus Visa Online</option>
                                            <option value="Hungary Visa Online">Hungary Visa Online</option>
                                            <option value="Estonia Visa">Estonia Visa </option>
                                            <option value="Finland Visa">Finland Visa</option>
                                            <option value="Austria Visa">Austria Visa</option>
                                            <option value="Sweden Visa">Sweden Visa</option>
                                            <option value="Latvia Visa">Latvia Visa</option>
                                            <option value="Iceland Visa">Iceland Visa</option>
                                            <option value="Slovenia Visa">Slovenia Visa</option>
                                            <option value="Israel Visa online">Israel Visa online</option>
                                            <option value="Portugal Visa">Portugal Visa</option>
                                            <option value="Denmark Visa">Denmark Visa</option>
                                            <option value="China Visa">China Visa</option>
                                            <option value="Kenya Visa online">Kenya Visa online</option>
                                            <option value="Azerbaijan Visa">Azerbaijan Visa</option>
                                            <option value="Hong Kong Visa">Hong Kong Visa</option>
                                            <option value="Czech Republic Visa ">Czech Republic Visa </option>
                                            <option value="Russia Visa">Russia Visa</option>
                                            <option value="UAE Visa Extension">UAE Visa Extension</option>
                                            <option value="Bungladesh Visa Online">Bungladesh Visa Online</option>
                                            <option value="Bahrain Visa Online">Bahrain Visa Online</option>
                                            <option value="Tanzania Visa Online">Tanzania Visa Online</option>
                                            <option value="Italy Visa">Italy Visa</option>
                                            <option value="France Visa">France Visa</option>
                                            <option value="Norway Visa">Norway Visa</option>
                                            <option value="Spain Visa">Spain Visa</option>
                                            <option value="Netherlands Visa">Netherlands Visa</option>
                                            <option value="Switzerland Visa">Switzerland Visa</option>
                                            <option value="Greece Visa">Greece Visa</option>
                                            <option value="Belgium Visa">Belgium Visa</option>
                                        </select>
                                        <p>{error.servicename}</p>
                                        <label class=" form-label" >Service Price</label>
                                        <input class="editInputField form-control" name="visaprice" type="text" placeholder="Default input" onChange={handleChange} ></input>
                                        <p>{error.visaprice}</p>
                                        <label class=" form-label" >Select Country Image</label>
                                        <input class="editInputField form-control" type="file" id="formFile" name="country" onChange={imageUpload}></input>
                                        <p>{error.country}</p>
                                        <label class=" form-label" >Select Country Banner</label>
                                        <input class="editInputField form-control" type="file" id="formFile" name="countrybanner" onChange={bannerImageUpload}></input>
                                        <p>{error.country}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type=" button" class=" btn btn-primary" onClick={handleClick} >Submit</button>
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>

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
                                            <th scope="col">Services Name</th>
                                            <th scope="col">Visa Price</th>
                                            <th scope="col">Country Image</th>
                                            <th scope="col">Country Banner</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {serviceGetData?.map((row) => {
                                            return (
                                                <tr>
                                                    <td >{count++}</td>
                                                    <td className="servicename" value={row.servicename} >{row.servicename}</td>
                                                    <td className="visaprice">{row.visaprice}</td>

                                                    <td>
                                                        <img className="serviceTableButton imgStyle" src={`http://localhost:4000/uploads/${row.country}`} alt="" />
                                                    </td>
                                                    <td>   <img className="serviceTableButton imgStyle" src={`http://localhost:4000/uploads/${row.countrybanner}`} alt="" /></td>
                                                    <td>
                                                        <div class="col serviceTableButtonPannel">
                                                            <a className="serviceTableButton" href="/servicespackage">{packageGetData.filter((item) => item.servicename === row.servicename).length}</a>
                                                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleUpdate}>Add Plan</button>
                                                            <button data-bs-toggle="modal" data-bs-target="#modalone" value={row} type="button" id={row._id} class="serviceTableButton btn btn-outline-primary" onClick={handleUpdate}>Edit</button>
                                                            <button type="button" class="deleteserviceTableButton serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleDelete}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <----------------------Edit Modal------------------------------->*/}
            <div class="editModalStyle modal fade" id="modalone" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="editModalPannel modal-dialog">
                    <div class="editModalContainer modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Services Edit Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Services Name</label>
                                {editDetail === undefined ? (
                                    <input class="editInputField form-control" name="servicename" id="serviceid" onChange={handleUpdateChange} ></input>
                                ) : <>
                                    <select class=" editInputField form-select" name="servicename" aria-label="Default select example" onChange={handleUpdateChange}>
                                        <option>{editDetail.servicename}</option>
                                        <option value="Dubai Visa online">Dubai Visa online</option>
                                        <option value="Singapure Visa Online">Singapure Visa Online</option>
                                        <option value="Vietnam Visa Online">Vietnam Visa Online</option>
                                        <option value="Thiland Visa Online">Thiland Visa Online</option>
                                        <option value="Dubai Family Visa">Dubai Family Visa</option>
                                        <option value="Malaysiya Visa Online">Malaysiya Visa Online</option>
                                        <option value="Sri Lanka Visa Online">Sri Lanka Visa Online</option>
                                        <option value="UK Visa Online">UK Visa Online</option>
                                        <option value="US Visa Online">US Visa Online</option>
                                        <option value="New Zealand Visa Online">New Zealand Visa Online</option>
                                        <option value="Australia Visa">Australia Visa</option>
                                        <option value="Qatar Visa">Qatar Visa</option>
                                        <option value="Egypt Visa Online4">Egypt Visa Online</option>
                                        <option value="Turkey Visa Online">Turkey Visa Online</option>
                                        <option value="Turkey Visa">Turkey Visa</option>
                                        <option value="Japan Visa Online">Japan Visa Online</option>
                                        <option value="Dubai Cruise Visa">Dubai Cruise Visa</option>
                                        <option value="Canada Visa">Canada Visa</option>
                                        <option value="Shengen Visa">Shengen Visa</option>
                                        <option value="Oman Visa Online">Oman Visa Online</option>
                                        <option value="Saudi Arab Visa Online">Saudi Arab Visa Online</option>
                                        <option value="Indonesia Visa online">Indonesia Visa online</option>
                                        <option value="Philippines Visa online">Philippines Visa online</option>
                                        <option value="Luxembourg Visa">Luxembourg Visa</option>
                                        <option value="Combodia Visa">Combodia Visa</option>
                                        <option value="Slovakiya Visa">Slovakiya Visa</option>
                                        <option value="Malta Visa">Malta Visa</option>
                                        <option value="Cyprus Visa Online">Cyprus Visa Online</option>
                                        <option value="Hungary Visa Online">Hungary Visa Online</option>
                                        <option value="Estonia Visa">Estonia Visa </option>
                                        <option value="Finland Visa">Finland Visa</option>
                                        <option value="Austria Visa">Austria Visa</option>
                                        <option value="Sweden Visa">Sweden Visa</option>
                                        <option value="Latvia Visa">Latvia Visa</option>
                                        <option value="Iceland Visa">Iceland Visa</option>
                                        <option value="Slovenia Visa">Slovenia Visa</option>
                                        <option value="Israel Visa online">Israel Visa online</option>
                                        <option value="Portugal Visa">Portugal Visa</option>
                                        <option value="Denmark Visa">Denmark Visa</option>
                                        <option value="China Visa">China Visa</option>
                                        <option value="Kenya Visa online">Kenya Visa online</option>
                                        <option value="Azerbaijan Visa">Azerbaijan Visa</option>
                                        <option value="Hong Kong Visa">Hong Kong Visa</option>
                                        <option value="Czech Republic Visa ">Czech Republic Visa </option>
                                        <option value="Russia Visa">Russia Visa</option>
                                        <option value="UAE Visa Extension">UAE Visa Extension</option>
                                        <option value="Bungladesh Visa Online">Bungladesh Visa Online</option>
                                        <option value="Bahrain Visa Online">Bahrain Visa Online</option>
                                        <option value="Tanzania Visa Online">Tanzania Visa Online</option>
                                        <option value="Italy Visa">Italy Visa</option>
                                        <option value="France Visa">France Visa</option>
                                        <option value="Norway Visa">Norway Visa</option>
                                        <option value="Spain Visa">Spain Visa</option>
                                        <option value="Netherlands Visa">Netherlands Visa</option>
                                        <option value="Switzerland Visa">Switzerland Visa</option>
                                        <option value="Greece Visa">Greece Visa</option>
                                        <option value="Belgium Visa">Belgium Visa</option>
                                    </select>
                                </>}
                                <label for="modalLable exampleFormControlInput1" class="modalLable form-label">Visa Price</label>
                                {editDetail === undefined ? (
                                    <input type="email" class=" editInputField form-control" name="visaprice" id="exampleFormControlInput1" onChange={handleUpdateChange} ></input>
                                ) :
                                    <input type="email" class=" editInputField form-control" name="visaprice" id="exampleFormControlInput1" defaultValue={editDetail.visaprice} onChange={handleUpdateChange} ></input>
                                }
                                <label for="formFile" class="modalLable form-label">Country Image Update</label>
                                <input class="editInputField form-control" name="country" type="file" id="formFile" onChange={imageChange} ></input>
                                <label for="formFile" class="modalLable form-label">Country Banner Update</label>
                                <input class="editInputField form-control" name="countrybanner" type="file" id="formFile" onChange={bannerChange} ></input>
                            </div>
                            {editDetail === undefined ? (
                                <div>
                                    <img className="editImage" src={`http://localhost:4000/uploads/${editDetail}`} alt="" />
                                </div>
                            ) : <div>
                                <img className="editImage" src={`http://localhost:4000/uploads/${editDetail.country}`} alt="" />
                                <img className="editbanner" src={`http://localhost:4000/uploads/${editDetail.countrybanner}`} alt="" />
                            </div>
                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleEditSubmit}  >Submit</button>
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
                                {/* <label for="formFile" class="modalLable form-label">Upload Banner Image</label>
                                <input class="editInputField form-control" type="file" id="modalLable shadow-none formFile" name="banner" onChange={bannerUpload}></input> */}
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