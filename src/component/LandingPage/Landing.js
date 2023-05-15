import React, { useEffect, useState } from "react";
import './Landing.css'
import { Link } from "react-router-dom";
import FooterPage from "../../Footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LandingPage() {

    const [serviceGetData, setServiceGetData] = useState();
   const [packageData,setPackageData] = useState()
   

    const nevigate = useNavigate();
    

    const handleClick = (e) => {
        const id = e.target.getAttribute("id");
        const label = document.getElementById(id).getAttribute('value')

        axios.post(`http://localhost:4000/api/getservicepackagebyname/${label}`).then((res) => {
            setPackageData(res.data)

            axios.post(`http://localhost:4000/api/getservicebyname/${label}`).then((res1) => {

             nevigate('/visaonline', {state:[res1.data,res.data]} )
            // console.log([res1.data, res.data])
    })
            
        })
    }
  
// console.log(packageData)
    const serviceGetApi = () => {

        axios.get("http://localhost:4000/api/getservice").then((res) => {
            setServiceGetData(res.data)
        })

    }

    useEffect(() => {
        serviceGetApi()
    }, [])


    return (
        <>
            <div className="homePannel">
                <div class="cardPnnel container">
                    <div class="row row-cols-1 row-cols-md-3">
                        { serviceGetData?.map((row) => {
                            return (
                                <div class="landingPannel col col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div class="landingCardStyle card">
                                        <div className="container-fluid">
                                            <div class="cardStyle card-body">
                                                <div >
                                                    <img className="cardImage" src={`http://localhost:4000/uploads/${row.country}`} alt="" />
                                                </div>
                                                <div onClick={handleClick}  value={row.servicename} id={row.servicename} className="linkStyle">{row.servicename}</div>
                                            </div>
                                            <div className="visaPriceStyle" >
                                                <p class="cardPrice">From Rs </p>
                                                {row.visaprice}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                        }
                       
                    </div>
                    <FooterPage />
                </div>
               
            </div>


        </>
    )
}