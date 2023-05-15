import React from "react";
// import './SideBar.css';
import { BsFillPersonPlusFill, BsCash } from "react-icons/bs";
import { TbBrandCashapp, TbReportSearch } from "react-icons/tb";
import { SiVisa } from "react-icons/si";
import { GiExpense } from "react-icons/gi";
import {GoDashboard} from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";

export default function SideBarPage({showSideBar}){

const nevigate = useNavigate();

const email = localStorage.getItem('email')


    return(
        <>
        
         {showSideBar === false ? (
        <div>
          <div className="sideBarContainer">
            <div className="flexContainer" >
             <GoDashboard/>
            </div>
           
          </div>
        </div>
      ) : (
        showSideBar && (
          <div>
            <div className="sidebar-style"  >
              <div  className="flexContainer" onClick={()=>{nevigate('/userdashboard',{state:[email,"User"]})}} >
              <GoDashboard />
              Dashboard
              </div>
            </div>
          </div>
        )
      )}
        </>
    )
}