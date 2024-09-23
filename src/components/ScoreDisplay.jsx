import React from 'react';

const ScoreDisplay = ({ score }) => {
  return (
    <div className="score-display">
      <h3>Score: {score}</h3>
    </div>
  );
};

export default ScoreDisplay;
