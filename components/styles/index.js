import styled, { css } from "styled-components";
import { mobile, tablet, desktop, fonts ,colors} from "./design";

// #region -- Typography --

export const Title1 = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${fonts.title1.size}rem;
  letter-spacing: ${fonts.title1.letterSpacing}px;

  /* font-size: ${(props) => (props.larger ? 2.5 : 2)}rem;
  font-weight: Bold;
  letter-spacing: -0.1rem;
  margin: 0;
  ${(props) =>
    props.larger &&
    css`
      color: white;
      mix-blend-mode: saturation;
    `}
  position: relative;



  @media (min-width: ${mobile}) {
    background: red;
    font-size: ${(props) => (props.larger ? 2.7 : 2.2)}rem;
  }

  @media (min-width: ${tablet}) {
    background: blue;
    font-size: ${(props) => (props.larger ? 2.9 : 2.4)}rem;
  }

  @media (min-width: ${desktop}) {
    font-size: ${(props) => (props.larger ? 3.4 : 2.9)}rem;
    background: green;
  } */
`;



export const Title2 = styled.h2`
  margin: 0;
  font-size: ${fonts.title2.size}rem;
  font-weight: medium;
  max-width: 15rem;
  /* background: blue; */
`;

export const Title3 = styled.h3`
  margin: 0;
  /* font-size: ${fonts.title3.size}rem; */
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
  width: 70%;
  /* max-width: 1320px; */
  /* width: 100%; */
  /* position: relative; */
  /* z-index: 0; */
  /* overflow-y: overflow; */
  /* margin-top: 4rem; */
  /* @media (max-width: 800px) {
    margin-top: 0rem;
  } */
  /* @media (min-height: 800px) {
    min-height: 800px;
  } */
  border: 1px solid rgb(51, 136, 255);

  .titles-container {
    position:relative;
    margin-block: 13rem;
    display: flex;
    .arrow-type3{
      margin-left: .5rem;  
    }

    ::before{
      position:absolute;
      content:"<h3>";
      bottom: 2rem;
      font-family:${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      color: ${colors.fontColor.fontColor2};
    }
    ::after{
      position:absolute;
      content:"</h3>";
      top: 2rem;
      font-family:${fonts.codes.fontFamily};
      font-size: ${fonts.codes.size}rem;
      color: ${colors.fontColor.fontColor2};
    }

  }
`;

export const ColumnLayout = styled.div`
  /* display: grid;

  @media (min-width: ${mobile}) {
    grid-template-columns: repeat(${(props) => props.columns ?? 2}, 1fr);
  } */
`;

// #endregion
