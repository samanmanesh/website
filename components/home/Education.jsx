import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Title2, Codes } from "../styles";
import { tablet, colors, mobile, fonts } from "../styles/design";
import { motion } from "framer-motion";
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

const EducationWrapper = styled(motion.div)``;
const EducationGrid = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media (min-width: ${mobile}) {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "leftA ."
      ". right"
      "leftB .";

    .left-side {
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
  /* font-size: 1.1rem; */
  font-size: 1.1rem;

  @media (min-width: ${mobile}) {
    font-size: calc(${fonts.paragraph.primary.size}rem + 0.5vw);
    .card-row{
        padding: .8rem 0;
    }
  }

  @media (max-width: ${tablet}) {
    margin-bottom: 5rem;
    /* .left-side {
      margin-left: 5em;
    } */
   
    margin-left: ${props => props.left && `2rem` };
    margin-right: ${props => props.right && `2rem`};

  }
  .card-row {
    display: flex;
    border-bottom: 2px solid white;
    padding: 1rem 0;
    
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

export default function Education({fadeInUp}) {
  return (
    <EducationWrapper animate={fadeInUp}>
      <Codes content="section">
        <Title2>Education {"{"} </Title2>

        <EducationGrid>
          <div className="left-side">
            <ResumeCard left>
              <div className="card-row">
                <span>Computer Programming &amp; Analysis</span>
                <span className="link-wrapper">
                  <a href="https://www.senecacollege.ca/programs/fulltime/CPA.html" target="_blank">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                  </a>
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
            <ResumeCard right>
              <div className="card-row">
                <span>Civil Engineering</span>
                <span className="link-wrapper">
                <a href="http://zariau.ac.ir/index.aspx" target="_blank">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                </a>
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
            <ResumeCard left>
              <div className="card-row">
                <span>T??mer, Turkish Language Program</span>
                <span className="link-wrapper">
                <a href="https://eng.akdeniz.edu.tr/" target="_blank">
                  <span className="link">Link</span>
                  <img
                    src="arrow4-up-right.svg"
                    alt="arrow type 4"
                    className="arrow arrow-type4"
                  />
                  </a>
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
    </EducationWrapper>
  );
}
