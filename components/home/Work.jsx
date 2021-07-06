import React from "react";
import styled from "styled-components";
import { Title1, Title2, Title3, Container, ColumnLayout } from "../styles";
import { mobile, tablet, desktop, fonts } from "../styles/design";

// #region -styling-
const ProjectCard = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  .card-container {
    border: 1px solid #5145fc;
    max-width: 98%;
    height: 16.875rem;
    margin-top: 1rem;
  }
  .subtitle-arrow-container {
    display: flex;
    align-items: end;
    justify-content: space-between;

    .subtitle {
      font-size: ${fonts.codes.size}rem;
      font-weight: 200;
      font-family: ${fonts.codes.fontFamily};
    }

    .arrow-type2 {
      margin: 0;
      padding: 0;
    }
  }
`;

const ProjectGrid = styled.section`
  @media (min-width: ${tablet}) {
    display: grid;
    gap: 3rem;

    .left-side {
      grid-area: left-side;
    }
    .right-side {
      grid-area: right-side;
    }

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 0.7fr 1fr;
    grid-template-areas:
      "left-side ."
      "left-side right-side"
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
            <div className="subtitle-arrow-container">
              <p className="subtitle">let Design &amp; Development = 2021;</p>
              <img
                src="arrow2-down-left.svg"
                alt="arrow of type 2"
                className="arrow-type2"
              />
            </div>
            <div className="card-container">
              <img src="#" alt="image of Samitone" />
            </div>
          </ProjectCard>
          {/* <ProjectCard>
            <Title2> What's up Coins</Title2>
            <div className="subtitle-arrow-container">
              <p className="subtitle">let Design &amp; Development = 2021;</p>
              <img
                src="arrow2-down-left.svg"
                alt="arrow of type 2"
                className="arrow-type2"
              />
            </div>
            <div className="card-container">
              <img src="#" alt="image of What's up Coins" />
            </div>
          </ProjectCard> */}
        </div>
        <div class="right-side">
          <ProjectCard>
            <Title2>Saman's Website</Title2>
            <div className="subtitle-arrow-container">
              <p className="subtitle">let Design &amp; Development = 2021;</p>
              <img
                src="arrow2-down-left.svg"
                alt="arrow of type 2"
                className="arrow-type2"
              />
            </div>
            <div className="card-container">
              <img src="#" alt="image of Saman's Website" />
            </div>
          </ProjectCard>
        </div>
      </ProjectGrid>
    </Container>
  );
}
