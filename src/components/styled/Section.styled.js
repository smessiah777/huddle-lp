import styled from "styled-components";
import bgDesktop from "../../images/bg-desktop.svg";
import bgMobile from "../../images/bg-mobile.svg";

export const Section = styled.section`
  background-color: rgb(103, 75, 175);
  background-image: url(${bgDesktop});
  background-repeat: no-repeat;

  background-size: contain;

  width: 100%;
  height: 100vh;

  @media (max-width: 480px) {
    background-image: url(${bgMobile});
  }
`;
