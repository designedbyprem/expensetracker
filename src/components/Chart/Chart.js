import React from "react";
import '../Chart/Chart.css';
import ChartBar from './ChartBar';


const Chart = props => {

    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

        return <div className = "chart" > {
                props.dataPoint.map(dataPoints => 
                < ChartBar 
                    key={dataPoints.label}
                    value = {dataPoints.value}
                    maxValue = {totalMaximum}
                    label = {dataPoints.label}
                    />)} 
                    </div>
                };

 export default Chart;