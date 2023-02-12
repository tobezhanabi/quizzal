import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  const [shown, setShown] = useState(true);
  const [quizData, setQuizData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  const handleOptionClick = (answer) => {
    setSelectedOption(answer);
  };
  function togglePage() {
    setShown(!shown);
  }
  return (
    <React.Fragment>
      {shown && <Home onToggle={togglePage} />}
      {!shown && (
        <div>
          {quizData.map((item) => (
            <Quiz
              key={item.question}
              question={item.question}
              incorrectAnswers={item.incorrect_answers}
              correctAnswer={item.correct_answer}
              selectedAnswer={selectedOption}
              onAnswerSelect={handleOptionClick}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
