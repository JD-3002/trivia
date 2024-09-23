import React from 'react';

const QuestionCard = ({ question, options, handleAnswer, showAnswer, selectedOption, correctAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      {options.map((option) => (
        <div
          key={option}
          className={`option ${showAnswer ? (option === correctAnswer ? 'correct' : (option === selectedOption ? 'incorrect' : '')) : ''}`}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;
