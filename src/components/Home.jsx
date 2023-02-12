import React from "react";
import { Main } from "../style/Home.styled";
export default function Home(props) {
  return (
    <Main>
      <div className="text-content">
        <h2> Quizzal</h2>
        <p>Some description if needed</p>

        <button onClick={props.onToggle}>Start Quiz</button>
      </div>
    </Main>
  );
}
