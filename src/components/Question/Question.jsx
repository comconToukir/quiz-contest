import { useContext, useEffect, useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from 'react-toastify';

import { StatsContext } from "../../contexts/StatsContext";

import "./Question.scss";
import 'react-toastify/dist/ReactToastify.css';

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

  // used to toggle correct answer viewing
  const [showAnswer, setShowAnswer] = useState(false);

  // used to send write and wrong answer to stats context which is then used in stats page
  const { addToQuizStat } = useContext(StatsContext);

  // needed to append dom elements
  useEffect(() => {
    const questionHeader = document.getElementById(`question-${id}`);
    questionHeader.innerHTML = question;
  }, [id, question]);

  // used to show correct answer if wrong answer is selected and to toggle correct answer when show answer button is clicked 
  useEffect(() => {
    const options = document.querySelectorAll(`.option-${id}`);
    if (optionSelected.selectedWrong === true || optionSelected.selectedCorrect === true) {
      options.forEach((option) => {
        if (
          option.innerText.replace(/\s/g, "") ===
          correctAnswer.replace(/\s/g, "")
        ) {
          option.classList.add("correct");
        }
      });
    } else {
      options.forEach((option) => {
        if (
          option.innerText.replace(/\s/g, "") ===
          correctAnswer.replace(/\s/g, "")
        ) {
          option.classList.remove("correct");
        }
      });
    }
  }, [optionSelected, id, correctAnswer]);

  // maps from options and see if the dom element with option matches with the correctAnswer, then set write or wrong and already selected in the state, shows toast according to write or wrong and uses addToQuizStat to send right or wrong data to statsContext
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
        hideProgressBar: true,
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
    if (showAnswer) {
      setShowAnswer(!showAnswer);
      setOptionSelected({
        ...optionSelected,
        selectedWrong: false,
      });
    } else {
      setShowAnswer(!showAnswer);
      setOptionSelected({
        ...optionSelected,
        selectedWrong: true,
      });
    }
    
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
