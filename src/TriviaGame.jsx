import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import questionsData from './data/questions.json'; // Import questions from JSON file
import ScoreDisplay from './components/ScoreDisplay';
import WelcomeBanner from './components/WelcomeBanner';


const TriviaGame
 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = (selected) => {
    if (!showAnswer) {
      setSelectedOption(selected);
      const currentQuestion = questionsData[currentQuestionIndex];
      if (selected === currentQuestion.answer) {
        setScore(score + 1);
      }
      setShowAnswer(true);
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Game Over! Your score is: ${score}`);
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    
    <div className="trivia-game">
        <WelcomeBanner/>
      <ScoreDisplay score={score} />
      <QuestionCard
        question={questionsData[currentQuestionIndex].question}
        options={questionsData[currentQuestionIndex].options}
        handleAnswer={handleAnswer}
        showAnswer={showAnswer}
        selectedOption={selectedOption}
        correctAnswer={questionsData[currentQuestionIndex].answer}
      />
      <button onClick={nextQuestion}>Next</button>
    </div>
  );
};

export default TriviaGame;
