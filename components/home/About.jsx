import React from "react";
import { Container, Title3 } from "../styles";
import styled from "styled-components";

const AboutGrid = styled.section``;

export default function About() {
  return (
    <Container>
      <AboutGrid>
        <div className="left-side">
          <div className="title-container">
            <Title3>Me, Myself &amp; I</Title3>
            <img src="" alt="" className="arrow-type3" />
          </div>
          <p className="introduction">
            My name is Saman Manesh and I am a full stack developer focused on
            front end based in Toronto. <br />I enjoy using my obsessive
            attention to detail, my pure love for making things, and my
            mission-driven work ethic to literally change the world. That’s why
            I love working with diverse people who want to make the world a
            little better.
          </p>
          <button className="button-connection-contact">
            <span>Lets Make Something Special</span>{" "}
            <img src="" alt="" className="arrow-type4" />
          </button>
        </div>
        <div className="right-side">
          <img src="" alt="Samans image" className="person-image" />
        </div>
      </AboutGrid>
    </Container>
  );
}
