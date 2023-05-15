import React from "react";
import './ApplyVisa.css'
import AgentNavigationBar from "../AgentNavigationBar/AgentNavigationBar";
import VisaApplyFormPage from "../../ApplyVisaForm/VisaApplyForm";
export default function AgentApplyVisaPage() {

  const [message, setMessage] = React.useState(true);

  const chooseMessage = (message) => {
    setMessage(message);
  }
  return (
    <>
      <AgentNavigationBar chooseMessage={chooseMessage} />
      <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
        <div className="visaContainer">
        <VisaApplyFormPage  />
        </div>
      </div>
    </>
  )

}