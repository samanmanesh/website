import React from "react";
import { Title1, Description, Container, ColumnLayout } from "../styles";
import styled from "styled-components";
import fonts from '../styles/design'

const HeroWrapper = styled.section`
  /* padding-block: 8rem; */
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  height: 100vh;

  .title-container{
    /* display: grid; */
    /* max-width: 80%; */
 

    .title1{
      
    }

    .title2{
      margin-left: 2.7em;
      grid-column: 2;
      grid-row: 2;
    }

    .subtitle{
      font-size: 1.8rem;
      font-weight: lighter;
    }
  }

  .hero-paragraph{
    max-width: 23em;
    font-size: 1.75rem;

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
