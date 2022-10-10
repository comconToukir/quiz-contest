import { useEffect } from 'react';
import './Question.scss';

const Question = ({ question: { id, options, question, correctAnswer }}) => {

  useEffect(() => {
    document.getElementById(`question-${id}`).innerHTML = question;
  }, [id, question]);

  return (
    <div className='question-div'>
      <h3 id={`question-${id}`}> </h3>
      <div className="options-container">
        {
          options.map((option, i) => <div key={i}>
            <span>{option}</span>
          </div>)
        }
      </div>
    </div>
  );
};

export default Question;