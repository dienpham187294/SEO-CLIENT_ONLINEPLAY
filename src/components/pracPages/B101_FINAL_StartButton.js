import React from "react";

const StartButton = ({ setINDEXtoPlay, INDEXtoPlay, setStartSTT, Score }) => {
  const outerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    backgroundColor: "#f0f0f0", // Light grey background for better visibility
  };

  const buttonStyle = {
    padding: "20px 40px",
    fontSize: "24px",
    color: "white",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "background-color 0.3s, transform 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
    transform: "scale(1.05)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={outerContainerStyle}>
      <div>
        <h1>ROUNDS: {INDEXtoPlay}</h1>
        <h1>SCORE: {Score}</h1>
      </div>
      {/* <div
        style={
          isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setINDEXtoPlay((D) => D + 1);
          setStartSTT(false);
        }}
      >
        {INDEXtoPlay < 0 ? "START" : "NEXT"}
      </div> */}
    </div>
  );
};

export default StartButton;
