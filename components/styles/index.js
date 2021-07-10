import styled, { css, keyframes } from "styled-components";
import { mobile, tablet, desktop, fonts, colors } from "./design";
// #region -- Typography --

export const Title1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  @media (min-width: ${mobile}){
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
  @media (min-width: ${mobile}){
  font-size: calc(${fonts.title2.size}rem + 1.2vw);

  }
  font-weight: medium;
  max-width: 15rem;
`;

export const Title3 = styled.h3`
  margin: 0;
  font-size:1.5rem;
  @media (min-width: ${mobile}) {
  font-size: calc(${fonts.title3.size}rem + .6vw);

  }
  /* font-size: ${fonts.title3.size}rem; */
  font-weight: ${fonts.title3.style};
`;


export const Subtitle  = styled.p`

font-size: ${props => props.smaller ? `.7rem ` : `1rem `};
  @media (min-width: ${mobile}){
  font-size: ${props => props.smaller ? `calc(.5rem + .6vw)` : `calc(.7rem + .7vw)`};
  }
  margin: 0;
  padding: 0;
`;



export const Description = styled.p`
  font-size: ${(props) => (props.smaller ? 1 : 1.2)}rem;
  font-weight: 400;
  margin-top: 0rem;
  letter-spacing: -0.04rem;
  max-width: 35ch;
  line-height: 2rem;
`;

// #endregion

// #region -- Layout --

export const Container = styled.section`
  min-height: 100vh;
  width: 75%;
  border: 1px solid rgb(51, 136, 255);
  padding-inline: .5rem;

  @media (max-width: ${tablet}) {
    width: 100%;
  }

  .titles-container {
    position: relative;
    margin-bottom: 13rem;
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
    margin-top: 5rem;

    border-top: 1px solid ${colors.fontColor.fontColor1};
    display: flex;
    justify-content: flex-end;
    /* align-items: flex-start; */

    .footer-note {
      padding-bottom: 2rem;
      font-size: 1.2rem;
      font-family: ${fonts.codes.fontFamily};
      margin-right: 1rem;
    }
  }
`;

export const Button = styled.button`
  all: unset;
  margin: 2rem 2rem;
  font-size: 1.5rem;
  border-bottom: 1px solid ${colors.fontColor.fontColor1};
  border-top: 1px solid ${colors.fontColor.fontColor1};
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & > * {
    padding: 0.5em 1em;
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
    padding: 0.3rem;
    ::after {
      width: 100%;
    }
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
