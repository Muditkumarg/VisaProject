import React from "react";
import './AgentNavigationBar.css'
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import AgentSideBarPage from "../AgentSideBar/AgentSidebar";
import { useLocation } from "react-router-dom";



export default function AgentNavigationBar({ chooseMessage }) {

  const location = useLocation();
  const email = location.state

  console.log(email)
  const nevigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(true);
  
  const handleClick= () =>{
    
    setShowSideBar(!showSideBar)
    chooseMessage(!showSideBar)

  }
  return (
    <>
      <div className="NavStyle">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">

          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <div onClick={handleClick} className={`${showSideBar ? 'menu' : 'closedMenu'}`} >
              <AiOutlineMenu ></AiOutlineMenu>
            </div>
{/* 
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      </div>
      
            <button class="log-btn btn btn-outline-success" onClick={() => { nevigate('/') }} type="submit">Logout</button> */}
          </div>
        </nav>
        <AgentSideBarPage  showSideBar={showSideBar} />

        
      </div>
     
    </>
  )
}