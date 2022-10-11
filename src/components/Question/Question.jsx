import { useContext, useEffect, useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from 'react-toastify';


import "./Question.scss";
import 'react-toastify/dist/ReactToastify.css';
import { StatsContext } from "../../contexts/StatsContext";

const Question = ({
  question: { id, options, question, correctAnswer },
  idx,
  name,
  total,
}) => {
  const [optionSelected, setOptionSelected] = useState({
    alreadySelected: false,
    selectedCorrect: false,
    selectedWrong: false,
  });

  const [showAnswer, setShowAnswer] = useState(false);

  const { addToQuizStat } = useContext(StatsContext);

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
    if (optionSelected.alreadySelected === true) {
      return;
    }

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

      addToQuizStat(name, 'correct');

      toast.success('Your Answer Was Correct!!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      event.target.classList.add("wrong");

      setOptionSelected({
        ...optionSelected,
        alreadySelected: true,
        selectedWrong: true,
      });

      addToQuizStat(name, 'incorrect');

      toast.error('Your Answer Was Incorrect!!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const handleToggleAnswer = () => {
    setOptionSelected({
      ...optionSelected,
      selectedWrong: true,
    });
  };

  return (
    <div className="question-div">
        <ToastContainer />
      <div className="details">
        <div className="question-container">
          <h2 id={`question-${id}`}> </h2>
          <span className="eye-icon" onClick={handleToggleAnswer}>
            {showAnswer ? <EyeSlashIcon /> : <EyeIcon />}
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
