import React from "react";
import { Container } from "./styled/Container.styled";
import { StyledFooter, SocialContainer, Icon } from "./styled/Footer.styled";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <SocialContainer>
          <Icon src={facebook} alt='Facebook' />
          <Icon src={twitter} alt='Twitter' />
          <Icon src={instagram} alt='Instagram' />
        </SocialContainer>
      </Container>
    </StyledFooter>
  );
}
