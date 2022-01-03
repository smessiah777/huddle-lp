import React from "react";
import { Container } from "./styled/Container.styled";
import {
  StyledFooter,
  SocialContainer,
  Icon,
  IconLink,
} from "./styled/Footer.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <SocialContainer>
          <Icon>
            <IconLink href='#' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </IconLink>
          </Icon>

          <Icon>
            <IconLink href='#' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </IconLink>
          </Icon>

          <Icon>
            <IconLink href='#' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </IconLink>
          </Icon>
        </SocialContainer>
      </Container>
    </StyledFooter>
  );
}
