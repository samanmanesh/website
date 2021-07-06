import React from "react";
import { Container, Title1, Title2, Title3 } from "../styles";
import { tablet, colors, mobile } from "../styles/design";
import styled from "styled-components";

const EducationGrid = styled.section`
  /* background: #5e1d84; */
  margin-block: 3rem;
  @media (min-width: ${tablet}) {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "leftA ."
      ". right"
      "leftB .";

    .left-side1 {
      grid-area: leftA;
    }
    .left-side2 {
      grid-area: leftB;
    }
    .right-side {
      grid-area: right;
    }
    /* align-items: center; */

  }
`;
const ResumeCard = styled.div`
  /* background: #235eb1; */
  font-size: 1.1rem;
  
  @media (max-width:${tablet}){
    margin-block: 5rem;

  }
  .card-row {
    display: flex;
    border-bottom: 2px solid white;
    padding-block: 1rem;
   
    span:nth-child(2) {
      margin-left: auto;
      /* padding-block: 1rem; */
    }

    .link{
      color: ${colors.button.secondary};
      padding-inline: .2rem;
    }

    .arrow-type4{
      /* background: #600e0e; */
      align-self: start;
    }
  }
`;

const Skills = styled.section`
  margin-top: 5rem;
`;
const Tools = styled.section`
  margin-top: 5rem;
`;

export default function Resume() {
  return (
    <Container>
      <section className="titles-container">
        <Title3>Reśumé</Title3>
        <img
          src="arrow3-down-right.svg"
          alt="arrow type3"
          className="arrow-type3"
        />
      </section>

      <Title2>Education {"{"} </Title2>
      <EducationGrid>
        <div className="left-side">
          <ResumeCard>
            <div className="card-row">
              <span>Computer Programming &amp; Analysis</span>
              <span className="link">Link</span>
              <img src="arrow4-up-right.svg" alt="arrow type 4" className="arrow-type4" />
            </div>
            <div className="card-row">Seneca College</div>
            <div className="card-row">
              <span>2020 - Current</span>
              <span>Toronto, Canada</span>
            </div>
          </ResumeCard>
        </div>
        <div className="left-side2">
          <ResumeCard>
            <div className="card-row">
              <span>Civil Engineering</span>
              <span className="link">Link</span>
              <img src="arrow4-up-right.svg" alt="arrow type 4" className="arrow-type4" />
            </div>
            <div className="card-row">University of Shiraz</div>
            <div className="card-row">
              <span>2012 - 2016</span>
              <span>Iran, Shiraz</span>
            </div>
          </ResumeCard>
        </div>
        <div className="right-side">
          <ResumeCard>
            <div className="card-row">
              <span>Tömer, Turkish Language Program</span>
              <span className="link">Link</span>
              <img src="arrow4-up-right.svg" alt="arrow type 4" className="arrow-type4" />
            </div>
            <div className="card-row">Akdeniz University</div>
            <div className="card-row">
              <span>2018 - 2019</span>
              <span>Turkey, Antalya</span>
            </div>
          </ResumeCard>
        </div>
      </EducationGrid>
      <Title2>{"}"} </Title2>

      <Skills>
        <Title2>Skills {"{"}</Title2>
        <div className="skill-container-grid">
          <div className="element">HTML 5</div>
          <div className="element">CSS 3</div>
          <div className="element">SASS</div>
          <div className="element">TailWind</div>
          <div className="element">JavaScript</div>
          <div className="element">ReactJS</div>
          <div className="element">VueJS</div>
          <div className="element">NextJS</div>
          <div className="element">UI / UX Design</div>
          <div className="element">C</div>
          <div className="element">Linux 7&amp; Unix</div>
          <div className="element">C#</div>
          <div className="element">Styled Components</div>
        </div>
        <Title2> {"}"}</Title2>
      </Skills>
      <Tools>
        <Title2>Tools {"{"}</Title2>
        <div className="tools-container-grid">
          <div className="element">Visual Studio Code</div>
          <div className="element">Rider</div>
          <div className="element">Unity</div>
          <div className="element">Vi Editor</div>
          <div className="element">Framer</div>
          <div className="element">Figma</div>
        </div>
        <Title2>{"}"}</Title2>
      </Tools>
      <button className="download-resume">
        <span>Download Reśumé</span>
        <img src="" alt="array type 4" className="arrow-type4" />
      </button>
    </Container>
  );
}
