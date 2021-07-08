import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "./styles/design";

//#region -styling-
const Nav = styled.nav`
  /* background: red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  font-size: clamp(0.9rem, 1.1vw, 1.3rem);
  > * {
    padding: 1.5em;
  }

  @media (max-width: ${tablet}) {
    position: fixed;
    background: #0000009d;
    > * {
      padding: 0.5rem;
    }
  }

  .anime-function-container {
    font-size: clamp(0.7em, 0.7vw, 1em);
    align-self: center;
    /* background: #3737a4; */
  }

  .nav-items-container {
    display: flex;
    /* background: #167b16; */
    justify-content: space-between;
    margin-right: 10%;
    margin-left: auto;
    .nav-item {
      cursor: pointer;
      padding-inline: 1rem;
      :hover {
        transition: all 0.5s ease;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  @media (max-width: ${mobile}) {
    .anime-function-container {
      display: none;
      /* background: #1f4d77; */
    }
    .nav-items-container {
      flex-grow: 1;
      margin: 0;
    }
  }

  @media (max-width: ${tablet}) {
    .anime-function-container {
      /* background: #5e771f; */
    }
    .nav-items-container {
      margin: 0;
    }
  }

  //     &:first-child {
  //       margin-right: auto;
  //     }
  //     &:not(:first-child) {
  //       margin-left: 0.5rem;
  //     }
`;
//#endregion
export default function NavBar() {
  const scrollHandler = (id) => {
    id.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Nav>
      <div className="anime-function-container">
        const {"hero"} = ( ) ={">"} {"{display hero}"}
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
