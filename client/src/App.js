import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebaseConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
function App() {
  const [quizData, setQuizData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setUser(auth.currentUser);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home user={user} setQuizData={setQuizData} />}
          ></Route>

          <Route
            path="/quiz"
            element={
              <Quiz
                quizData={quizData}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
              />
            }
          ></Route>

          <Route
            path="/result"
            element={
              <Result selectedOptions={selectedOptions} quizData={quizData} setQuizData = {setQuizData} setSelectedOptions = {setSelectedOptions}/>
            }
          ></Route>

          <Route path="/admin" element = {<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
