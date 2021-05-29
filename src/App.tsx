import React, {useState} from 'react';
import {QuestionCard} from './Components/QuestionCard'
import {fetchQuestions, Difficulty, QuestionsState} from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question:string;
  answer: string;
  correct: string;
  correctAnswer:string;
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async() =>{
    setLoading(true);
    setGameOver(false);
    const newQuestion = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = async() =>{};
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{};
  
  return (
    <div>
      <h1>QUIZ APP</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>): null}
      {!gameOver ? (
      <p className="score">
        Score:
      </p>):null}
      {loading ?(
      <p>
        Loading
      </p>):null}
      {!loading && !gameOver ?(
      <QuestionCard 
      questionNum = {number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number]: undefined}
      callback={checkAnswer}
      />):null}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS-1 ?(
      <button className="next" onClick={nextQuestion}>
        Next
      </button>):null}
    </div>
  );
}

export default App;
