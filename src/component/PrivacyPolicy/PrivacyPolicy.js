import privacyPolicy from './PrivacyPolicy.json'

import { useState } from "react";

export default function PrivacypolicyPage() {
  const [getPrivacyData, setPrivacyData] = useState(privacyPolicy);

  return (
    <>
      <section className="terms-section">
        <div className="container terms-content mt-5">
          <div className="row mb-4">
            <h3>Privacy Policy</h3>
            <p>
              <span>
                Home <i className="fas fa-angle-right fa-xs"></i>{" "}
              </span>{" "}
              <span>
                Privacy<i className="fas fa-angle-right fa-xs"></i>
              </span>{" "}
              <span>
                Default <i className="fas fa-angle-right fa-xs"></i>
              </span>
            </p>
          </div>
          <div className="row mb-4">
            {getPrivacyData.map((data, index) => {
              return (
                <div key={index} className="item">
                  <div className="row mb-4">
                    <p>{data.privacyMainText}</p>
                    <p>{data.privacyMainSubText}</p>
                    <div className="row">
                      <ul style={{ paddingLeft: "2em" }}>
                        {data.informationWecollect.listItem.map(
                          (listData, index) => {
                            return <li key={index}>{listData}</li>;
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <h5>{data.howWeProtectInfo.title}</h5>
                    <p>{data.howWeProtectInfo.subText}</p>
                    <p>{data.howWeProtectInfo.subMoreText}</p>
                  </div>

                  <div className="row mb-4">
                    <h5>{data.howWeUseInfo.title}</h5>
                    <p>{data.howWeUseInfo.subText}</p>
                    <p>{data.howWeUseInfo.subMoreText}</p>
                  </div>

                  <div className="row mb-4">
                    <h5>{data.whomWeShareInfo.title}</h5>
                    <p>{data.whomWeShareInfo.subText}</p>
                    <div className="row">
                      <ul style={{ paddingLeft: "2em" }}>
                        {data.whomWeShareInfo.listItem.map(
                          (listData, index) => {
                            return <li key={index}>{listData}</li>;
                          }
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <h5>{data.weShareYourInfo.title}</h5>
                    <p>{data.weShareYourInfo.subText}</p>
                    <ul style={{ paddingLeft: "2em" }}>
                      {data.weShareYourInfo.listItem.map((listData, index) => {
                        return <li key={index}>{listData}</li>;
                      })}
                    </ul>
                  </div>

                  <div className="row mb-4">
                    <h5>{data.youCanAccessYourInfo.title}</h5>
                    <p>{data.youCanAccessYourInfo.subText}</p>
                  </div>

                  <div className="row mb-4">
                    <h5>{data.onYourChoiceWeUseInfo.title}</h5>
                    <p>{data.onYourChoiceWeUseInfo.subText}</p>
                    <ul style={{ paddingLeft: "2em" }}>
                      {data.onYourChoiceWeUseInfo.listItem.map((listData, index) => {
                        return <li key={index}>{listData}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="row mb-4">
                    <h5>{data.childrenPolicy.title}</h5>
                    <p>{data.childrenPolicy.subText}</p>
                  </div>
                  <div className="row mb-4">
                    <h5>{data.externalLinks.title}</h5>
                    <p>{data.externalLinks.subText}</p>
                  </div>
                  <div className="row mb-4">
                    <h5>{data.changeThisPolicy.title}</h5>
                    <p>{data.changeThisPolicy.subText}</p>
                  </div>
                  <div className="row mb-4">
                    <h5>{data.howYouContactUs.title}</h5>
                    <p>{data.howYouContactUs.subText}</p>
                    <p>{data.howYouContactUs.subMoreText}</p>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
