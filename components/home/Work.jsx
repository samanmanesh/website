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

  .pre-project-card-container {
    /* display: grid; */
    margin-right: 3rem;
    margin-left: 3rem;
  }
`;

const ProjectCard = styled(motion.div)`
  .card-container {
    /* border: 1px solid #5145fc; */
    cursor: pointer;
    box-shadow: 0.5px 0.5px 0.5rem #ffffff, 2px 2px 3rem #100b21;
    max-width: 100%;
    margin-bottom: 2rem;

    //when hover on before after (Enter) apply a lil bit blur
    .card-container-animate {
      position: relative;
      &:hover {
        /* background: #000000af; */
        box-shadow: 2px 2px 3rem #172637;
        /* filter: blur(0.8px);
        -webkit-filter: blur(0.8px); */
        transition: all 0.8s ease;
      }

      ::after {
        content: " Enter -> ";
        position: absolute;
        background: #ebebeb;
        display: grid;
        place-items: center;
        color: black;
        left: 10rem;
        width: 9rem;
        height: 1.2rem;
        font-size: 1.8rem;
        bottom: 1.5rem;
        opacity: 0;
        z-index: 2;
        transition: all 0.8s ease;
        @media (min-width: ${mobile}) {
          width: calc(7rem + 5vw);
          height: calc(1rem + 0.5vh);
          font-size: calc(1.3rem +0.9vw);
          left: 10rem;
          bottom: 3.5rem;
          z-index: 2;
        }
      }

      ::before {
        position: absolute;
        content: " ";
        background: #ebebeb;
        display: grid;
        place-items: center;
        color: black;
        height: 1.2rem;
        width: 7rem;
        /* font-size: 2rem; */
        bottom: 0.1rem;
        z-index: 1;
        opacity: 0;
        transition: all 0.8s ease;
        left: 10rem;
        @media (min-width: ${mobile}) {
          width: calc(5rem + 5vw);
          height: calc(0.8rem + 1vh);
          font-size: calc(1rem + 1vw);
          left: 10rem;
          bottom: 2rem;
          z-index: 1;
        }
      }
      &:hover {
        ::after {
          left: 60%;
          z-index: 2;
          opacity: 1;
          cursor: pointer;
          transition: all 0.8s ease;
        }

        ::before {
          left: 63%;
          z-index: 1;
          opacity: 1;
          cursor: pointer;
          transition: all 0.8s ease;
        }
        @media (min-width: ${mobile}) {
          ::after {
            left: 70%;
            z-index: 2;
            opacity: 1;
            cursor: pointer;
            transition: all 0.8s ease;
          }
          ::before {
            left: 73%;
            z-index: 1;
            opacity: 1;
            cursor: pointer;
            transition: all 0.8s ease;
          }
        }
      }
    }
  }

  /* .card-container-animate2 {
    position: relative;
    font-size: 1.5rem;
    @media (min-width: ${mobile}) {
      font-size: calc(1.3rem + 0.8vw);
    }
    cursor: pointer;
    ::after {
      position: absolute;
      content: " Password Required 🔒";
      left: 0;
      bottom: 5%;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      opacity: 0;
      transition: all 0.7s ease;
    }

    &:hover {
      transition: all 0.8s ease;
      ::after {
        background-color: #000000b4;
        left: 0%;
        bottom: 0;
        opacity: 1;
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
      }
    }
  } */
  .img-card {
    /* &:hover {
      filter: blur(1px);
      -webkit-filter: blur(3px);
      transition: all 0.6s ease;
    } */
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

  .video-container {
    display: grid;
    object-fit: cover;
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

  .down-side {
    margin-left: 3rem;
    margin-right: 3rem;
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

    .down-side {
      grid-area: down-side;
      margin-left: 5rem;
      margin-right: 5rem;
      margin-bottom: 3rem;
    }

    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 0.1fr 1fr 1fr 1fr; */
    grid-template-rows: 0.1fr 0.5fr 0.5fr 0.5fr;
    grid-template-areas:
      "left-side ."
      "left-side right-side"
      ". right-side"
      "down-side down-side";
  }
`;
//#endregion

const Video = styled.video`
  object-fit: cover;
  width: 100%;

  /* justify-self: center; */
`;
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
  const fadeIn = useAnimation();

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

      fadeIn.start({
        opacity: 1,
        transition: { duration: 1, delay: 0.3 },
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

      fadeIn.start({
        opacity: 0,
        transition: { duration: 1, delay: 0.3 },
      });
    }
  }, [inView]);

  const scrollHandler = (id) => {
    id.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <WorkWrapper id="work">
        <motion.section animate={fadeInLeft} className="titles-container">
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
            <div className="left-side">
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
                <div className="card-container ">
                  <a
                    href="https://samanmanesh.github.io/samitone/"
                    target="_blank"
                  >
                    <section className="card-container-animate">
                      <Image
                        src="/Samitone.png"
                        alt="image of Samitone"
                        width={400}
                        layout="responsive"
                        placeholder="blur"
                        height={200}
                        className="img-card"
                      />
                    </section>
                  </a>
                </div>
              </ProjectCard>
              <ProjectCard animate={fadeInUp}>
                <Title2>CoinBot</Title2>
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
                <div className="card-container ">
                  <a
                    href="https://github.com/samanmanesh/coinbot"
                    target="_blank"
                  >
                    <section className="card-container-animate">
                      <Image
                        src="/coinbot4.jpg"
                        alt="image of CoinBot"
                        width={400}
                        layout="responsive"
                        placeholder="blur"
                        height={200}
                        className="img-card"
                      />
                    </section>
                  </a>
                </div>
              </ProjectCard>
            </div>
            <div className="right-side">
              <ProjectCard animate={fadeInDown}>
                <Title2>RSS Reader</Title2>
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
                <div
                  className="card-container"
                  onClick={() => scrollHandler(home)}
                >
                  <a
                    href="http://rss-reader-ten-chi.vercel.app/"
                    target="_blank"
                  >
                    <section className="card-container-animate">
                      <Image
                        src="/RSS-Reader.png"
                        width={400}
                        layout="responsive"
                        placeholder="blur"
                        height={200}
                        alt="image of RSS Reader"
                        className="img-card"
                      />
                    </section>
                  </a>
                </div>
              </ProjectCard>
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
                <div
                  className="card-container"
                  onClick={() => scrollHandler(home)}
                >
                  <section className="card-container-animate">
                    <Image
                      src="/hero.png"
                      width={400}
                      layout="responsive"
                      placeholder="blur"
                      height={200}
                      alt="image of Saman's Website"
                      className="img-card"
                    />
                  </section>
                </div>
              </ProjectCard>
            </div>
            <div className="down-side">
              <ProjectCard animate={fadeIn}>
                <Title2>Hilarion</Title2>
                <div className="subtitle-arrow-container">
                  <Subtitle smaller>
                    <p className="subtitle">
                      let Design &amp; Development = 2022;
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
                  <a
                    href="https://hilarion-socialmedia-client.vercel.app/"
                    target="_blank"
                  >
                    <section className="card-container-animate video-container">
                      <Video
                        autoPlay
                        loop
                        playsinline
                        muted
                        poster="/hilarion-cover.png"
                      >
                        <source
                          src="/Hilarion2.webm"
                          type="video/webm"
                        />
                        <source
                          src="/Hilarion2.mp4"
                          type="video/mp4"
                        />
                        <p>
                          Sorry, your browser doesn't support embedded videos.
                        </p>
                      </Video>
                    </section>
                  </a>
                </div>
              </ProjectCard>
            </div>
          </ProjectGrid>
        </Codes>
      </WorkWrapper>
    </Container>
  );
}
