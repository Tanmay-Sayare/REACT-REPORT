import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const App = () => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [inputLabel, setInputLabel] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleAddData = () => {
    if (inputLabel && inputValue) {
      setLabels([...labels, inputLabel]);
      setValues([...values, parseFloat(inputValue)]);
      setInputLabel('');
      setInputValue('');
    }
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'User Data',
        data: values,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <h1>Bar Graph with User Input</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Label"
          value={inputLabel}
          onChange={(e) => setInputLabel(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default App;
