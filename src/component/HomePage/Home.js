import React from "react";
import './Home.css';
import { GrLocation } from "react-icons/gr"
import { AiOutlineLaptop } from "react-icons/ai"
import { SiQuicklook } from "react-icons/si"
import { GiCommercialAirplane, GiClockwork } from "react-icons/gi"
import { BsFiletypeDocx } from "react-icons/bs"
import LandingPage from "../LandingPage/Landing";

export default function HomePage() {

    
    return (
        <>
            <div className="main-style">
                <div class="searchPannel container">
                    <div class="row ">
                    <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div class="input-group mb-3">
                                <span class="icon-location input-group-text" id="basic-addon1"> <GrLocation className="locationIcon" /></span>
                                <input type="text" class="search-style form-control shadow-none" placeholder="I am looking for a visa to" aria-label="Username" aria-describedby="basic-addon1"></input>
                                <button type="button" class="gobutton-style btn-primary">Go</button>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        </div>
                        <div class="visaThemePannel container text-center">
                            <div class="visaThemePannelRow row ">
                                <div class="col1 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4">
                                    <AiOutlineLaptop className="applyOnlineIcon" />
                                    APPLY ONLINE
                                </div>
                                <div class="col1 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4">
                                    <SiQuicklook className="applyOnlineIcon" />
                                    quick & EASY
                                </div>
                                <div class="col1 col-xl-2 col-lg-2 col-md-4 col-sm-4 col-xs-4">
                                    <GiCommercialAirplane className="applyOnlineIcon" />
                                    OK TO BOARD
                                </div>
                                <div class="col1 col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
                                    <GiClockwork className="applyOnlineIcon" />
                                    VISA IN 5 DAYS
                                </div>
                                <div class="col1 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <BsFiletypeDocx className="applyOnlineIcon" />
                                    PICK UP & DROP DOCCUMENT
                                </div>
                            </div>
                        </div>
                        <div class="visaTrack container" >
                            Already applied ?
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class=" btn btn-light">TRACK YOUR VISA</button>

                            <div class="trackModalStyle modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="trackModalPannel modal-dialog">
                                    <div class="trackModalContaner modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Track your Visa</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <div>
                                                <div class="mb-3">
                                                    <input class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                                </div>
                                                <div class="mb-3">
                                                    <input class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            <LandingPage/>
            </>
            )
}