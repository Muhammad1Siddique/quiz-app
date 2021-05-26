import React from 'react';
import {QuestionCard} from './Components/QuestionCard'

function App() {
  const startQuiz = async() =>{};

  const nextQuestion = async() =>{};
  return (
    <div>
      <h1>QUIZ APP</h1>
      <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>
      <p className="score">
        Score:
      </p>
      <p>
        Loading
      </p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;


//https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple