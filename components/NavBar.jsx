import React from "react";
import styled from "styled-components";
import { mobile } from "./styles/design";
const Nav = styled.nav`
  background: red;
  width: 100%;
  /* max-width: 1330px; */
  padding-top: 1rem;
  display: flex;
  /* justify-content: center; */
  font-weight: lighter;
  font-size: 0.9rem;
  
  .anime-function-container{
      background: #1f4d77;
      @media (min-width: ${mobile}){
          background: #19af20;
      }
  }

  .menu-options {
    /* max-width: 1330px; */
    background: #21ac94;
    display: flex;
    width: 23rem;
    /* justify-content: space-between; */
    /* margin-right: 20rem; */
  }

  /* & > * {
    &:first-child {
      margin-right: auto;
    }
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
  } */
`;
export default function NavBar() {
  return (
    <Nav>
      <div className="anime-function-container">
        const ${}= ( ) ={">"} {"{display Sam's work}"}
      </div>

      <div className="menu-options">
        <div className="nav-item">Work( )</div>
        <div className="nav-item">Reśumé( )</div>
        <div className="nav-item">About( )</div>
        <div className="nav-item">Contact( )</div>
      </div>
    </Nav>
  );
}
