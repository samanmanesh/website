import React from "react";
import styled from "styled-components";
import { Title, Container, ColumnLayout } from "../styles";
import { mobile, tablet, desktop } from "../styles/design";

const ProjectCard = styled.div`
  background: red;
  width: 100%;
  min-height: 25rem;
`;

const ProjectGrid = styled.div`
  gap: 1rem;

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

  @media (min-width: ${tablet}) {
    display: grid;
  }
`;

export default function Work() {
  return (
    <Container>
      <Title>Work:</Title>
      <ProjectGrid>
        <div class="left-side">
          <ProjectCard>
            <h1>Samitone 1 </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis amet rerum libero nesciunt tempora provident
              laboriosam! Commodi, delectus debitis nobis perferendis alias quas
              ut? Autem in laboriosam nisi cum accusantium?
            </p>
          </ProjectCard>
          <ProjectCard>
            <h1>Samitone 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis amet rerum libero nesciunt tempora provident
              laboriosam! Commodi, delectus debitis nobis perferendis alias quas
              ut? Autem in laboriosam nisi cum accusantium?
            </p>
          </ProjectCard>
        </div>
        <div class="right-side">
          <ProjectCard>
            <h1>Samitone 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis amet rerum libero nesciunt tempora provident
              laboriosam! Commodi, delectus debitis nobis perferendis alias quas
              ut? Autem in laboriosam nisi cum accusantium?
            </p>
          </ProjectCard>
        </div>
      </ProjectGrid>
    </Container>
  );
}
