import React from "react";
import { Container, Title3, Button } from "../styles";
import styled from "styled-components";
import { tablet, mobile, desktop, fonts } from "../styles/design";

// #region - styling-
const AboutGrid = styled.section`
  display: grid;
  font-size: ${fonts.paragraph.secondary.size}rem;
  font-weight: ${fonts.paragraph.primary.style};
  line-height: ${fonts.paragraph.primary.line};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  /* gap: 1rem; */

  grid-template-areas:
    "header header"
    "right right"
    "left left";

  @media (min-width: ${desktop}) {
    grid-template-areas:
      "header header"
      "left right"
      "left right";

    .intro {
      & > p {
        max-width: 80%;
        font-weight: bold;
      }
    }
  }

  .intro {
    grid-area: header;
    font-size: 2.2rem;
  }

  .left-side {
    grid-area: left;
  }
  .right-side {
    grid-area: right;
  }

  .body {
    max-width: 80%;
    margin-bottom: 5em;
    margin-inline: auto;
  }
  .person-image-container {
    border: 1px solid white;
    height: 30rem;
    max-width: 60%;
    margin-inline: auto;
  }
`;
//#endregion
export default function About() {
  return (
    <Container>
      <div className="titles-container">
        <Title3>Me, Myself &amp; I</Title3>
        <img src="arrow3-down-right.svg" alt="" className="arrow-type3" />
      </div>
      <AboutGrid>
        <div className="intro">
          <p>
            My name is Saman Manesh and I am a Full-Stack developer focused on
            Front-End based in Toronto.
          </p>
        </div>
        <div className="left-side">
          <p className="body">
            &nbsp; &nbsp; I enjoy using my obsessive attention to detail, my
            pure love for making things, and my mission-driven work ethic to
            literally change the world. That’s why I love working with diverse
            people who want to make the world a little better.
          </p>
          {/* <Button className="button-connection-contact">
            <span>Lets Make Something Special</span>{" "}
            <img src="arrow5-line-right.svg" alt="" className="arrow-type5" />
          </Button> */}
        </div>
        <div className="right-side">
          <section className="person-image-container">
            <img src="" alt="Samans image" className="person-image" />
          </section>
        </div>
      </AboutGrid>
    </Container>
  );
}
