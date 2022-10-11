import { useEffect } from 'react';

import './QAndA.scss';

const QAndA = ({ qAndA: { question, answer, id } }) => {
  useEffect(() => {
    document.getElementById(`question-answer-${id}`).innerHTML = answer;
  }, [answer, id])
  return (
    <article className="q-and-a-container">
      <h2 className="">{question}</h2>
      <p id={`question-answer-${id}`} className="question-answer"> </p>
    </article>
  );
};

export default QAndA;