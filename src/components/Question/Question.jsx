import { useEffect, useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import "./Question.scss";

const Question = ({
  question: { id, options, question, correctAnswer },
  idx,
  total,
}) => {
  const [optionSelected, setOptionSelected] = useState({
    alreadySelected: false,
    selectedCorrect: false,
    selectedWrong: false,
  });

  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const questionHeader = document.getElementById(`question-${id}`);
    questionHeader.innerHTML = question;
  }, [id, question]);

  useEffect(() => {
    if (optionSelected.selectedWrong === true) {
      const options = document.querySelectorAll(`.option-${id}`);
      options.forEach((option) => {
        if (
          option.innerText.replace(/\s/g, "") ===
          correctAnswer.replace(/\s/g, "")
        ) {
          option.classList.add("correct");
        }
      });
    }
  }, [optionSelected, id, correctAnswer]);

  const handleChooseAnswer = (event) => {
    const selectedOption = event.target.innerText;

    if (
      selectedOption.replace(/\s/g, "") === correctAnswer.replace(/\s/g, "")
    ) {
      event.target.classList.add("correct");
      setOptionSelected({
        ...optionSelected,
        alreadySelected: true,
        selectedCorrect: true,
      });
    } else {
      event.target.classList.add("wrong");
      setOptionSelected({
        ...optionSelected,
        alreadySelected: true,
        selectedWrong: true,
      });
    }
  };

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
    console.log(showAnswer)
    if (showAnswer) {
      setOptionSelected({
        ...optionSelected,
        selectedWrong: true,
      });
    }
  };

  return (
    <div className="question-div">
      <div className="details">
        <div className="question-container">
          <h2 id={`question-${id}`}> </h2>
          <span className="eye-icon">
            {setShowAnswer ? <EyeSlashIcon  onClick={handleToggleAnswer}/> : <EyeIcon onClick={handleToggleAnswer} /> }
          </span>
        </div>
        <span className="question-index">
          <small>
            Question: {idx + 1}/{total}
          </small>
        </span>
        <div className="options-container">
          {options.map((option, i) => (
            <div key={i}>
              <span className={`option-${id}`} onClick={handleChooseAnswer}>
                {option}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
