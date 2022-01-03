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

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    background-size: cover;
  }

  @media (max-width: 480px) {
    background-image: url(${bgMobile});
    background-size: contain;
  }
`;
