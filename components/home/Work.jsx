import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Title2,
  Title3,
  Container,
  Subtitle,
  Arrow3,
  Arrow2,
  Codes,
} from "../styles";
import { mobile, tablet, desktop, fonts } from "../styles/design";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// import SamitoneImage from "./Samitone.png";

// #region -styling-

const WorkWrapper = styled.section`
  /* background: #1e336e; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  & > * {
    /* margin-bottom: 13rem; */
  }
`;

const ProjectCard = styled(motion.div)`
  /* margin-top: 3rem; */
  /* margin-bottom: 5rem; */
  .card-container {
    border: 1px solid #5145fc;
    max-width: 100%;
    /* min-width: calc(10rem + 10vw); */
    /* min-height: 16.875rem; */
    /* margin-top: 1rem; */
    /* min-width: 40vw; */
    /* min-height: 30vh; */
  }
  .subtitle-arrow-container {
    display: flex;
    align-items: start;
    justify-content: space-between;

    .subtitle {
      /* font-size: ${fonts.codes.size}rem; */
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
  .left-side {
    margin-right: 4rem;
    margin-bottom: 3rem;
  }
  .right-side {
    margin-left: 4rem;
    margin-bottom: 3rem;
  }

  @media (min-width: ${tablet}) {
    display: grid;
    gap: 5rem;

    .left-side {
      grid-area: left-side;
      margin-right: 0;
    }
    .right-side {
      grid-area: right-side;
      margin-left: 0;
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

// const fadeInLeft = {
//   initial: { x: 1000, opacity: 0 },
//   animate: { x: 0, opacity: 1 },
// };

export default function Work() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
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
        opacity: .01,
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
    >
      <WorkWrapper id="work">
        <motion.section
          animate={fadeInLeft}
          className="titles-container"
        
        >
          <Title3>Selected Works</Title3>
          <Arrow3>
            <img
              src="arrow3-down-right.svg"
              alt="arrow type3"
              className="arrow-type3"
            />
          </Arrow3>
        </motion.section>
        <Codes content="section">
          <ProjectGrid>
            <div class="left-side">
              <ProjectCard animate={fadeInUp}>
                <Title2>Samitone</Title2>
                <div className="subtitle-arrow-container">
                  <Subtitle smaller>
                    <p className="subtitle">
                      let Design &amp; Development = 2021;
                    </p>
                  </Subtitle>
                  <Arrow2>
                    <img
                      src="arrow2-down-left.svg"
                      alt="arrow of type 2"
                      className="arrow-type2"
                    />
                  </Arrow2>
                </div>
                <div className="card-container">
                  <a href="https://samanmanesh.github.io/samitone/" target="_blank" >
                  <Image
                    src="/Samitone.png"
                    alt="image of Samitone"
                    width={400}
                    layout="responsive"
                    placeholder="blur"
                    height={200}
                  />
                  </a>
                </div>
              </ProjectCard>
              {/* <ProjectCard>
              <Title2> What's up Coins</Title2>
              <div className="subtitle-arrow-container">
                <p className="subtitle">let Design &amp; Development = 2021;</p>
                <Arrow2>
                  <img
                    src="arrow2-down-left.svg"
                    alt="arrow of type 2"
                    className="arrow-type2"
                  />  
                </Arrow2>
              </div>
              <div className="card-container">
                <img src="#" alt="image of What's up Coins" />
              </div>
            </ProjectCard> */}
            </div>
            <div className="right-side">
              <ProjectCard animate={fadeInDown}>
                <Title2>Saman's Website</Title2>
                <div className="subtitle-arrow-container">
                  <Subtitle smaller>
                    <p className="subtitle">
                      let Design &amp; Development = 2021;
                    </p>
                  </Subtitle>
                  <Arrow2>
                    <img
                      src="arrow2-down-left.svg"
                      alt="arrow of type 2"
                      className="arrow-type2"
                    />
                  </Arrow2>
                </div>
                <div className="card-container">
                  <img src="#" alt="image of Saman's Website" />
                </div>
              </ProjectCard>
            </div>
          </ProjectGrid>
        </Codes>
      </WorkWrapper>
    </Container>
  );
}
