import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { mobile, tablet, colors } from "./styles/design";
import { motion, useAnimation } from "framer-motion";

//#region -styling-
const Nav = styled(motion.nav)`
  width: 85%;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  border-bottom: 1.5px solid white;
  /* margin-inline: 1rem; */
  font-size: calc(0.7rem + 0.4vw);
  /* font-size: clamp(0.9rem, 1.1vw, 1.3rem); */
  > * {
    padding: 1.5em;
  }

  .anime-function-container {
    font-size: calc(0.4rem + 0.7vw);
    align-self: center;
    padding-left: 0.4rem;
  }

  .nav-items-container {
    display: flex;
    /* background: #167b16; */
    justify-content: space-between;
    margin-right: 10%;
    margin-left: auto;

    .nav-item {
      cursor: pointer;
      /* padding-inline: 1rem; */
      margin-inline: 1rem;

      //temporary animation for nav items
      position: relative;
      overflow: hidden;
      ::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0.1rem;
        background-color: white;
        mix-blend-mode: difference;
        transition: all 1s ease;
      }

      &:hover {
        transition: all 1s ease;
        /* padding: 0.3rem; */
        ::after {
          width: 100%;
        }
      }
      
      @media (max-width: 375px) {
        font-size: 0.50rem; /* 14px */
        line-height: 1.28rem; /* 20px */
        font-weight: 800;
      }
    }
    .nav-items-container {
      margin: 0;
    }
  }
  position: fixed;
  background: rgb(23, 24, 28);
  z-index: 100;
  // applying moving nav for just mobile and tablet
  @media (min-width: ${tablet}) {
    /* position: fixed; */
    /* width: 100%; */
    border-bottom: 2px solid white;
    /* background: #030304d7; */
    /* background: rgb(23, 24, 28); */
    /* z-index: 100; */
    > * {
      font-size: 1rem;
    }

    top: 0;
    /* transition: all 1.5s ease; */
    ${(props) =>
      props.condition &&
      `
      /* Transition effect when sliding down (and up) */
      transform: translate3d(0, -100px, 0);  
      
      // top: -60px; //Stay on top
    `}
  }

  @media (max-width: ${mobile}) {
    width: 100%;
    /* position: fixed;
    z-index: 100;
    background: rgb(23, 24, 28); */
    .anime-function-container {
      display: none;
    }
    .nav-items-container {
      flex-grow: 1;
      margin: 0;
    }
    top: 0;
    transition: all 0.9s ease;
  }
`;
//#endregion

// #region -Animation-

//#endregion
export default function NavBar() {
  // const [codeState, setCodeState] = useState("Home");

  // #region -Scrolling Section-
  const scrollHandler = (id) => {
    id.scrollIntoView({ behavior: "smooth" });
  };

  // const [showNav, setShowNav] = useState(false);
  const fadeInDown = useAnimation();

  let lastScroll = 0;
  const controlNavbar = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > 0 && currentPosition < lastScroll) {
      // setShowNav(true);
      fadeInDown.start({
        y: 1,
        opacity: 1,
        transition: { duration: 0.5, delay: 0.1 },
      });
    } else if (currentPosition > 0 && currentPosition > lastScroll) {
      // setShowNav(false);
      fadeInDown.start({
        y: -50,
        opacity: 0,
        transition: { duration: 0.5, delay: 0.1 },
      });
    }

    lastScroll = currentPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  //#endregion

  return (
    <Nav
      // condition={showNav}
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0 , opacity: 1 }}
      // transition={{ delay: 0.5 } }
      animate={fadeInDown}
    >
      <motion.div
        className="anime-function-container"
        onClick={() => scrollHandler(home)}
        whileHover={{
          // color: "#4c60a2",
          // scale: 1.2,
          // rotate: -5,
          cursor: "pointer",
        }}
        whileTap={{
          // color: "rgb(0,188,212)",
          // scale: 1.2,
          // rotate: 360,
          cursor: "pointer",
        }}
      >
        {/* const {codeState} = ( ) ={">"} {"{display"} {codeState}}
        {"}"}; */}
        SAMAN MANESH
      </motion.div>

      <div className="nav-items-container">
        <div className="nav-item" onClick={() => scrollHandler(work)}>
          Work ( )
        </div>
        <div className="nav-item" onClick={() => scrollHandler(resume)}>
          R??sum?? ( )
        </div>
        <div className="nav-item" onClick={() => scrollHandler(about)}>
          About ( )
        </div>
        <div className="nav-item" onClick={() => scrollHandler(contact)}>
          Contact ( )
        </div>
      </div>
    </Nav>
  );
}
