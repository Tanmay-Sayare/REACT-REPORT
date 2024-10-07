import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

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

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h1>Grouped Bar Graph: Profit and Losses by Year</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Year"
          value={inputYear}
          onChange={(e) => setInputYear(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Profit"
          value={inputProfit}
          onChange={(e) => setInputProfit(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Loss"
          value={inputLoss}
          onChange={(e) => setInputLoss(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default App;
