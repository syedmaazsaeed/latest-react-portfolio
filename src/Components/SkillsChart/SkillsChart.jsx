import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import './SkillsChart.css';

// Register the radar chart components
ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
  datasets: [
    {
      label: 'Skills',
      data: [90, 80, 85, 70, 75, 60],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    ticks: {
      beginAtZero: true,
    },
  },
};

const SkillsChart = () => (
  <div className="skills-chart">
    <h3>My Skills</h3>
    <Radar data={data} options={options} />
  </div>
);

export default SkillsChart;
