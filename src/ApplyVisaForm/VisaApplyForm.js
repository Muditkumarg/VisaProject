import React, { useEffect, useState } from "react";
import './VisaApplyForm.css';
import ApplicationTabPage from "./ApplicationTab";
import { useLocation } from "react-router-dom";

export default function VisaApplyFormPage() {

    const location = useLocation();

    const applyKeys = location.state;

  const [multistepform, setMultiStepForm] = useState(1);
  
  const multiStepHandle = (steps) => {
    setMultiStepForm(steps);
  };
  const [tabdisabled, setTabDisabled] = useState(true);
  let authVal = localStorage.getItem("firstStepAuth");
  useEffect(() => {
    setTabDisabled(authVal);
  });

  return (
    <>
      <section className="applyMultiStep-form">
        <div className="container">
          <div className="row mt-4">
            <p className="text-center">
              SELECT THE TYPE OF APPLICATION AND PROCEED AND FILL INFORMATION
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 ">
              <div className="row d-flex pt-2 justify-content-around text-center align-item-center border">
                <div className="col-md-3 mutliStepTab">
                  <h6
                    onClick={() => {
                      multiStepHandle(1);
                    }}
                    className={multistepform === 1 ? "Active text-white" : ""}
                  >
                    APPLICATION
                  </h6>
                </div>

                <div className="col-md-3 mutliStepTab">
                  {tabdisabled === "true" ? (
                    <h6
                      onClick={() => {
                        multiStepHandle(2);
                      }}
                      className={multistepform === 2 ? "Active text-white" : ""}
                    >
                      PREVIEW
                    </h6>
                  ) : (
                    <h6 className="text-dark disabledTab" disabled title="Your form not submitted!">
                      PREVIEW
                    </h6>
                  )}
                </div>
                <div className="col-md-3 mutliStepTab">
                  {tabdisabled === "true" ? (
                    <h6
                      onClick={() => {
                        multiStepHandle(3);
                      }}
                      className={multistepform === 3 ? "Active text-white" : ""}
                    >
                      PAYMENT
                    </h6>
                  ) : (
                    <h6 className="text-dark  cursor-not-allowed" disabled>
                      PAYMENT
                    </h6>
                  )}
                </div>
                <div className="col-md-3 mutliStepTab">
                  {tabdisabled === "true" ? (
                    <h6
                      onClick={() => {
                        multiStepHandle(4);
                      }}
                      className={multistepform === 4 ? "Active text-white" : ""}
                    >
                      COMPLETE
                    </h6>
                  ) : (
                    <h6 className="text-dark  cursor-not-allowed" disabled>
                      COMPLETE
                    </h6>
                  )}
                </div>
              </div>
              <div className="row border mb-4">
                <div className="col-md-12">
                  {(() => {
                    switch (multistepform) {
                      case 1:
                        return (
                          <>
                            <ApplicationTabPage  applyKeys={applyKeys} />
                          </>
                        );
                      case 2:
                        return (
                          <p className="text-center p-5">No data available !</p>
                        );
                      case 3:
                        return <p className="text-center p-5">No payment !</p>;
                      case 4:
                        return (
                          <p className="text-center p-5">
                            Your form not completed !
                          </p>
                        );
                      default:
                        return null;
                    }
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
