import React from "react";
import './Usermanagement.css'
import AdminNavigationBar from "../NevigatinBar";

export default function UserManagementPage() {

  const [message, setMessage] = React.useState(true);

  const chooseMessage = (message) => {
    setMessage(message);
  }
  return (
    <>
      <AdminNavigationBar chooseMessage={chooseMessage} />
      <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
        <div className="visaContainer">
        <div class="col col-xl-12 col-sm-12 col-md-12 col-xs-12 ">
                    <div class="TableCard card">
                        <div class="card-body tableBody">
                            <table class="serviceTable table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr.No</th>
                                        <th scope="col">Date Entered</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Refrence Number</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Application Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {serviceGetData?.map((row) => {
                                            return (
                                                <tr>
                                                    <td >{count++}</td>
                                                    <td className="servicename" value={row.servicename} >{row.servicename}</td>
                                                    <td className="visaprice">{row.visaprice}</td>
                                                   
                                                    <td> 
                                                    </td>
                                                    
                                                    <td>
                                                        <div class="col serviceTableButtonPannel">
                                                        <a className="serviceTableButton" href="/servicespackage">{packageGetData.filter((item)=>item.servicename===row.servicename).length}</a>
                                                            <button data-bs-toggle="modal" data-bs-target="#modaltwo" type="button" class="serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleUpdate}>Add Plan</button>
                                                            <button data-bs-toggle="modal" data-bs-target="#modalone" value={row} type="button" id={row._id} class="serviceTableButton btn btn-outline-primary" onClick={handleUpdate}>Edit</button>
                                                            <button type="button" class="deleteserviceTableButton serviceTableButton btn btn-outline-primary" id={row._id} onClick={handleDelete}>Delete</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                        } */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </>
  )

}