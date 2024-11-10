import React from "react";
import "./LeftPanel.css";
import SplineScene from "./SplineScene";

function LeftPanel() {
  return (
    <div className="left-panel">
      <h1>Suriya Kumar</h1>
      <h2>Data Analyst</h2>
      <p>
        I am a grad student at UCR specializing in data analysis, machine learning, and natural language understanding (NLU).
      </p>
      <p>Why did the machine learning model cross the road?</p>
      <p className="scroll-hint">Scroll Down for answer</p>
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:your-email@example.com">Email</a>
      </div>
      <div className="spline-scene-container">
        <SplineScene />
      </div>
    </div>
  );
}

export default LeftPanel;
