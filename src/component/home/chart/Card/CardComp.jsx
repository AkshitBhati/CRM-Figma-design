import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Card.css";

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to add text in the center of the Doughnut
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: function (chart) {
    const { ctx, chartArea } = chart;
    const text = ["Total", "123456"];
    
    // Calculate text position based on the chart area
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    
    ctx.restore();
    const fontSize = "15px"; // Fixed font size
    const lineHeight = 20; // Adjust line height as needed
    const totalHeight = text.length * lineHeight;
    
    ctx.font = `${fontSize} Roboto`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#000"; // Text color
    
    // Calculate initial Y position
    let y = centerY - totalHeight / 2;
    
    // Draw each line of text
    text.forEach(line => {
      ctx.fillText(line, centerX, y);
      y += lineHeight; // Increment Y position for the next line
    });
    
    ctx.save();
  }
};

const CardComp = ({ name }) => {
  const data = {
    labels: ["Yellow", "Purple", "Green"],
    datasets: [
      {
        data: [60,40,100],
        backgroundColor: ["#FFCB49", "#7464FF", "#4FD2B5"],
        hoverBackgroundColor: ["#FFCB49", "#7464FF", "#4FD2B5"]
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      centerText: true
    },
    cutout: "70%" 
  };

  return (
    <div className="card__container">
      <p style={{ fontSize: "20px", fontWeight: "400" }}>{name}</p>
      <div className="card__chart">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <div className="chart__data">
        <div className="chart__data-row">
          <p>Upcoming</p>
          <p>50</p>
        </div>
        <div className="chart__data-row">
          <p>Ongoing</p>
          <p>100</p>
        </div>
        <div className="chart__data-row">
          <p>Completed</p>
          <p>50</p>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
