import { Image } from "./image";
import { Bar } from "react-chartjs-2";
import { useEffect } from "react";
import Chart from 'chart.js/auto';
export const Gallery = (props) => {

  // useEffect(() => {
  //   data1()
  // },[])

  const data = {
    labels: ["Afghanistan", "Bangladesh","Bhutan", "India","Iran", "Maldives" ,"Nepal", "Pakistan","Sri Lanka"],
    datasets: [
      {
        label: 'Annual Global Food Waste (2020)',
        data: [3109153,10618233, 60000,68760163,5884842,37688,2249412,15947645,1617738],
        year:["Afghanistan", "Bangladesh","Bhutan", "India","Iran", "Maldives" ,"Nepal", "Pakistan","Sri Lanka"],
        weight:[3109153,10618233, 60000,68760163,5884842,37688,2249412,15947645,1617738],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Statistics</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        {/* <div className='row'> */}
          {/* <div className='portfolio-items'> */}
            {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'} */}
            
            <div style={{ height: "500px" }} className="chart-sec">
          <Bar
            data={data}
            // plugins={[ChartDataLabels]}
            // options={{
            //   responsive: true,
            //   maintainAspectRatio: false,
            //   responsiveAnimationDuration: 500,
            //   indexAxis: "y",

            //   plugins: {
            //     title: {
            //       display: true,
            //     },
            //     legend: {
            //       display: false,
            //       position: "right",
            //     },
            //   },
            //   scales: {
            //     yAxes: [{ ticks: { mirror: true } }],
            //   },
            // }}
          />
        </div>
          </div>
        </div>
      // </div>
  )
}
