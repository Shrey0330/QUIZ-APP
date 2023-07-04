import React, { useState } from "react";
import adminStyle from "./Admin.module.css";
import Navbar from "../Home/Navbar/Navbar";
import { Button, TextField } from "@mui/material";
export default function Admin() {
  const handleSubmitQuestion = async () => {
    if (!fromApi) {
      const result = await fetch(
        `https://opentdb.com/api.php?amount=10&type=multiple&category=${
          document.getElementById("category").value
        }`,
        {
          method: "GET",
        }
      );
      const data = await result.json();
      const questionList = data.results;
      questionList.forEach(async (element) => {
        try {
          const sendToBackend = await fetch(`http://localhost:8080/data`, {
            method: "POST",
            body: JSON.stringify(element),
            mode: "cors",
            headers: {
              accept: "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          });
          console.log(sendToBackend);
        } catch (error) {
          console.error();
        }
      });
    } else {
      const answer = document.getElementById("option1").value;
      const op2 = document.getElementById("option2").value;
      const op3 = document.getElementById("option3").value;
      const op4 = document.getElementById("option4").value;
      const questionTxt = document.getElementById("question").value;
      const categoryTxt = document.getElementById("category").value;
      const element_obj = {
        question: questionTxt,
        correct_answer: answer,
        incorrect_answers: [op2, op3, op4],
        category: categoryTxt,
      };

      try {
        const sendToBackend = await fetch(`http://localhost:8080/data`, {
          method: "POST",
          body: JSON.stringify(element_obj),
          mode: "cors",
          headers: {
            accept: "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [fromApi, setFromApi] = useState(false);

  const handleFromApi = () => {
    setFromApi((prev) => !prev);
  };
  console.log("Rendered");
  return (
    <>
      <Navbar />
      <div className={adminStyle.container}>
        <div className={adminStyle.header}>
          <h2>{!fromApi ? "Enter the question :" : "Enter the category : "}</h2>
          <Button
            onClick={handleFromApi}
            variant="contained"
            className={adminStyle.btn}
          >
            {fromApi ? "From API" : "Enter manually"}
          </Button>
        </div>
        {fromApi && (
          <TextField
            id="question"
            multiline
            sx={{ width: "80%" }}
            label="Question"
            placeholder="Enter the question..."
          />
        )}
        <div className={adminStyle.options}>
          <TextField
            type="number"
            label="category"
            placeholder="Enter category number.."
            id="category"
          />
          {fromApi && (
            <>
              {" "}
              <TextField
                id="option1"
                placeholder="Enter the right answer"
                label="Correct answer"
                color="success"
                sx={{ width: "500px" }}
              />
              <TextField
                id="option2"
                placeholder="Enter option 2"
                label="Option 2"
                sx={{ width: "500px" }}
              />
              <TextField
                id="option3"
                placeholder="Enter option 3"
                label="Option 3"
                sx={{ width: "500px" }}
              />
              <TextField
                id="option4"
                placeholder="Enter option 4"
                label="Option 4"
                sx={{ width: "500px" }}
              />
            </>
          )}
        </div>
        <Button
          variant="contained"
          color="success"
          style={{ marginTop: "1.5rem" }}
          onClick={handleSubmitQuestion}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
