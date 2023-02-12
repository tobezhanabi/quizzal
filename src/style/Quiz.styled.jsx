import styled from "styled-components";

export const QuestionContent = styled.div`
  background-image: url("./images/Background.svg");
  height: 80vh;
  width: 90vw;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  p {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #293264;
  }
  .selected {
    background: #293264;
  }
  div {
    display: flex;
  }
`;

// export const Line = styled.div`
//   width: 399px;
//   height: 0px;
//   padding-top: 30px;
//   border: 0.794239px solid #dbdef0;
// `;
