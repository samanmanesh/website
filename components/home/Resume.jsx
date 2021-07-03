import React from "react";
import { Container, Title1, Title2, Title3 } from "../styles";
import styled from "styled-components";

const EducationGrid = styled.section``;
const ResumeCard = styled.div``;
const Skills = styled.section``;
const Tools = styled.section`
  
`;

export default function Resume() {
  return (
    <Container>
      <Title3>Resume</Title3>
      <img src="" alt="arrow type3" className="arrow-type3" />

      <EducationGrid>
        <Title2>Education {"{"} </Title2>
        <div className="left-side">
          <ResumeCard>
            <div className="card-row">
              <span>Computer Programming &amp; Analysis</span>
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
            <div className="card-row">Seneca College</div>
            <div className="card-row">
              <span>2020 - Current</span>
              <span>Toronto, Canada</span>
            </div>
          </ResumeCard>
          <ResumeCard>
            <div className="card-row">
              <span>Civil Engineering</span>
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
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
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
            <div className="card-row">Akdeniz University</div>
            <div className="card-row">
              <span>2018 - 2019</span>
              <span>Turkey, Antalya</span>
            </div>
          </ResumeCard>
        </div>
        <Title2>{"}"} </Title2>
      </EducationGrid>

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
