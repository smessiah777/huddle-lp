import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: #fff;
  padding-left: 10px;

  @media (max-width: 480px) {
    padding: 4.6875rem 0;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Icon = styled.div`
  justify-content: space-around;
  padding-right: 16px;
  // border: 2px solid #fff;
  // border-radius: 50%;

  :last-child {
    padding-right: 0;
  }
`;

export const IconLink = styled.a`
  color: #fff;

  :hover {
    color: #e980e7;
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`;
