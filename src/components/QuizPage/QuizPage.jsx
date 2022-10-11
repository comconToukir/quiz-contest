import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

import "./QuizPage.scss";

const QuizPage = () => {
  const quizData = useLoaderData().data;
  const { total, name, logo, questions } = quizData;
  
  
  
  return (
    <div className="container">
      <div className="quiz-container">
        <div className="info-container">
          <img src={logo} alt={`${name}`} />
          <div>
            <h2>{name}</h2>
            <span>Total Questions: {total}</span>
          </div>
        </div>
        <div className="questions-container">
          {questions.map((question, i) => (
            <Question
              key={question.id}
              question={question}
              idx={i}
              total={total}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
