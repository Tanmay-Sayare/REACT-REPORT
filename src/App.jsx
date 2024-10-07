import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import './App.css'; // Import the CSS file

const App = () => {
  const [years, setYears] = useState([]);
  const [profits, setProfits] = useState([]);
  const [losses, setLosses] = useState([]);
  const [inputYear, setInputYear] = useState('');
  const [inputProfit, setInputProfit] = useState('');
  const [inputLoss, setInputLoss] = useState('');

  const handleAddData = () => {
    if (inputYear && inputProfit && inputLoss) {
      setYears([...years, inputYear]);
      setProfits([...profits, parseFloat(inputProfit)]);
      setLosses([...losses, parseFloat(inputLoss)]);
      setInputYear('');
      setInputProfit('');
      setInputLoss('');
    }
  };

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Profits',
        data: profits,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Losses',
        data: losses,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
      <h1 className="title">Grouped Bar Graph: Profit and Losses by Year</h1>
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
          <label htmlFor="profit">Profit:</label>
          <input
            type="number"
            id="profit"
            value={inputProfit}
            onChange={(e) => setInputProfit(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="loss">Loss:</label>
          <input
            type="number"
            id="loss"
            value={inputLoss}
            onChange={(e) => setInputLoss(e.target.value)}
          />
        </div>
        <button className="add-button" onClick={handleAddData}>
          Add Data
        </button>
      </div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default App;
