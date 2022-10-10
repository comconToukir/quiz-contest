import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

import './QuizPage.scss';

const QuizPage = () => {
  const quizData = useLoaderData().data;
  const { total, name, logo, questions } = quizData;
  console.log(name);
  return (
    <div className='container'>
      <div className='quiz-container'>
        <div className="info-container">
          <img src={logo} alt={`${name}`} />
          <div>
            <h2>{name}</h2>
            <span>Total Questions: {total}</span>
          </div>
        </div>
      </div>
      <div className="questions-container">
        {
          questions.map(question => <Question key={questions.id} question={question} />)
        }
      </div>
    </div>
  );
};

export default QuizPage;