import Termsjson from './Termsjson.json'
import './Terms.css'

import { useState } from "react"

export default function TermsPage() {

    const [getTermsData, setTermsData] = useState(Termsjson);


  return (
    
    <>
    <section className="terms-section">
        <div className="container terms-content mt-5">
           <div className="row">
           <h3>Terms Of use</h3>
           <p><span>Home <i className="fas fa-angle-right fa-xs"></i> </span> <span>Terms <i className="fas fa-angle-right fa-xs"></i></span> <span>Default <i className="fas fa-angle-right fa-xs"></i></span></p>
           </div>
           <div className="row">
           {
            getTermsData.map((data, index) =>{
                return(
                   <div key={index} className="item">
                    <p>{data.termsMainText}</p>
                   <div className="row">
                   <h5>{data.useOfWebsite.title}</h5>
                   <p>{data.useOfWebsite.subText}</p>
                  <div className="row">
                  <ul style={{paddingLeft: "2em"}}>
                   
                   {
                    data.useOfWebsite.listItem.map((listData, index) =>{
                        return(
                          <li key={index}>{listData}</li>  
                        )
                    })
                   }
                   </ul>
                   <div className="row">
                    <p>{data.useOfWebsite.subMoreText}</p>
                   </div>
                   
                  </div>
                 
                   </div>
                   <div className="row">
                   <h5>{data.prohibited.title}</h5>
                   <p>{data.prohibited.subText}</p>
                  <div className="row">
                  <ul style={{paddingLeft: "2em"}}>
                   
                   {
                    data.prohibited.listItem.map((listData, index) =>{
                        return(
                          <li key={index}>{listData}</li>  
                        )
                    })
                   }
                   </ul>
                   <div className="row">
                    <p>{data.prohibited.subMoreText}</p>
                   </div>
                   
                  </div>
                 
                   </div>
                   <div className="row">
                   <h5>{data.suppliersRuleRestriction.title}</h5>
                   <p>{data.suppliersRuleRestriction.subText}</p>
                 
                   <div className="row">
                    <p>{data.suppliersRuleRestriction.subMoreText}</p>
                   </div>
                   
                 
                   </div>
                   <div className="row">
                   <h5>{data.paymentPolicy.title}</h5>
                   <p>{data.paymentPolicy.subText}</p>
                   </div>
                   <div className="row">
                   <h5>{data.changeCancellationPolicy.title}</h5>
                   <p>{data.changeCancellationPolicy.subText}</p>
                  <div className="row">
                  <ul style={{paddingLeft: "2em"}}>
                   
                   {
                    data.changeCancellationPolicy.listItem.map((listData, index) =>{
                        return(
                          <li key={index}>{listData}</li>  
                        )
                    })
                   }
                   </ul>
                    <p>{data.changeCancellationPolicy.subMoreText}</p>
                   
                  </div>
                   <div className="row mb-4">
                   <h5>{data.deliveryPolicy.title}</h5>
                   <p>{data.deliveryPolicy.subText}</p>
                    <p>{data.deliveryPolicy.subMoreText}</p>
                 
                   </div>
                 
                   </div>
                   </div>
                )
                
            })
           }
           </div>
           
            
            
        </div>
    </section>
    
    </>
  )
}
