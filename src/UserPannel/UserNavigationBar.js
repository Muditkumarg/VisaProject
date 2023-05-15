import React from "react";
import './UserNavigationBar.css'
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import SideBarPage from "./UserSideBar";

export default function UserNavigationBar({ chooseMessage }) {

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
            <a class="navbar-brand" href="#">Visa</a>
            <div onClick={handleClick} className={`${showSideBar ? 'menu' : 'closedMenu'}`} >
              <AiOutlineMenu ></AiOutlineMenu>
            </div>

            {/* <button class="log-btn btn btn-outline-success" onClick={() => { nevigate('/') }} type="submit">Logout</button>  */}
         
          <li class="userNavBarList nav-item dropdown">
          </li>
    <a class="profileStyle nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Profile</a>
    <ul class="ProfileUl dropdown-menu">
      <li ><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>

  </div>
        </nav>
        <SideBarPage showSideBar={showSideBar} />
        
      </div>
     
    </>
  )
}