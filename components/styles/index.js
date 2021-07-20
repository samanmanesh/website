import styled, { css, keyframes } from "styled-components";
import { mobile, tablet, desktop, fonts, colors } from "./design";
import { motion } from "framer-motion"
// #region -- Typography --

export const Title1 = styled(motion.h1)`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  @media (min-width: ${mobile}) {
    font-size: calc(2rem + 2.2vw);
  }

  letter-spacing: ${fonts.title1.letterSpacing}px;

  /* font-size: ${fonts.title1.tablet.size}rem; */
  /* @media (min-width: ${tablet}) {
    
    font-size: calc(1rem + 5vw);
    /* font-size: ${fonts.title1.desktop.size}rem; */
  /* letter-spacing: ${fonts.title1.desktop.letterSpacing}px; */
  /* }  */
`;

export const Title2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  @media (min-width: ${mobile}) {
    font-size: calc(${fonts.title2.size}rem + 1.2vw);
  }
  font-weight: medium;
  max-width: 15rem;
`;

export const Title3 = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  @media (min-width: ${mobile}) {
    font-size: calc(${fonts.title3.size}rem + 0.6vw);
  }
  /* font-size: ${fonts.title3.size}rem; */
  font-weight: ${fonts.title3.style};
`;

export const Subtitle = styled.p`
  font-size: ${(props) => (props.smaller ? `.7rem ` : `1rem `)};
  @media (min-width: ${mobile}) {
    font-size: ${(props) =>
      props.smaller ? `calc(.5rem + .6vw)` : `calc(.7rem + .7vw)`};
  }
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  padding: 0;
  margin: 0;

  @media (min-width: ${mobile}) {
    font-size: ${(props) =>
      props.smaller ? `calc(0.7rem + 0.6vw)` : `calc(0.7rem + .8vw)`};
  } ;
`;

export const Arrow2 = styled.section`
  width: 2.5rem;
  height: 2.5rem;
  @media (min-width: ${mobile}) {
    width: calc(1.5rem + 1.5vw);
    height: calc(1.5rem + 1.5vh);
  }
`;
export const Arrow3 = styled.section`
  width: 2.2rem;
  height: 2.2rem;

  @media (min-width: ${mobile}) {
    width: calc(1.5rem + 0.8vw);
    height: calc(1.5rem + 0.8vh);
  }
`;

// #endregion

// #region -- Layout --

export const Container = styled(motion.section)`
  min-height: 100vh;
  width: 75%;
  border: 1px solid rgb(51, 136, 255);
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-bottom: 16rem;
  :last-child{
    margin-bottom: 0;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
  }

  .titles-container {
    position: relative;
    margin-bottom: 18rem;
    display: flex;
    .arrow-type3 {
      margin-left: 0.5rem;
    }

    ::before {
      position: absolute;
      content: "<h3>";
      bottom: 3rem;
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      color: ${colors.fontColor.fontColor2};
    }
    ::after {
      position: absolute;
      content: "</h3>";
      top: 3rem;
      font-family: ${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      color: ${colors.fontColor.fontColor2};
    }
  }

  .footer-note-container {
    /* margin-top: 5rem; */
    border-top: 1px solid ${colors.fontColor.fontColor1};
    display: flex;
    justify-content: flex-end;
    /* align-items: flex-start; */

    .footer-note {
      padding-bottom: 2rem;
      @media (min-width: ${mobile}) {
        font-size: calc(0.7rem + 0.5vw);
      }
      font-family: ${fonts.codes.fontFamily};
      margin-right: 1rem;
    }
  }
`;

export const Button = styled(motion.button)`
  all: unset;
  margin: 2rem 2rem;
  text-align: center;
  max-width: 50%;
  @media (min-width: ${mobile}) {
    font-size: calc(0.6rem + 0.6vw);
  }

  border-bottom: 1px solid ${colors.fontColor.fontColor1};
  border-top: 1px solid ${colors.fontColor.fontColor1};
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & > * {
    padding: 0.6em 1em;
  }

  position: relative;
  overflow: hidden;
  ::after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
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
`;

export const Codes = styled.section`
  position: relative;
  margin-bottom: 5rem;
  ::before {
    position: absolute;
    content: "  <${props => props.content}> " ;
    color: ${colors.fontColor.fontColor2};
    font-family: ${fonts.codes.fontFamily};
    font-size: ${fonts.codes.size}rem;
    top: -2rem;
  }
  ::after {
    position: absolute;
    content: "</${props => props.content}>";
    color: ${colors.fontColor.fontColor2};
    font-family: ${fonts.codes.fontFamily};
    font-size: ${fonts.codes.size}rem;
    bottom: -2rem;
  }
`;

// #endregion

export const disappearAnim = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;
