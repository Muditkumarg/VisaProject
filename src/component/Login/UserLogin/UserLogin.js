import React, { useState } from "react";
import './UserLogin.css'
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

export default function UserLoginPage() {

    const nevigate = useNavigate();
    // const initialState = {email:" ",password:" ", confirmpassword:" "}

    const [data,setData] = useState("");
    const [error, setError] = useState({});

    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]: value})
    }

    const email = data.email

    const loginSubmit=()=>{

        axios.post("http://localhost:4000/api/userlogin",data).then((res)=>{
            const {message,success} = res.data;
            
            if(success){
                alert(
                    message,
                    nevigate('/userdashboard'),
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
            error.email = "email required"
        }
      if(!value.password){
            error.password = "password required" 
        }
       if(!value.confirmpassword){
            error.confirmpassword = "Re-confirm password required"
        }
       else if(value.password !== value.confirmpassword){
            error.matchedPassword = "password not matched"
        }
        else {
            loginSubmit()
        }
        
        setError(error)
    }

    const handleClick = ()=>{
        validation(data)
    }
    return (
        <>
            <div class="">
                <div class="loginPnnel row ">
                    <div class="loginCol col-xl-4  col-lg-4  col-md-4 col-sm-12 col-xs-12 loginColumn">
                        <div className="loginBg">
                            <div className="formTop">
                                <h1>Login form</h1>
                            </div>
                            <div className="formBottum">
                                <h3 className="loginHeading" >User Login</h3>
                            <div class="mb-3">
                                <input  class="inputStyle form-control" name="email" placeholder="email" onChange={handleChange}></input>
                                <div className="errorStyle">
                                <p className="validation">{error.email}</p>
                                </div>
                                <input type="password"  class="inputStyle form-control" name="password"  placeholder="password" onChange={handleChange} ></input>
                                <p className="validation">{error.password}</p>
                                <input type="password"  class="inputStyle form-control" name="confirmpassword"  placeholder="Re-confirm password" onChange={handleChange} ></input>
                                <p className="validation">{error.confirmpassword}</p>
                                <p className="validation">{error.matchedPassword}</p>
                                <button type="button" class="loginbtn btn btn-primary" onClick={handleClick} >Sign In</button>
                               
                                <Link to="/usersignup">Need an account? SignUp</Link>
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