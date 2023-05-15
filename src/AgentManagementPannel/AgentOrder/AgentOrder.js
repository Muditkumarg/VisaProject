import React, { useEffect, useState } from "react";
import './AgentOrder.css'
import AgentNavigationBar from "../AgentNavigationBar/AgentNavigationBar";
import VisaApplyFormPage from "../../ApplyVisaForm/VisaApplyForm";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function AgentOrderPage() {

    const location = useLocation();
    const emailApplyMember = location.state[0];
    const applyBy = location.state[1];
const count =1;


    console.log("Apply", applyBy);

    const [orderData, setOrderData] = useState([]);

    const [message, setMessage] = React.useState(true);
    const chooseMessage = (message) => {
        setMessage(message);
    }
    const getDataApi = () => {
        axios.get(`http://localhost:4000/api/getagentorder/${applyBy}`).then((res) => {
            setOrderData(res.data)
        })
    }

    useEffect(() => {
        getDataApi()

    }, [])

    console.log(orderData)

    return (
        <>
            <AgentNavigationBar chooseMessage={chooseMessage} />
            <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
                <div className="visaContainer">

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
                                            {orderData?.map((row) => {
                                            return (
                                                <tr>
                                                    <td >{count}</td>
                                                    <td></td>
                                                    <td className="servicename"  >{row.purposeOfVisa}</td>
                                                    <td className="visaprice">{row.refrencenumber}</td>
                                                    <td>{row.firstnameadult1 + " "+ row.lastnameadult1}</td>
                                                   
                                                    <td> 
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
        </>
    )

}