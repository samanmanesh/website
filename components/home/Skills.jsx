import React from "react";
import {Title2, Codes } from "../styles";
import { tablet, colors, mobile, fonts } from "../styles/design";

const SkillsWrapper = styled.div``;

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

// const Codes = styled.section`
//   position: relative;
//   margin-bottom: 5rem;
//   ::before {
//     position: absolute;
//     content: "<section>";
//     color: ${colors.fontColor.fontColor2};
//     font-family: ${fonts.codes.fontFamily};
//     font-size: ${fonts.codes.size}rem;
//     top: -2rem;
//   }
//   ::after {
//     position: absolute;
//     content: "</section>";
//     color: ${colors.fontColor.fontColor2};
//     font-family: ${fonts.codes.fontFamily};
//     font-size: ${fonts.codes.size}rem;
//     bottom: -2rem;
//   }
// `;

export default function Skills() {
  return (
    <SkillsWrapper>
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
    </SkillsWrapper>
  );
}
