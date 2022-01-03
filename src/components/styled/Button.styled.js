import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #5d46b2;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  width: 175px;
  height: 57px;
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none !important;

  &:hover {
    background-color: #e980e7;
    color: #fff;
  }

  @media (max-width: 480px) {
    justify-content: center;
    width: 220px;
    height: 40px;
  }
`;
