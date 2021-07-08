import React from "react";
import { Container, Title1, Title2, Title3, Button } from "../styles";
import { tablet, colors, mobile, fonts } from "../styles/design";
import styled, { css, keyframes } from "styled-components";

//#region - styling-
const Tag = styled.div`
  /* padding: 0.5rem .5rem; */
  border-bottom-left-radius: 0.3rem;
  border-bottom: 2px solid ${(props) => props.color ?? css`rgb(20, 63, 191)`};
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  ::before {
    content: "| ";
    color: ${(props) => props.color ?? css`rgb(20, 63, 191)`};
  }
  ::after {
    content: " ";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.color ?? css`rgb(20, 63, 191)`};
    mix-blend-mode: difference;
    transition: all 0.5s ease;
  }
  &:hover {
    ::after {
      /* color: #000000; */
      height: 100%;
    }
  }
`;

const Codes = styled.section`
  position: relative;
  ::before {
    position: absolute;
    content: "<section>";
    color: ${colors.fontColor.fontColor2};
    font-family: ${fonts.codes.fontFamily};
    font-size: ${fonts.codes.size}rem;
    top: -2rem;
  }
  ::after {
    position: absolute;
    content: "</section>";
    color: ${colors.fontColor.fontColor2};
    font-family: ${fonts.codes.fontFamily};
    font-size: ${fonts.codes.size}rem;
    bottom: -2rem;
  }
`;

const arrowBounce = keyframes`
  0% {
    transform: translate(0,0);
  }
  50% {
    transform: translate(3px,-3px);
  }
  100% {
    transform: translate(0,0);
  }
`;

const EducationGrid = styled.section`
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
  }
`;
const ResumeCard = styled.div`
  font-size: 1.1rem;

  @media (max-width: ${tablet}) {
    margin-block: 5rem;
  }
  .card-row {
    display: flex;
    border-bottom: 2px solid white;
    padding-block: 1rem;

    span:nth-child(2) {
      margin-left: auto;
    }

    .link {
      color: ${colors.button.secondary};
      padding-inline: 0.2rem;
    }

    .arrow {
      /* transition: all 0.1s ease; */
      animation: ${arrowBounce} linear infinite 0.6s;
      animation-direction: alternate;
      animation-fill-mode: forwards;
      animation-play-state: paused;
    }
    .link-wrapper {
      display: flex;
      align-items: center;
      /* transition: all 5s ease; */
      cursor: pointer;
      &:hover {
        /* color: white; */
        .link {
          color: white;
          transition: all 0.1s ease;
        }

        .arrow {
          color: white;
          animation-play-state: running;
        }
      }
    }

    .arrow-type4 {
      align-self: start;
    }
  }
`;

const Skills = styled.section`
  margin-top: 8rem;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .skill-container {
      max-width: 80%;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;

      & > * {
        padding: 1rem;
        margin: 1rem 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;
const Tools = styled.section`
  margin-block: 8rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tools-container {
      max-width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > * {
        padding: 1rem;
        margin: 1rem 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;

const DownloadResume = styled.div`
  background: #562222;
  display: flex;
  justify-content: space-between;
  /* width: 15rem; */
  /* padding: .5em; */
  .arrow-type5 {
    /* padding-left: auto; */
  }
`;

//#endregion
export default function Resume() {
  return (
    <Container>
      <section className="titles-container" id="resume">
        <Title3>Reśumé</Title3>
        <img
          src="arrow3-down-right.svg"
          alt="arrow type3"
          className="arrow arrow-type3"
        />
      </section>

      <Codes>
        <Title2>Education {"{"} </Title2>

        <EducationGrid>
          <div className="left-side">
            <ResumeCard>
              <div className="card-row">
                <span>Computer Programming &amp; Analysis</span>
                <span className="link-wrapper">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                </span>
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
                <span className="link-wrapper">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                </span>
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
                <span className="link-wrapper">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                </span>
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
      </Codes>
      <Codes>
        <Skills>
          <Title2>Skills {"{"}</Title2>
          <section>
            <div className="skill-container">
              <Tag color="#FA6705">HTML5</Tag>
              <Tag color="lightblue">CSS3</Tag>
              <Tag color="pink">SASS / SCSS</Tag>
              <Tag color="turquoise">TailwindCSS</Tag>
              <Tag color="rgb(255,202,40)">JavaScript</Tag>
              <Tag color="rgb(0,188,212)">ReactJS</Tag>
              <Tag color="forestgreen">VueJS</Tag>
              <Tag color="whitesmoke">NextJS</Tag>
              <Tag color="#2BE3AC">UI / UX Design</Tag>
              <Tag color="rgb(2,119,189)">C</Tag>
              <Tag color="orange">Linux &amp; Unix</Tag>
              <Tag color="#0AFF33">C#</Tag>
              <Tag color="#DE05FF">Styled Components</Tag>
            </div>
          </section>
          <Title2> {"}"}</Title2>
        </Skills>
      </Codes>
      <Codes>
        <Tools>
          <Title2>Tools {"{"}</Title2>
          <section>
            <div className="tools-container">
              <Tag color="rgb(43,158,237)">Visual Studio Code</Tag>
              <Tag color="rgb(133,47,136)">Rider</Tag>
              <Tag color="rgb(247,247,247)">Unity</Tag>
              <Tag color="rgb(1,147,49)">Vi Editor</Tag>
              <Tag color="rgb(1,222,247)">Framer</Tag>
              <Tag color="rgb(235,76,29)">Figma</Tag>
            </div>
          </section>
          <Title2>{"}"}</Title2>
        </Tools>
      </Codes>
      <Button>
        <span>Download Reśumé</span>
        <img
          src="arrow5-line-right.svg"
          alt="array type 5"
          className=" arrow-type5"
        />
      </Button>
    </Container>
  );
}
