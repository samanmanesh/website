import styled, { css } from "styled-components";
import { mobile, tablet, desktop, fonts, colors } from "./design";

// #region -- Typography --

export const Title1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${fonts.title1.size}rem;
  letter-spacing: ${fonts.title1.letterSpacing}px;
`;

export const Title2 = styled.h2`
  margin: 0;
  font-size: ${fonts.title2.size}rem;
  font-weight: medium;
  max-width: 15rem;
`;

export const Title3 = styled.h3`
  margin: 0;
  font-size: ${fonts.title3.size}rem;
  font-weight: ${fonts.title3.style};
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
  /* border: 1px solid rgb(51, 136, 255); */

  .titles-container {
    position: relative;
    margin-block: 13rem;
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

.footer-note-container{
  margin-top: 5rem;
  
  border-top: 1px solid ${colors.fontColor.fontColor1};
  display:flex;
  justify-content: flex-end;
  /* align-items: flex-start; */
  
  .footer-note{
    padding-bottom: 2rem;
    font-size:1.5rem;
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
  /* max-width: 25rem; */
`;

// #endregion
