import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
