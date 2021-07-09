import React from "react";
import { Title1, Description, Container, ColumnLayout, Subtitle } from "../styles";
import styled from "styled-components";
import { fonts, colors, tablet } from "../styles/design";

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .hero-title-container {
    margin-block: 5em;
    position: relative;
    ::before {
      content: "<h1>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
    }

    .title1-title2-wrapper {
      ::after {
        content: "</h1>";
        color: ${colors.fontColor.fontColor2};
        font-family: ${fonts.codes.fontFamily};
        font-size: ${fonts.codes.size}rem;
        position: absolute;
        left: 30vw;
        bottom: 2.6vw;
      }
    }
    .title1 {
    }

    .title2 {
      margin-left: 3em;
      /* @media (min-width: 429px) {
        margin-left: 3em;
      } */
    }

    .subtitle {
      
      /* font-size: calc(1rem + 1vw); */
      /* font-size: ${fonts.paragraph.primary.size}rem; */
      /* font-weight: ${fonts.paragraph.primary.style}; */

      /* @media (min-width: ${tablet}) {
        
        font-size: ${fonts.paragraph.primary.size}rem;
        font-weight: ${fonts.paragraph.primary.style};
      } */
    }
  }

  .hero-paragraph {
    max-width: 20em;

    font-size: calc(${fonts.paragraph.primary.size}rem + .6vw);
    /* font-size: ${fonts.paragraph.primary.size}rem; */
    font-weight: ${fonts.paragraph.primary.style};
    margin-block: 5em;
    position: relative;
    ::before {
      position: absolute;
      content: "<p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      top: 2vw;
    }
    ::after {
      content: "</p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      position: absolute;
      bottom: 2vw;
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
        <div className="hero-title-container">
          <section className="title1-title2-wrapper">
            <Title1 className="title1">Hi! &nbsp; I'm </Title1>
            <Title1 className="title2">Saman,</Title1>
          </section>
          <div className="subtitle">
            <Subtitle>
            <strong> Full Stack Developer </strong> Based in Toronto

            </Subtitle>
          </div>
        </div>
        <p className="hero-paragraph">
          I make elegant, efficient, and user-friendly digital experiences
        </p>
      </HeroWrapper>
    </Container>
  );
}
