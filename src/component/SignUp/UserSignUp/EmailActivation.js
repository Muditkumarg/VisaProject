import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './EmailActivation.css'

export default function EmaiilActivationPage() {

    const location = useLocation()

    const [emailData, setEmailData] = useState(location.state.token)
    const [emailDetail, setEmailDetail] = useState(" ")
    const [error,setError] = useState({})



    const handleChange = (e) => {
        const { name, value } = e.target
        setEmailDetail({ ...emailDetail, [name]: value })
    }

    const handleValidate = (value)=>{
        let error = {}
    
        if(!value.email){
            error.email = "Email required"
        }else{
            ActivationApi();
        }
        setError(error)
    }

    console.log(emailDetail)
   
    const ActivationApi = ()=>{
        axios.post(`http://localhost:4000/api/emailvarify/${emailData}`, emailDetail).then((res) => {
            const { message, success } = res.data;
            if (success) {
                alert(
                    message,

                )

            } else {
                alert(message)
            }
        })
    }

    const handleClick = () => {
        handleValidate(emailDetail)
       
    }

    return (

        <>

            <div class="container">
                <div class="activationRow row">
                    <div class=" col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1">

                    </div>
                    <div class=" col-xl-6 col-lg-6 col-md-6 col-sm-10 col-xs-10">
                        <div class="activationCard card">
                            <div class="card-body">
                                <p className="activationPara" >Thank You! User Successfully registered</p>
                                <p>Please check your email to active your account. Please check your spam folder also</p>
                                <button type="button" class="activationBtn btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  >Resend Activation Email</button>
                            </div>
                        </div>
                    </div>
                    <div class=" col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1 ">

                    </div>
                </div>
            </div>

            {/* <----------------------------------------------Email Activation Moda ------------------> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                      
                        <div class="modal-body">
                           
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" onChange={handleChange}></input>
                            <p>{error.email}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={handleClick} >Send</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}