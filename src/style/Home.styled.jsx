import styled from "styled-components";

export const Main = styled.main`
  background-image: url("./images/intro-page.png");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 900px;
  padding: 5em;
  width: 90vw;
  height: 80vh;

  h2 {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 31.25px;
    line-height: 37px;
    text-align: center;

    color: #293264;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #293264;
  }

  button {
    background: #4d5b9e;
    border-radius: 15px;
    border: none;
    padding: 10px 30px;
    color: white;
    margin-left: 44px;
    cursor: pointer;
  }
`;
