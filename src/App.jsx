import React, { useState } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import './App.css'; // Import the CSS file

const App = () => {
  const [years, setYears] = useState([]);
  const [profits, setProfits] = useState([]);
  const [losses, setLosses] = useState([]);
  const [showProfitLine, setShowProfitLine] = useState(true);
  const [inputYear, setInputYear] = useState('');
  const [inputProfit, setInputProfit] = useState('');
  const [inputLoss, setInputLoss] = useState('');

  const handleAddData = () => {
    if (inputYear && inputProfit >= 0 && inputLoss >= 0) {
      setYears([...years, inputYear]);
      setProfits([...profits, parseFloat(inputProfit)]);
      setLosses([...losses, parseFloat(inputLoss)]);
      setInputYear('');
      setInputProfit('');
      setInputLoss('');
    }
  };

  const toggleLineDisplay = () => {
    setShowProfitLine(!showProfitLine);
  };

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Profits',
        data: profits,
        type: 'bar',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Losses',
        data: losses,
        type: 'bar',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      showProfitLine
        ? {
            label: 'Profit Trend',
            data: profits,
            type: 'line',
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            borderWidth: 2,
            fill: false,
          }
        : {
            label: 'Loss Trend',
            data: losses,
            type: 'line',
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.3)',
            borderWidth: 2,
            fill: false,
          },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value (%)',
          font: {
            size: 16,
            weight: 'bold',
          },
        },
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  };

  return (
    <div className="container">
      <h1 className="title">Bar and Line Combination Graph: Profit and Losses by Year</h1>
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            value={inputYear}
            onChange={(e) => setInputYear(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="profit">Profit (%):</label>
          <input
            type="number"
            id="profit"
            value={inputProfit}
            min="0"
            onChange={(e) => setInputProfit(Math.max(0, e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="loss">Loss (%):</label>
          <input
            type="number"
            id="loss"
            value={inputLoss}
            min="0"
            onChange={(e) => setInputLoss(Math.max(0, e.target.value))}
          />
        </div>
        <button className="add-button" onClick={handleAddData}>
          Add Data
        </button>
        <button className="toggle-button" onClick={toggleLineDisplay}>
          {showProfitLine ? 'Show Loss Trend Line' : 'Show Profit Trend Line'}
        </button>
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default App;
