import React from "react";
import { Title1, Container, Subtitle, Description } from "../styles";
import styled from "styled-components";
import { fonts, colors, tablet, mobile } from "../styles/design";

// #region - styling-

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  .hero-title-container {
    position: relative;
    ::before {
      content: "<h1>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
    }

    .title1-title2-wrapper {
      position: relative;
      ::after {
        content: "</h1>";
        color: ${colors.fontColor.fontColor2};
        font-family: ${fonts.codes.fontFamily};
        font-size: ${fonts.codes.size}rem;
        position: absolute;
        /* left: 30rem; */
        bottom: .4rem;
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
    max-width: 33ch;
    margin-bottom: 4em;
    /* font-size: 1.2em;

    @media (min-width: ${mobile}){
    font-size: calc(${fonts.paragraph.primary.size}rem + 0.6vw); */

    /* } */
    font-weight: ${fonts.paragraph.primary.style};
    position: relative;
    ::before {
      position: absolute;
      content: "<p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      bottom: 4rem;
    }
    ::after {
      content: "</p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      position: absolute;
      top: 4rem;
      left: 0rem;
    }
  }
`;

const CodeDesign = styled.section`
  color: ${colors.fontColor.fontColor2};
  font-family: ${fonts.codes.fontFamily};
  font-size: ${fonts.codes.size}rem;
  div:nth-child(2) {
    padding-left: 1rem;
  }
`;
//#endregion

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
        <Description smaller>
          <p className="hero-paragraph">
            I make elegant, efficient, and user-friendly digital experiences
          </p>
        </Description>
      </HeroWrapper>
    </Container>
  );
}
