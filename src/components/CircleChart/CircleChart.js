import React from "react";
import "./CircleChart.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";

const CircleChart = () => {
  const { user_count } = useSelector((state) => state.chart);
  return (
    <div>
      <center>
        <div className="circle_user">참여수 : {user_count}</div>
      </center>
      <div className="circle_chart">
        <CircularProgressbar
          value={10}
          text={`${10} %`}
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
