import React, { useEffect } from "react";
import { ChartPageBody, CircleBorder, BarBorder } from "./ChartPage.style";
import BarChart from "../../components/BarChart/BarChart";
import CircleChart from "../../components/CircleChart/CircleChart";
import { useDispatch, useSelector } from "react-redux";
import { CHART_DATA_REQUEST } from "../../reducers/chart";

const ChartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect1");
    dispatch({
      type: CHART_DATA_REQUEST,
    });
  }, []);

  return (
    <ChartPageBody>
      <CircleBorder>
        <CircleChart />
      </CircleBorder>
      <BarBorder>
        <BarChart />
      </BarBorder>
    </ChartPageBody>
  );
};

export default ChartPage;
