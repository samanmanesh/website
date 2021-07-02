import React from "react";
import styled from "styled-components";
import { mobile } from "./styles/design";

//#region -styling-
const Nav = styled.nav`
//   background: red;
//   width: 100%;
//   padding-top: 1rem;
//   display: flex;
//   font-weight: lighter;
//   font-size: 0.9rem;
  
//   .anime-function-container{
//       background: #1f4d77;
//       @media (min-width: ${mobile}){
//           background: #19af20;
//       }
//   }

//   .menu-options {
//     background: #21ac94;
//     display: flex;
//     width: 23rem;
//   }

//     &:first-child {
//       margin-right: auto;
//     }
//     &:not(:first-child) {
//       margin-left: 0.5rem;
//     }
`;
//#endregion
export default function NavBar() {
  return (
    <Nav>
      <div className="anime-function-container">
        const ${}= ( ) ={">"} {"{display Sam's work}"}
      </div>

      <div className="nav-items-container">
        <div className="nav-item">Work( )</div>
        <div className="nav-item">Reśumé( )</div>
        <div className="nav-item">About( )</div>
        <div className="nav-item">Contact( )</div>
      </div>
    </Nav>
  );
}
