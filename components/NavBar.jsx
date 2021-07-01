import React from "react";
import styled from "styled-components";
import {mobile} from './styles/design'
const Nav = styled.nav`
  background: red;
  width: 100%;
  /* max-width: 1330px; */
  padding-top: 1rem;
  /* display: flex; */
  /* justify-content: center; */
  font-weight: lighter;
  font-size: 0.9rem;

  .section-1 {
      @media (min-width: ${mobile}){
        background: yellow;
        /* display: none; */
      }
      background: #440707;
      margin-right: auto;
  }

  .section-2 {
    background: #074430;
    max-width: 1330px;
    margin-right: auto;
    margin-left: 25rem;
  }
  .menu-options {
    /* max-width: 1330px; */
    /* background: blue; */
    /* display: flex; */
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
      <section className="section-1">
        <div className="nav-item">
          const ${}= ( ) ={">"} {"{display Sam's work}"}
        </div>
      </section>
      <section className="section-2">
        <div className="menu-options">
          <div className="nav-item">Work( )</div>
          <div className="nav-item">Reśumé( )</div>
          <div className="nav-item">About( )</div>
          <div className="nav-item">Contact( )</div>
        </div>
      </section>
    </Nav>
  );
}
