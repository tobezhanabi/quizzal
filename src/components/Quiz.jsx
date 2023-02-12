import React from "react";
import { QuestionContent } from "../style/Quiz.styled";
import OptionButtons from "../components/Option";
// import Line from "./Line";

export default function Quiz({
  question,
  incorrectAnswers,
  correctAnswer,
  selectedAnswer,
  onAnswerSelect,
}) {
  return (
    <QuestionContent>
      <h3 key={question} question={question}>
        {question}
      </h3>

      <div>
        {incorrectAnswers.map((answer) => (
          <OptionButtons
            key={answer}
            answer={answer}
            selected={answer === selectedAnswer}
            onSelect={onAnswerSelect}
          />
        ))}
        <OptionButtons
          key={correctAnswer}
          answer={correctAnswer}
          selected={correctAnswer === selectedAnswer}
          onSelect={onAnswerSelect}
        />
      </div>
    </QuestionContent>
  );
}
