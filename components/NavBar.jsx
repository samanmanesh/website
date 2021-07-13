import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { mobile, tablet, colors } from "./styles/design";
import { motion } from "framer-motion";

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
    }
    .nav-items-container {
      margin: 0;
    }
  }

  // applying moving nav for just mobile and tablet
  @media (max-width: ${tablet}) {
    position: fixed;
    width: 100%;
    border-bottom: 1px solid white;
    /* background: #030304d7; */
    background: rgb(23, 24, 28);
    z-index: 100;
    > * {
      font-size: 1rem;
    }

    top: 0;
    transition: all 1.5s ease;
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

    // if (id === work) {
    //   setCodeState("Work");
    // }else if (id === resume){
    //   setCodeState("Resume");
    // }else if (id ===about){
    //   setCodeState("About");
    // }
    // else if (id === contact){
    //   setCodeState("Contact");
    // }
  };

  const [showNav, setShowNav] = useState(false);

  let lastScroll = 0;
  const controlNavbar = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > 0 && currentPosition > lastScroll) {
      setShowNav(true);
    } else {
      setShowNav(false);
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
      condition={showNav}
      // initial={{ y: -100, opacity: 0 }}
      // animate={{ y: 0 , opacity: 1 }}
      // transition={{ delay: 0.5 } }
    >
      <div className="anime-function-container">
        {/* const {codeState} = ( ) ={">"} {"{display"} {codeState}}
        {"}"}; */}
        SAMAN MANESH
      </div>

      <div className="nav-items-container">
        <div className="nav-item" onClick={() => scrollHandler(work)}>
          Work ( )
        </div>
        <div className="nav-item" onClick={() => scrollHandler(resume)}>
          Reśumé ( )
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
