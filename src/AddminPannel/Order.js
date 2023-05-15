import React, { useState } from "react";
import AdminNavigationBar from "./NevigatinBar";
import axios from "axios";
import { useEffect } from "react";
import './Order.css'

export default function OrderPage() {

    const [allOrderData, setAllOrderData] = useState();
    let count = 1;
    const [message, setMessage] = React.useState(true);

    const chooseMessage = (message) => {
        setMessage(message);
    }


    const getDataApi = () => {
        axios.get('http://localhost:4000/api/allorder').then((res) => {
            setAllOrderData(res.data)
        })
    }

    useEffect(() => {
        getDataApi()

    }, [])

    console.log(allOrderData)

    const handleUpdate = () => {

    }


    return (
        <>
            <AdminNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
                <div className="servicesContainer">
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
                                        {/* <div className="addBtn">
                                    <button data-bs-toggle="modal" data-bs-target="#modalone" type="button" class="userTableButton btn btn-outline-primary" >Apply Now<em className="userTableButtonSign" >+</em></button>
                                </div> */}
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
                                            {allOrderData?.map((row) => {
                                                return (
                                                    <tr>
                                                        <td >{count++}</td>
                                                        <td></td>
                                                        <td className="servicename" value={row.purposeOfVisa} >{row.purposeOfVisa}</td>
                                                        <td className="visaprice">{row.refrencenumber}</td>

                                                        <td> {row.firstnameadult1 + " " + row.lastnameadult1}</td>
                                                        <td>{row.status}</td>
                                                        <td>
                                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleUpdate}>Change Status</button>
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
            </div>

            {/* <-----------------------------------------Status Update Modal---------------------> */}

            <div class="statusModal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="statusModalContainer modal-dialog">
                    <div class="statusModalContent modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div class="modal-body">{allOrderData?.map((row) => {
                            return(
                            <select class="shadow-none form-select mb-0" name="singleentry" aria-label="Default select example">
                                <option selected value={row.status} >{row.status}</option>
                                <option >In Process</option>
                                <option >Approved</option>
                            </select>
                            )
                        })}

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}