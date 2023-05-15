import React, { useState } from "react";
import './AgentLogin.css'
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

export default function AgentLoginPage() {

    const nevigate = useNavigate();

    const [data,setData] = useState(" ");
    const [error, setError] = useState({});

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]: value})
    }

    const loginSubmit=()=>{
        // console.log(data.email)
        const email = data.email;

        axios.post("http://localhost:4000/api/agentlogin",data).then((res)=>{
            const {message,success} = res.data;
            
            if(success){
                alert(
                    message,
                    nevigate('/agentdashboard') ,
                    localStorage.setItem('email',email),
                )
            }else{
                alert(message)
            }
        })
    }

    const validation = (value)=>{
        let error = {};
        if(!value.email){
            error.email = "username required"
        }
        if(!value.password){
            error.password = "password required"
           
        }else{
           loginSubmit();
        }
        setError(error)
    }

    const handleClick = ()=>{
        validation(data)
    }
    return (
        <>
            <div class="">
                <div class="row loginPnnel">
                    <div class="col-xl-4  col-lg-4  col-md-4 col-sm-12 col-xs-12 loginColumn">
                        <div className="loginBg">
                            <div className="formTop">
                                <h1>Login form</h1>
                            </div>
                            <div className="formBottum">
                                <h3 className="loginHeading" >Agent Login</h3>
                            <div class="mb-3">
                                <input  class="inputStyle form-control" name="email" placeholder="email" onChange={handleChange}></input>
                                <div className="errorStyle">
                                <p className="validation">{error.email}</p>
                                </div>
                                <input type="password"  class="inputStyle form-control" name="password"  placeholder="password" onChange={handleChange} ></input>
                                <p className="validation">{error.password}</p>
                                <button type="button" class="loginbtn btn btn-primary" onClick={handleClick} >Submit</button>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="column2 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}