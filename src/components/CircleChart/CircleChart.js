import React from "react";
import "./CircleChart.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";

const CircleChart = () => {
  const { python_user_count, user_count } = useSelector((state) => state.chart);

  return (
    <div>
      <center>
        <div className="circle_user">user_count : {user_count}</div>
      </center>
      <div className="circle_chart">
        <CircularProgressbar
          value={python_user_count}
          text={`python : ${python_user_count} %`}
          circleRatio={0.9} // 사이즈
          styles={buildStyles({
            rotation: 0 / 1 / 9,
            strokeLinecap: "butt",
            trailColor: "#e7e4de",
          })}
        />
      </div>
    </div>
  );
};

export default CircleChart;
