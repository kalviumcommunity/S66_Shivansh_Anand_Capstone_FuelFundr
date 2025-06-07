import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "#eee", height: "10px" }}>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: "green",
          height: "100%",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
