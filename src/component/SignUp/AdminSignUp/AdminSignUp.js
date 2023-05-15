import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './AdminSignUp.css'
import axios from "axios";

export default function AdminSignUpPage() {

    const nevigate = useNavigate();

    const [data, setData] = useState(" ");
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const submitData=()=>{

        axios.post("http://localhost:4000/api/signup",data).then((res)=>{
            const {message,success} = res.data;
            if(success==true){
                alert(
                    message,
                    nevigate('/adminlogin')
                )
            
            }else{
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
            <div className="">
                <div class="row signUpPannel ">
                    <div class="  col-xl-4  col-lg-4  col-md-4 col-sm-12 col-xs-12  ">
                        <div className="SignUpBg">
                            <div className="formTopContent">
                                <h1>SignUp form</h1>
                            </div>
                            <div className="SignformBottum">
                                <h3 className="SignHeading" >Admin SignUp</h3>
                                <div class="">
                                    <input class="signInputStyle form-control" name="firstname" placeholder="First Name" onChange={handleChange}></input>
                                    <p className="validation">{error.firstname}</p>
                                    <input class="signInputStyle form-control" name="lastname" placeholder="Last Name" onChange={handleChange} ></input>
                                    <p className="validation">{error.lastname}</p>
                                    <input class="signInputStyle form-control" name="email" placeholder="Email" onChange={handleChange}></input>
                                    <p className="validation">{error.email}</p>
                                    <input type="password" class="signInputStyle form-control" name="password" placeholder="Password" onChange={handleChange} ></input>
                                    <p className="validation">{error.password}</p>
                                    <button type="button" class="SignUpbtn btn btn-primary" onClick={handleClick} >Submit</button>

                                    <Link to="/adminlogin">already have an account? Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Signcolumn2 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}