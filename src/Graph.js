// Graph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ graphData }) => {
  return (
    <div className="graph-container" style={{ width: '100%', height: '400px' }}>
      {graphData && graphData.labels && (
        <>
          <h3>Graph</h3>
          <Line data={graphData} />
        </>
      )}
    </div>
  );
};

export default Graph;
