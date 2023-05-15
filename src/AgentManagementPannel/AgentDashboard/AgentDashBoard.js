import React, { useState } from "react";
import './AgentDashBoard.css'
import AgentNavigationBar from "../AgentNavigationBar/AgentNavigationBar";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import FooterPage from "../../Footer/footer";
import { useLocation } from "react-router-dom";

export default function AgentDashboardPage() {

  const location = useLocation();

  console.log(location.state)
  const email = location.state
  console.log(email)

  const [message, setMessage] = React.useState(true);

  const chooseMessage = (message) => {
    setMessage(message);
  }
  const BarChartData = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Success', 'Panding', 'Rejected']
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45,]
      }
    ]
  };
  const [barData, setBarData] = useState(BarChartData)

  const donutChartData = {

    series: [44, 55, 13],
    options: {
      labels: ['Success', 'Rejected', 'Panding'],
      chart: {
        width: 380,
        type: 'donut',
      },
      dataLabels: {
        enabled: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      }
    },
  };

  const [donutData, setDonutData] = useState(donutChartData)

  return (
    <>

      <AgentNavigationBar  chooseMessage={chooseMessage} />
      <div className={`${message ? 'dashPannel' : 'closeDashPannel'}`}>
        <div className="contentStyle">
          <div class="dashContainer  ">
            <div class="row row-cols-1 g-4">
              <div class=" col-xl-7 col-sm-12 col-md-12 col-xs-12">
                <div class="dashCardStyle card">
                  <div class="card-body dashBody">
                    <div className="mixed-chart">
                      <Chart className="barChartStyle"
                        options={barData.options}
                        series={barData.series}
                        type="bar"
                      // width="680"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="  col-xl-5 col-sm-12 col-md-12 col-xs-12 ">
                <div class="dashCardStyle card">
                  <div class="card-body dashBody">
                    <div class="chart-wrap">
                      <div id="chart">
                        <ReactApexChart options={donutChartData.options} labels={donutChartData.options.labels} series={donutChartData.series} type="donut" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="  col-xl-12 col-sm-12 col-md-12 col-xs-12 ">
                <div class="dashCardStyle card">
                  <div class="card-body tableBody">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Sr.No</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Contact no.</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>mark@gmail.com</td>
                          <td>9825656523</td>
                          <td>Success</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>jacop@gmail.com</td>
                          <td>9825656596</td>
                          <td>Success</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td colspan="2">Larry </td>
                          <td>larry@twitter.com</td>
                          <td>9625656596</td>
                          <td>Panding</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td >john</td>
                          <td >deo</td>
                          <td>john@gamil.com</td>
                          <td>9625656596</td>
                          <td>Rejected</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterPage/>
      </div>
    </>
  )
}
