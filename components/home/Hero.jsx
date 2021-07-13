import React from "react";
import { Title1, Container, Subtitle, Description } from "../styles";
import styled from "styled-components";
import { fonts, colors, tablet, mobile } from "../styles/design";
import { motion } from "framer-motion";
// #region - styling-

const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .hero-title-container {
    position: relative;
    ::before {
      content: "<h1>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
    }

    .title1-title2-wrapper {
      position: relative;
      ::after {
        content: "</h1>";
        color: ${colors.fontColor.fontColor2};
        font-family: ${fonts.codes.fontFamily};
        font-size: ${fonts.codes.size}rem;
        position: absolute;
        /* left: 30rem; */
        bottom: 0.4rem;
      }
    }
    .title1 {
    }

    .title2 {
      margin-left: 3em;
      /* @media (min-width: 429px) {
        margin-left: 3em;
      } */
    }

    .subtitle {
      /* font-size: calc(1rem + 1vw); */
      /* font-size: ${fonts.paragraph.primary.size}rem; */
      /* font-weight: ${fonts.paragraph.primary.style}; */

      /* @media (min-width: ${tablet}) {
        
        font-size: ${fonts.paragraph.primary.size}rem;
        font-weight: ${fonts.paragraph.primary.style};
      } */
    }
  }

  .hero-paragraph {
    max-width: 33ch;
    margin-bottom: 4em;
    /* font-size: 1.2em;

    @media (min-width: ${mobile}){
    font-size: calc(${fonts.paragraph.primary.size}rem + 0.6vw); */

    /* } */
    font-weight: ${fonts.paragraph.primary.style};
    position: relative;
    ::before {
      position: absolute;
      content: "<p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      bottom: 4rem;
    }
    ::after {
      content: "</p>";
      color: ${colors.fontColor.fontColor2};
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      position: absolute;
      top: 4rem;
      left: 0rem;
    }
  }
`;

const CodeDesign = styled.section`
  color: ${colors.fontColor.fontColor2};
  font-family: ${fonts.codes.fontFamily};
  font-size: ${fonts.codes.size}rem;
  div:nth-child(2) {
    padding-left: 1rem;
  }
`;

const AwesomeCodeDesign = styled(CodeDesign)``;
//#endregion

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: easing, delay: 1 },
  },
};

const fadeInLeft = {
  initial: { x: 1000, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

export default function Hero() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate" >
      <HeroWrapper>
        <CodeDesign>
          <div> {"<htm>"}</div>
          <div> {"<body>"}</div>
        </CodeDesign>

        <div className="hero-title-container">
          <motion.section variants={stagger} className="title1-title2-wrapper">
            <Title1
              className="title1"
              variants={fadeInLeft}
              transition={{ delay: 0.5 }}
            >
              Hi! &nbsp; I'm{" "}
            </Title1>
            <Title1
              className="title2"
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: "calc(1rem + .5vw )", opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Saman,
            </Title1>
          </motion.section>
          <motion.div variants={fadeInUp} className="subtitle">
            <Subtitle>
              <strong> Full Stack Developer </strong> Based in Toronto
            </Subtitle>
          </motion.div>
        </div>
        <Description variants={stagger} smaller>
          <motion.p variants={fadeInUp} className="hero-paragraph">
            I make elegant, efficient, and user-friendly digital experiences
          </motion.p>
        </Description>
      </HeroWrapper>
    </Container>
  );
}
