import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { historyOptions } from '../chartConfigs/chartConfigs';

export const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, month, year, detail } = data;

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: `${detail.name} Price`,
              data: day,
              backgroundColor: 'rgba(174, 305, 194, 0.5)',
              borderColor: 'rgba(174, 305, 194, 0.4',
              borderWidth: 1,
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <div>
          <p className="my-0">Current Value: ${detail.current_price.toFixed(2)}</p>
          <p className={detail.price_change_24h < 0 ? 'text-danger my-0' : 'text-success my-0'}>
            Change: {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      );
    }
  };
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width="250" height="250"></canvas>
      </div>
    </div>
  );
};
