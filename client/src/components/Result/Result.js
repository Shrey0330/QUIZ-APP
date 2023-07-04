import React, { useEffect } from "react";
import resultStyle from "./Result.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Result({
  selectedOptions,
  quizData,
  setQuizData,
  setSelectedOptions,
}) {
  console.log(selectedOptions);
  let score = 0;
  for (let i = 0; i < quizData.length; i++) {
    if (selectedOptions[i] === quizData[i].correct_answer) {
      score++;
    }
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    setQuizData([]);
    setSelectedOptions([]);
  };
  useEffect(() => {
    function goTOTOp () {
      window.scrollTo(0, 0);
    }
  }, [])
  
  return (
    <>
      <div className={resultStyle.container}>
        <div className={resultStyle.score}>
          <div style={{ fontSize: "27px" }}>Your score is : </div>
          <div style={{ lineHeight: "30px" }}>{score}/10</div>
        </div>
        <div className={resultStyle.correctAnswers}>
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
                  style={{ color: "green" }}
                  //   className={quizStyle.option}
                >
                  A. {data.correct_answer}{" "}
                  {data.correct_answer === selectedOptions[index] ? (
                    <b>Your choice</b>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {data.incorrect_answers.map((option, optionindex) => {
                    return (
                      <div
                        key={`question_${index}_option_key_${optionindex}`}
                        // className={quizStyle.option}
                      >
                        {optionNum[optionindex]}. {option}{" "}
                        {option === selectedOptions[index] ? (
                          <b>Your choice</b>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          {window.scrollTo(0, 0)}

          <div onClick={handleBack} style={{ textAlign: "center" }}>
            <Button variant="outlined">Back To Home</Button>
          </div>
        </div>
      </div>
    </>
  );
}
