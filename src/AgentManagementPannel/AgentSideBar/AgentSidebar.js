import React from "react";
import './AgentSidebar.css';
import { BsFillPersonPlusFill, BsCash } from "react-icons/bs";
import { TbBrandCashapp, TbReportSearch } from "react-icons/tb";
import { SiVisa } from "react-icons/si";
import { GiExpense } from "react-icons/gi";
import {GoDashboard} from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";

export default function AgentSideBarPage({showSideBar},){

const nevigate = useNavigate();
const email = localStorage.getItem('email')
console.log(email)

    return(
        <>
        
         {showSideBar === false ? (
        <div>
          <div className="sideBarContainer">
            <div className="flexContainer" >
             <GoDashboard/>
            </div>
            <div className="flexContainer">
              <SiVisa />
            </div>
            <div className="flexContainer">
              <BsCash/>
           
          </div>
          </div>
        </div>
      ) : (
        showSideBar && (
          <div>
            <div className="sidebar-style"  >
              <div  className="flexContainer" onClick={()=>{nevigate('/agentdashboard',{state:[email,"Agent"]} )}} >
              <GoDashboard />
              Dashboard
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/agentapplyvisa',{state:[email,"Agent"]})}}>
                <SiVisa />
                Apply Visa and upload documents
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/agentorder',{state:[email,"Agent"]})}}>
                <BsCash />
                <div>Order</div>
              </div>
            </div>
          </div>
        )
      )}
        </>
    )
}