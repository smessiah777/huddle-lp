import styled from "styled-components";

const socialIcons = [
  {
    id: 1,
    iconUrl: "../images/facebook.png",
  },

  {
    id: 2,
    iconUrl: "../images/twitter.png",
  },
  {
    id: 3,
    iconUrl: "../images/instagram.png",
  },
];

const socialIconsActive = [
  {
    id: 1,
    iconUrl: "../images/fb-active.png",
  },

  {
    id: 2,
    iconUrl: "../images/twitter-active.png",
  },
  {
    id: 3,
    iconUrl: "../images/instagram-active.png",
  },
];

export const StyledFooter = styled.footer`
  color: #fff;
  padding-left: 10px;

  @media (max-width: 480px) {
    padding-top: 50px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  justify-content: space-around;
  padding-right: 16px;

  :last-child {
    padding-right: 0;
  }
`;
