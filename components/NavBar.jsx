import React from "react";
import styled from "styled-components";
import { mobile, tablet, colors } from "./styles/design";

//#region -styling-
const Nav = styled.nav`
  width: 85%;
  display: flex;
  justify-content: space-between;
  font-weight: 100;
  border-bottom: 1.5px solid white;
  /* margin-inline: 1rem; */
  font-size: calc(.7rem + .4vw);
  /* font-size: clamp(0.9rem, 1.1vw, 1.3rem); */
  > * {
    padding: 1.5em;
  }

  @media (max-width: ${tablet}) {
    position: fixed;
    background: ${colors.background};
    border-bottom: 1px solid white;
    z-index: 100;
    //Todo adding feature when you scroll up nav disappear 
    > * {
      font-size:1rem;
      /* padding-inline: 5em; */
    }
    .nav-item{
      padding-inline: 2rem;
      background: #8d2323;
    }

  }

  .anime-function-container {
    /* font-size: clamp(0.7em, 0.7vw, 1em); */
   font-size: calc(.4rem + .7vw);
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
        {/* SAMAN MANESH */}
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
