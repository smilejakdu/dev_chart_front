import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ labels, linedata }) => {

  for (const data of linedata) {
    if (data === 0) {
      svgdata.splice(svgdata.indexOf(0), 1, NaN);
    }
  }

  const data = {
    labels: ['', ...labels , ''],
    datasets: [
      {
        label: "linedata",
        fill: false,
        lineTension: 0.1,
        borderColor: '#304d91',
        borderCapStyle: 'butt',
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBackgroundColor: '#304d91',
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: '#304d91',
        pointHoverBorderColor: '#304d91',
        pointRadius: 5,
        pointHitRadius: 5,
        data: linedata,
      },
    ],
  };
  const lineOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  return (
    <div>
      <Line data={data} options={lineOptions} />
    </div>
  );
};

export default LineChart;
