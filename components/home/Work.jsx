import React from "react";
import styled from "styled-components";
import { Title1, Title2, Title3, Container, ColumnLayout } from "../styles";
import { mobile, tablet, desktop } from "../styles/design";

// #region -styling-
const ProjectCard = styled.div`
  .card-container {
    background: #4a0e59;
    max-width: 33.5rem;
    height: 16.875rem;
  }
`;

const ProjectGrid = styled.section`
  background: #146a64;
  margin-bottom: 5rem;
  @media (min-width: ${tablet}) {
    display: grid;
    gap: 2rem;

    .left-side {
      grid-area: left-side;
    }
    .right-side {
      grid-area: right-side;
    }

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    grid-template-areas:
      "left-side ."
      "left-side right-side";
  }



  
`;
//#endregion

export default function Work() {
  return (
    <Container>
      <section className="titles-container">
        <Title3>Selected Works</Title3>
        <img
          src="arrow3-down-right.svg"
          alt="arrow type3"
          className="arrow-type3"
        />
      </section>

      <ProjectGrid>
        <div class="left-side">
          <ProjectCard>
            <Title2>Samitone</Title2>
            <p className="subtitle">let Design &amp; Development = 2021;</p>
            <img src="" alt="arrow of type 2" className="arrow-type2" />
            <div className="card-container">
              <img src="#" alt="image of Samitone" />
            </div>
          </ProjectCard>
          <ProjectCard>
            <Title2> What's up Coins</Title2>
            <p className="subtitle">let Design &amp; Development = 2021;</p>
            <img src="" alt="arrow of type 2" className="arrow-type2" />
            <div className="card-container">
              <img src="#" alt="image of What's up Coins" />
            </div>
          </ProjectCard>
        </div>
        <div class="right-side">
          <ProjectCard>
            <Title2>Saman's Website</Title2>
            <p className="subtitle">let Design &amp; Development = 2021;</p>
            <img src="" alt="arrow of type 2" className="arrow-type2" />
            <div className="card-container">
              <img src="#" alt="image of Saman's Website" />
            </div>
          </ProjectCard>
        </div>
      </ProjectGrid>
    </Container>
  );
}
