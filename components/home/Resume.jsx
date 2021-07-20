import React, { useEffect } from "react";
import { Container, Title3, Button, Arrow3 } from "../styles";
import styled from "styled-components";
import Education from "./Education";
import Skills from "./Skills";
import Tools from "./Tools";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
//#region - styling-
const DownloadResume = styled(motion.div)`
  /* background: #562222; */
  margin-bottom: 13rem;
  .arrow-type5 {
    /* padding-left: auto; */
  }
`;
//#endregion
const stagger = {
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
};
export default function Resume() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
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
      fadeIn.start({
        y: 0,
        opacity: 0.01,
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
      id="resume"
    >
      <motion.section
        className="titles-container"
        
        animate={fadeInLeft}
      >
        <Title3>Résumé</Title3>
        <Arrow3>
          <img
            src="arrow3-down-right.svg"
            alt="arrow type3"
            className="arrow arrow-type3"
          />
        </Arrow3>
      </motion.section>
      <Education fadeInUp={fadeInUp} />
      <Skills fadeInUp={fadeInUp} />
      <Tools fadeInUp={fadeInUp} />
      <DownloadResume fadeIn={fadeIn}>
        <Button>
          <span>Download Résumé</span>
          <img
            src="arrow5-line-right.svg"
            alt="array type 5"
            className=" arrow-type5"
          />
        </Button>
      </DownloadResume>
    </Container>
  );
}
