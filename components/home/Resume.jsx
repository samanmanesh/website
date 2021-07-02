import React from "react";
import { Container, Title1, Title2, Title3 } from "../styles";
import styled from "styled-components";

const EducationGrid = styled.section``;
const ResumeCard = styled.div``;
export default function Resume() {
  return (
    <Container>
      <Title3>Resume</Title3>
      <img src="" alt="arrow type3" className="arrow-type3" />

      <Title2>Education {"{"} </Title2>
      <EducationGrid>
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
      </EducationGrid>
      <Title2>{"}"} </Title2>
    </Container>
  );
}
