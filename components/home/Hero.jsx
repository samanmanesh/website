import React from "react";
import { Title1, Description, Container, ColumnLayout } from "../styles";
import styled from "styled-components";
import { fonts, colors } from "../styles/design";



const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #2e9f11;
  /* height: 100vh; */
  .title-container {
    /* margin-top: 4rem; */
    position: relative;
    ::before {
      content: "<h1>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
    }

    .title1-title2-wrapper {
      ::after {
        content: "<h1>";
        color: ${colors.fontColor.fontColor2};
        font-family: ${fonts.codes.fontFamily};
        font-size: ${fonts.codes.size}rem;
        /* margin-left: 1rem; */
        position: absolute;
        left: 28rem;
        bottom: 2.6rem;
      }
    }
    .title1 {
    }

    .title2 {
      @media(min-width: 429px){
        margin-left: 3em;
      }
      /* grid-column: 2; */
      /* grid-row: 2; */
    }

    .subtitle {
      
      font-size: 1.4rem;
      font-weight: lighter;
    }
  }

  .hero-paragraph {
    /* background: #982727; */
    max-width: 22em;
    font-size: 1.4rem;
    font-weight: lighter;
    padding-block: 4rem;
    /* margin-block: 5rem; */
    position: relative;
    ::before {
      position: absolute;
      content: "<p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      bottom: 2rem;
    }
    ::after {
        content: "<p>";
        color: ${colors.fontColor.fontColor2};
        font-family: ${fonts.codes.fontFamily};
        font-size: ${fonts.codes.size}rem;
        position: absolute;
        top: 2rem;
        left: 0rem;
      }

  }
`;

const CodeDesign = styled.section`
  color: ${colors.fontColor.fontColor2};
  font-family: ${fonts.codes.fontFamily};
  font-size: ${fonts.codes.size}rem;
  padding-top: 4rem;
  div:nth-child(2) {
    padding-left: 1rem;
  }
`;

export default function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <CodeDesign>
          <div> {"<htm>"}</div>
          <div> {"<body>"}</div>
        </CodeDesign>
        <div className="title-container">
          <section className="title1-title2-wrapper">
            <Title1 className="title1">Hi! &nbsp; I'm </Title1>
            <Title1 className="title2">Saman,</Title1>
          </section>
          <div className="subtitle">
            {" "}
            <strong> Full Stack Developer </strong> Based in Toronto
          </div>
        </div>
        <p className="hero-paragraph">
          I make elegant, efficient, and user-friendly digital experiences
        </p>
      </HeroWrapper>
    </Container>
  );
}
