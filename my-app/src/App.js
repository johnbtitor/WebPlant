import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import './App.css'; // Import the CSS file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

function App() {
  const [data, setData] = useState({ temperature: '', humidity: '', light: '' });
  const [history, setHistory] = useState({ temperature: [], humidity: [], light: [] });
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const tempWs = new WebSocket('ws://127.0.0.1/ws'); // Placeholder IP

    tempWs.onopen = () => {
      console.log('Temporary WebSocket connection opened');
    };

    tempWs.onmessage = (event) => {
      console.log('Received data from temporary WebSocket:', event.data);
      try {
        const receivedData = JSON.parse(event.data);
        console.log('Parsed JSON:', receivedData);
        setData(receivedData);

        if (receivedData.ip) {
          updateWebSocketConnection(receivedData.ip);
        }

        // Update history state with new data
        setHistory(prevHistory => ({
          temperature: [...prevHistory.temperature, { x: new Date(), y: receivedData.temperature }],
          humidity: [...prevHistory.humidity, { x: new Date(), y: receivedData.humidity }],
          light: [...prevHistory.light, { x: new Date(), y: receivedData.light }]
        }));
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    };

    tempWs.onerror = (error) => {
      console.error('Temporary WebSocket error:', error);
    };

    tempWs.onclose = () => {
      console.log('Temporary WebSocket connection closed');
    };

    return () => {
      tempWs.close();
    };
  }, []);

  const updateWebSocketConnection = (ip) => {
    if (ws) {
      ws.close();
    }

    const newWs = new WebSocket(`ws://${ip}/ws`);

    newWs.onopen = () => {
      console.log('WebSocket connection opened');
    };

    newWs.onmessage = (event) => {
      console.log('Received data:', event.data);
      try {
        const receivedData = JSON.parse(event.data);
        console.log('Parsed JSON:', receivedData);
        setData(receivedData);

        // Update history state with new data
        setHistory(prevHistory => ({
          temperature: [...prevHistory.temperature, { x: new Date(), y: receivedData.temperature }],
          humidity: [...prevHistory.humidity, { x: new Date(), y: receivedData.humidity }],
          light: [...prevHistory.light, { x: new Date(), y: receivedData.light }]
        }));
      } catch (error) {
        console.error('Failed to parse JSON:', error);
      }
    };

    newWs.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newWs.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setWs(newWs);
  };

  const temperatureData = {
    datasets: [{
      label: 'Temperature (°C)',
      data: history.temperature,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
  };

  const humidityData = {
    datasets: [{
      label: 'Humidity (%)',
      data: history.humidity,
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
    }]
  };

  const lightData = {
    datasets: [{
      label: 'Light Intensity (lux)',
      data: history.light,
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    }]
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute'
        }
      },
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h1>Plant Surveillance System</h1>
      <p>Temperature: {data.temperature} °C</p>
      <p>Humidity: {data.humidity} %</p>
      <p>Light Intensity: {data.light} lux</p>
      
      <div className="charts-container">
        <div className="chart">
          <h2>Temperature Over Time</h2>
          <Line data={temperatureData} options={options} />
        </div>
        
        <div className="chart">
          <h2>Humidity Over Time</h2>
          <Line data={humidityData} options={options} />
        </div>
        
        <div className="chart">
          <h2>Light Intensity Over Time</h2>
          <Line data={lightData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default App;

