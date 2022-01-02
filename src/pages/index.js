import * as React from "react";
// import { ThemeProvider  } from 'styled-components';
// import Global from '../components/styled/Global.styled';
import Global from "../components/styled/Global";
import { Helmet } from "react-helmet";
import { Section } from "../components/styled/Section.styled";
import { Container } from "../components/styled/Container.styled";
import favicon from "../images/favicon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

// markup
const IndexPage = () => {
  return (
    <>
      <Global />
      <Helmet
        link={[{ rel: "icon", type: "image/png", href: `${favicon}` }]}
        title={"Huddle"}
      ></Helmet>
      <Section>
        <Container>
          <Header />

          <Hero />

          <Footer />
        </Container>
      </Section>
    </>
  );
};

export default IndexPage;
