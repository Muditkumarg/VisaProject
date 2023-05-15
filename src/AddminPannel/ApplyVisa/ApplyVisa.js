import React from "react";
import './ApplyVisa.css'
import AdminNavigationBar from "../NevigatinBar";
import VisaApplyFormPage from "../../ApplyVisaForm/VisaApplyForm";

export default function ApplyVisaPage() {

  const [message, setMessage] = React.useState(true);

  const chooseMessage = (message) => {
    setMessage(message);
  }
  return (
    <>
      <AdminNavigationBar chooseMessage={chooseMessage} />
      <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
        <div className="visaContainer">
         <VisaApplyFormPage/>
        </div>
      </div>
    </>
  )

}