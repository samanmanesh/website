import React from "react";
import {Title2, Codes } from "../styles";
import { tablet, colors, mobile, fonts } from "../styles/design";
import styled from "styled-components";
import { motion } from "framer-motion";
const SkillsWrapper = styled(motion.div)``;

const SkillsContainer = styled.section`
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
      font-size: 1.1rem;

      @media (min-width: ${mobile}){
        font-size: calc(${fonts.paragraph.primary.size}rem + 0.5vw);
      }

      & > * {
        padding: 1rem;
        margin: 1rem 1rem;
      }
    }
  }
`;

const Tag = styled.div`
  /* padding: 0.5rem .5rem; */
  white-space: nowrap;
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



export default function Skills({fadeInUp}) {
  return (
    <SkillsWrapper animate={fadeInUp}>
      <Codes content="section">
        <SkillsContainer>
          <Title2>Skills {"{"}</Title2>
          <section>
            <div className="skill-container">
              <Tag color={colors.orange}>HTML5</Tag>
              <Tag color="lightblue">CSS3</Tag>
              <Tag color="pink">SASS / SCSS</Tag>
              <Tag color="turquoise">TailwindCSS</Tag>
              <Tag color={colors.yellow}>JavaScript</Tag>
              <Tag color={colors.lightBlue}>ReactJS</Tag>
              <Tag color="forestgreen">VueJS</Tag>
              <Tag color="whitesmoke">NextJS</Tag>
              <Tag color={colors.lightGreen}>UI / UX Design</Tag>
              <Tag color={colors.blue}>C</Tag>
              <Tag color="orange">Linux &amp; Unix</Tag>
              <Tag color={colors.green}>C#</Tag>
              <Tag color={colors.pink}>Styled Components</Tag>
            </div>
          </section>
          <Title2> {"}"}</Title2>
        </SkillsContainer>
      </Codes>
    </SkillsWrapper>
  );
}
