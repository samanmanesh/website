import React, { useEffect }from "react";
import {
  Container,
  Title3,
  Button,
  Description,
  Arrow3,
  Codes,
} from "../styles";
import styled from "styled-components";
import { tablet, mobile, desktop, fonts } from "../styles/design";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// #region - styling-
const AboutGrid = styled.section`
  display: grid;
  font-size: ${fonts.paragraph.secondary.size}rem;
  font-weight: ${fonts.paragraph.primary.style};
  line-height: ${fonts.paragraph.primary.line};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  /* gap: 1rem; */

  grid-template-areas:
    "header header"
    "right right"
    "left left";

  @media (min-width: ${desktop}) {
    grid-template-areas:
      "header header"
      "left right"
      "left right";

    .intro {
      & > p {
        max-width: 80%;
        font-weight: bold;
      }
    }
  }

  .intro {
    grid-area: header;
    font-size: 1.5rem;
    @media (min-width: ${mobile}) {
      font-size: calc(1rem + 1vw);
    }
  }

  .left-side {
    grid-area: left;
  }
  .right-side {
    grid-area: right;
    display: flex;
    justify-content: center;
  }

  .body {
    max-width: 65%;
    /* @media (min-width: ${mobile}) {
    } */
    margin-bottom: 5rem;
    /* margin-inline: auto; */
    margin-left: auto;
    margin-right: auto;
  }
  .person-image-container {
    border: 1px solid white;
    min-height: 30rem;
    max-width: 60%;
    /* margin-inline: auto; */
  }
`;
//#endregion
export default function About() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  const fadeInLeft = useAnimation();
  const fadeInUp = useAnimation();
  const fadeInDown = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeInLeft.start({ x: 0, opacity: 1 });
      fadeInUp.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
      });
      fadeInDown.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
      });
    }
    if (!inView) {
      fadeInLeft.start({
        x: 1000,
        opacity: 0,
        transition: { duration: 1, delay: 0.5 },
      });
      fadeInUp.start({
        y: 100,
        opacity: 0.01,
        transition: { duration: 1, delay: 0.7 },
      });
      fadeInDown.start({
        y: -100,
        opacity: 1,
        transition: { duration: 1, delay: 0.7 },
      });
    }
  }, [inView]);

  return (
    <Container
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      ref={ref}
      id="about"
    >
      <motion.div className="titles-container"  animate={fadeInLeft}>
        <Title3>Me, Myself &amp; I</Title3>
        <Arrow3>
          <img src="arrow3-down-right.svg" alt="" className="arrow-type3" />
        </Arrow3>
      </motion.div>
      <Codes content="article">
        <AboutGrid>
          <div className="intro">
            <p>
              My name is Saman Manesh &amp; <br/> I am a Full-Stack developer focused on
              Front-End based in Toronto.
            </p>
          </div>
          <div className="left-side">
            <Description smaller>
              <p className="body">
                &nbsp; &nbsp; I enjoy using my obsessive attention to detail, my
                 love for making things, and my mission-driven work ethic to
                literally change the world. That’s why I love working with
                diverse people who want to make the world a little better.
              </p>
            </Description>
            {/* <Button className="button-connection-contact">
            <span>Lets Make Something Special</span>{" "}
            <img src="arrow5-line-right.svg" alt="" className="arrow-type5" />
          </Button> */}
          </div>
          
          <div className="right-side">
            <section className="person-image-container">
              <img src="./Saman's Image2.jpeg" alt="Samans image" className="person-image" />
            </section>
          </div>
        </AboutGrid>
      </Codes>
    </Container>
  );
}
