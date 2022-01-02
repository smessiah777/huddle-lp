import React from "react";
import { StyledHeader, Nav, Logo } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import brand from "../images/logo.svg";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <a href='#' target='_blank'>
            <Logo src={brand} alt='Huddle' />
          </a>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
