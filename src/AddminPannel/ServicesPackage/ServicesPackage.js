import React, { useEffect, useState } from "react";
import './ServicesPackage.css'
import AdminNavigationBar from "../NevigatinBar";
import axios from "axios";

export default function ServicesPackagePage() {

    let count = 1;

    const [message, setMessage] = React.useState(true);
    const [packageGetData, setPackageGetData] = useState()

    const chooseMessage = (message) => {
        setMessage(message);
    }

    const GetPackageApi = () => {
        axios.get("http://localhost:4000/api/getservicepackage").then((res) => {
            setPackageGetData(res.data)
        })
    }

    useEffect(() => {
        GetPackageApi()
    }, []);

    const handleUpdateChange = () => {

    }

    const handleUpdate = () => {

    }
    return (
        <>
            <AdminNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`} >
                <div className="servicesContainer">
                    <div class="card">
                        <div class=" cardHeaderContent card-header">
                            Services Packages
                        </div>
                    </div>
                    <div class="col col-xl-12 col-sm-12 col-md-12 col-xs-12 ">
                        <div class=" card">
                            <div class="card-body tableBody">
                                <table class="serviceTable table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr.No</th>
                                            <th scope="col">Services Name</th>
                                            <th scope="col">Package Type</th>
                                            <th scope="col">Package Duration</th>
                                            <th scope="col">Package Attributes</th>
                                            <th scope="col">Package Price</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packageGetData?.map((row) => {

                                            return (
                                                <tr>
                                                    <td >{count++}</td>
                                                    <td className="servicename">{row.servicename}</td>
                                                    <td className="visaprice">{row.packagetype}</td>
                                                    <td className="visaprice">{row.packageduration}</td>
                                                    <td className="visaprice">
                                                        <div class="col serviceTableButtonPannel">
                                                            <ul>
                                                                <li>{row.singleentry}</li>
                                                                <li>{row.consulatefees}</li>
                                                                <li>{row.servicecharge}</li>
                                                                <li>{row.alltaxes}</li>
                                                                <li>{row.insurance}</li>

                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td className="visaprice">{row.packageprice}</td>
                                                    <td>
                                                        <div class="col serviceTableButtonPannel">
                                                            <button data-bs-toggle="modal" data-bs-target="#modalone" value="row" type="button" id="row._id" class="serviceTableButton btn btn-outline-primary" onClick={handleUpdate}>Edit</button>
                                                            <button type="button" class="deleteserviceTableButton serviceTableButton btn btn-outline-primary" onclick="location.href='#'">Delete</button>
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


            {/* <----------------------Edit And Add Package  Modal------------------------------->*/}
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

                                <input class="editInputField form-control" name="servicename" id="serviceid" onChange={handleUpdateChange} ></input>

                                <label for="editInputLable exampleFormControlInput1" class="modalLable form-label">Visa Price</label>

                                <input type="email" class=" editInputField form-control" name="visaprice" id="exampleFormControlInput1" onChange={handleUpdateChange} ></input>


                                <label for="formFile" class="modalLable form-label">Default file input example</label>
                                <input class="editInputField form-control" type="file" id="formFile"></input>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>
                            <button type="button" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}