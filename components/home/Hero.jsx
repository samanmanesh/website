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
      display: flex;
    }

    .title2 {
      margin-left: 3em;
      display: flex;
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

const CodeDesign = styled(motion.section)`
  color: ${colors.fontColor.fontColor2};
  font-family: ${fonts.codes.fontFamily};
  font-size: ${fonts.codes.size}rem;
  margin-top: 1.5rem;
  div:nth-child(2) {
    padding-left: 1rem;
  }
`;
// const AwesomeCodeDesign = styled(CodeDesign)``;
//#endregion

//#region -Animations-
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

const stagger = {
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
};
//#endregion

// const title12 = {
//   whileHover: { color: "#5145FC", scale: 1.2, rotate: 20 },
//   onTap: { color: "#5145FC", scale: 1.2, rotate: 20 },
// };

export default function Hero() {
  return (
    <Container exit={{ opacity: 0 }} initial="initial" animate="animate">
      <HeroWrapper>
        <CodeDesign variants={fadeInUp} transition={{ delay: 0.5 }}>
          <div> {"<htm>"}</div>
          <div> {"<body>"}</div>
        </CodeDesign>

        <motion.div
          variants={fadeInLeft}
          transition={{ delay: 0.5 }}
          className="hero-title-container"
        >
          <motion.section className="title1-title2-wrapper">
            <Title1 className="title1">
              <motion.div
                whileHover={{ color: "#00FFB7", scale: 1.2, rotate: 360 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 360 }}
              >
                H
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                i
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 180 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 180 }}
              >
                !
              </motion.div>
              <motion.span>&nbsp;</motion.span>
              <motion.span>&nbsp;</motion.span>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                I
              </motion.div>
              <motion.span>'</motion.span>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                m
              </motion.div>
              {/* Hi! &nbsp; I'm{" "} */}
            </Title1>
            <Title1
              className="title2"
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: "calc(1rem + .5vw )", opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                S
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                a
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                m
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                a
              </motion.div>
              <motion.div
                whileHover={{ color: "#5145FC", scale: 1.2, rotate: 20 }}
                whileTap={{ color: "#00FFB7", scale: 1.2, rotate: 20 }}
              >
                n
              </motion.div>
              <motion.div>,</motion.div>
              {/* Saman, */}
            </Title1>
          </motion.section>
          <motion.div variants={fadeInUp} className="subtitle">
            <Subtitle>
              <strong> Full Stack Developer </strong> Based in Toronto
            </Subtitle>
          </motion.div>
        </motion.div>
        <Description variants={stagger} smaller>
          <motion.p
            variants={fadeInUp}
            whileHover={{ color: "#5850ce", scale: 1.1 }}
            className="hero-paragraph"
          >
            I make elegant, efficient, and user-friendly digital experiences
          </motion.p>
        </Description>
      </HeroWrapper>
    </Container>
  );
}
