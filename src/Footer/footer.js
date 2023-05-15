import React from "react";
import { useNavigate } from "react-router-dom";


export default function FooterPage(){

    const nevigate = useNavigate();

    return(
        <>
        <div  class="footer container">
                <div class="row align-items-start">
                    <div onClick={()=>{nevigate('/about')}} class="footerPannel ">
                        About
                    </div>
                    <div onClick={()=>{nevigate('/contact')}} class="footerPannel">
                        Contacts
                    </div>
                    <div onClick={()=>{nevigate('/')}} class="footerPannel">
                        Home
                    </div>
                </div>
                </div>
        </>
    )
}