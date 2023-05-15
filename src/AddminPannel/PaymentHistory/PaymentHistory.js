import React from "react";
import './PaymentHistory.css'
import AdminNavigationBar from "../NevigatinBar";

export default function PaymentHistoryPage() {

  const [message, setMessage] = React.useState(true);

  const chooseMessage = (message) => {
    setMessage(message);
  }
  return (
    <>
      <AdminNavigationBar chooseMessage={chooseMessage} />
      <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
        <div className="visaContainer">
          Payment
        </div>
      </div>
    </>
  )

}