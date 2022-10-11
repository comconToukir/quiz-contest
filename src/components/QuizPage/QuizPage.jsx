import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import { StatsContext } from './../../contexts/StatsContext';
import Question from "../Question/Question";

import "./QuizPage.scss";

const QuizPage = () => {
  const quizData = useLoaderData().data;
  const { total, name, logo, questions } = quizData;

  const { stats } = useContext(StatsContext);
  
  const quizStat = stats.find(stat => stat.name === name);
  
  return (
    <div className="container">
      <div className="quiz-container">
        <div className="info-container">
          <img src={logo} alt={`${name}`} />
          <div>
            <h2>{name}</h2>
            <span>Total Questions: {total}</span>
            <span>Correctly Answered: {quizStat.correct || 0}</span>
            <span>Incorrectly Answered: {quizStat.incorrect || 0}</span>
            <span>Not Answered: {total - (quizStat.correct + quizStat.incorrect)}</span>
          </div>
        </div>
        <div className="questions-container">
          {questions.map((question, i) => (
            <Question
              key={question.id}
              question={question}
              idx={i}
              name={name}
              total={total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
