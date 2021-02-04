import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { BarBorder } from "./BarChart.style";
import { useSelector } from "react-redux";

const BarChart = ({ labels, bardata, bardata2 }) => {
  const { chart_data } = useSelector((state) => state.chart);
  const labels_list = [];
  const data_list = [];

  for (let key in chart_data) {
    labels_list.push(`${key}`);
    data_list.push(`${chart_data[key]}`);
  }

  const data = {
    labels: labels_list,
    datasets: [
      {
        label: labels,
        backgroundColor: "#004d61",
        borderColor: "#004d61",
        borderWidth: 2,
        hoverBackgroundColor: "#5bd1d7",
        hoverBorderColor: "#004d61",
        data: data_list,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 50,
          },
        },
      ],
    },
  };

  return (
    <BarBorder>
      <Bar data={data} width={500} height={500} options={options} />
    </BarBorder>
  );
};

export default BarChart;
