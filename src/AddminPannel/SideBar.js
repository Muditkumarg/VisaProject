import React from "react";
import './SideBar.css';
import { BsFillPersonPlusFill, BsCash } from "react-icons/bs";
import { TbBrandCashapp, TbReportSearch } from "react-icons/tb";
import { SiVisa } from "react-icons/si";
import { GiExpense } from "react-icons/gi";
import {GoDashboard} from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";


export default function SideBarPage({showSideBar}){

const nevigate = useNavigate();

const adminEmail = localStorage.getItem('adminEmail')
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
            <div className="flexContainer">
              <BsCash/>
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
              <div  className="flexContainer" onClick={()=>{nevigate('/dashboard',{state:[adminEmail,"Admin"]} )}} >
              <GoDashboard/>
              Dashboard
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/applyvisa', {state: [adminEmail,"Admin"]})}}>
                <SiVisa/>
                Apply Visa and upload documents
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/order',{state:[adminEmail,"Admin"]})}}>
                <BsCash />
                <div>Order</div>
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/paymenthistory' ,{state:[adminEmail,"Admin"]})}}>
                <BsCash/>
                <div>Payment History</div>
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/services',{state:[adminEmail,"Admin"]})}}>
                <BsCash />
                <div>Services</div>
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/servicespackage',{state:[adminEmail,"Admin"]})}}>
                <BsCash/>
                <div>Services Package</div>
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/agentmanagement',{state:[adminEmail,"Admin"]})}}>
                <BsCash/>
                <div>Agent Management</div>
              </div>
              <div className="flexContainer" onClick={()=>{nevigate('/usermanagement',{state:[adminEmail,"Admin"]})}}>
                <BsCash/>
                <div>User Management</div>
              </div>
             

            
            </div>
          </div>
        )
      )}
        </>
    )
}