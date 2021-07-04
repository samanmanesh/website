import React from "react";
import { Title1, Description, Container, ColumnLayout } from "../styles";
import styled from "styled-components";
import fonts from '../styles/design'

const HeroWrapper = styled.section`
  padding-block: 8rem;
  padding-left: 1rem;
  background: blue;
  

  .title-container{
    display: grid;
    /* max-width: 80%; */
    background: #802929;
    grid-template-columns:  14% 1fr;
    grid-template-rows:  1fr  1fr  1fr;

    .title1{
      grid-column: 1;
      grid-row: 1;
    }

    .title2{
      grid-column: 2;
      grid-row: 2;
    }

    .subtitle{
      grid-column:1 / span2;
      grid-row: 3;
    }
  }



`;



export default function Hero() {
  return (
    <Container>
      <HeroWrapper>
        <div className="title-container">
          <Title1 className="title1">Hi! I'm </Title1>
          <Title1 className="title2">Saman,</Title1>
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
