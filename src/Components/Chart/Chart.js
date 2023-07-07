import "./Chart.css";
import React from "react";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((i) => {
        return (
          <ChartBar
            key={i.label}
            value={i.value}
            maxValue={totalMaximum}
            label={i.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
