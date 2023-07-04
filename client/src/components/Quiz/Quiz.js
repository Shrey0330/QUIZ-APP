import React from "react";
import quizStyle from "./Quiz.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Quiz({
  quizData,
  setSelectedOptions,
  selectedOptions,
}) {
  const handleOptionSelect = (index) => {
    const splitedArray = index.split("_");
    const queNum = parseInt(splitedArray[0]);
    const optionNum = parseInt(splitedArray[1]);
    
    if (document.getElementById(`${queNum}_0`) != null) {
      document.getElementById(`${queNum}_0`).style.fontWeight = "normal";
    }
    if (document.getElementById(`${queNum}_1`) != null) {
      document.getElementById(`${queNum}_1`).style.fontWeight = "normal";
    }
    if (document.getElementById(`${queNum}_2`) != null) {
      document.getElementById(`${queNum}_2`).style.fontWeight = "normal";
    }
    if (document.getElementById(`${queNum}_3`) != null) {
      document.getElementById(`${queNum}_3`).style.fontWeight = "normal";
    }

    document.getElementById(index).style.fontWeight = "bold";
    let initialArr = selectedOptions;
    if (optionNum === 0) {
      initialArr[queNum] = quizData[queNum].correct_answer;
    } else {
      initialArr[queNum] = quizData[queNum].incorrect_answers[optionNum - 1];
    }
    setSelectedOptions(initialArr);
  };
  
  const navigate = useNavigate();
  const handleFinish = () => {
    navigate('/result');
  }

  // console.log("Quiz data", quizData);
  return (
    <div style={{ width: "100%" }}>
      {quizData.map((data, index) => {
        const optionNum = ["B", "C", "D"];
        return (
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              margin: "1.5rem",
              boxSizing: "border-box",
              padding: "1rem",
            }}
            key={`Question_Key_${index}`}
          >
            <div style={{ fontWeight: "bolder", wordWrap: "break-word" }}>
              {`Q.${index + 1}`} {data.question}
            </div>

            <div
              id={`${index}_0`}
              onClick={() => handleOptionSelect(`${index}_0`)}
              className={quizStyle.option}
            >
              A. {data.correct_answer}
            </div>
            <div>
              {data.incorrect_answers.map((option, optionindex) => {
                return (
                  <div
                    id={`${index}_${optionindex + 1}`}
                    onClick={() =>
                      handleOptionSelect(`${index}_${optionindex + 1}`)
                    }
                    key={`question_${index}_option_key_${optionindex}`}
                    className={quizStyle.option}
                  >
                    {optionNum[optionindex]}. {option}
                  </div>
                );
              })}
            </div>
            {window.scrollTo(0, 0)}
          </div>
        );
      })}
      <div style = {{textAlign : 'center'}}>
      <Button sx = {{margin : '1rem'}} onClick={handleFinish} variant="contained" color='success'>Finish</Button>

      </div>
    </div>
  );
}
