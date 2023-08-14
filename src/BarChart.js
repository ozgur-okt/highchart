import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = () => {
    
  const data = [
    { name: 'Bar 1', value: 5, target: 8 },
    { name: 'Bar 2', value: 6, target: 6 },
    { name: 'Bar 3', value: 3, target: 7 },
  ];

  const dataWithStatus = data.map(item => ({
    ...item,
    reachedTarget: item.value >= item.target,
  }));

  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bar Chart with Target Values',
    },
    xAxis: {
      categories: data.map(item => item.name),
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        name: 'Value',
        data: data.map(item => item.value),
        color: 'blue',
      },
      {
        name: 'Target',
        type: 'line',
        data: data.map(item => item.target),
        color: 'orange',
      },
    ],
    plotOptions: {
      column: {
        colorByPoint: true,
        colors: dataWithStatus.map(item => (item.reachedTarget ? 'red' : 'blue')),
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
