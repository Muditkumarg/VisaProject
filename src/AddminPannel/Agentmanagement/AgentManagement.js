import React from "react";
import './AgentManagement.css'
import AdminNavigationBar from "../NevigatinBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AgentManagementPage() {

    const [message, setMessage] = React.useState(true);

    const chooseMessage = (message) => {
        setMessage(message);
    }


    const nevigate = useNavigate();

    const [data, setData] = useState(" ");
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const submitData = () => {

        axios.post("http://localhost:4000/api/agentsignup", data).then((res) => {
            const { message, success } = res.data;
            if (success == true) {
                alert(
                    message,
                    nevigate('/agentlogin')
                )

            } else {
                alert(message)
            }
        })

    }

    console.log(data)
    const validation = (value) => {
        let error = {};

        if (!value.firstname) {
            error.firstname = "firstname required"
        }
        if (!value.lastname) {
            error.lastname = "lastName required"
        }
        if (!value.email) {
            error.email = "email required"
        }
        if (!value.password) {
            error.password = "password required"

        }
        else {
            submitData()
        }
        setError(error)
    }

    const handleClick = () => {
        validation(data)
    }
    return (
        <>
            <AdminNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
                <div className="visaContainer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5 col-md-5  ">
                           
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5">
                            </div>
                            <div class="col ">
                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="serviceTableButton btn btn-outline-primary" >Agent Registration</button>

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



            <div class="editModalStyle modal fade" id="modaltwo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="editModalPannel modal-dialog">
                    <div class="editModalContainer modal-content">
                        <div class="modal-header">

                            <h3 className="SignHeading modal-title" >Agent Registration</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="">
                                <input class="signInputStyle form-control" name="firstname" placeholder="First Name" onChange={handleChange}></input>
                                <p className="validation">{error.firstname}</p>
                                <input class="signInputStyle form-control" name="lastname" placeholder="Last Name" onChange={handleChange} ></input>
                                <p className="validation">{error.lastname}</p>
                                <input class="signInputStyle form-control" name="email" placeholder="Email" onChange={handleChange}></input>
                                <p className="validation">{error.email}</p>
                                <input type="password" class="signInputStyle form-control" name="password" placeholder="Password" onChange={handleChange} ></input>
                                <p className="validation">{error.password}</p>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleClick} >Submit</button>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )

}