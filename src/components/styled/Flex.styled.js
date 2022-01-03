import styled from "styled-components";

export const Flex = styled.div`
  display: Flex;

  // & > div {
  //     flex: 1;
  // }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: column;
    align-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-content: center;
  }
`;
