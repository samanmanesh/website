import React,{ useState} from "react";
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
  font-size: calc(0.7rem + 0.4vw);
  /* font-size: clamp(0.9rem, 1.1vw, 1.3rem); */
  > * {
    padding-block: 1.5em;
  }

  .anime-function-container {
    font-size: calc(0.4rem + 0.7vw);
    align-self: center;
    padding-left:.4rem;
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
  

  /* @media (max-width: ${mobile}) {
    .anime-function-container {
      display: none;
    }
    .nav-items-container {
      flex-grow: 1;
      margin: 0;
    }
  } */

  /* @media (max-width: ${tablet}) {
    .anime-function-container {
      /* font-size: calc(.2rem + .5vw); */
    /* } */
    .nav-items-container {
      margin: 0;
    }
  }

  @media (max-width: ${tablet}) {
    position: fixed;
    background: ${colors.background};
    border-bottom: 1px solid white;
    z-index: 100;
   
    //Todo adding feature when you scroll up nav disappear
    > * {
      font-size: 1rem;
    }
    
  }

  @media (max-width: ${mobile}){
    width:98%;
    .anime-function-container {
      display: none;
    }
    .nav-items-container {
      flex-grow: 1;
      margin: 0;
    }
  }




`;
//#endregion
export default function NavBar() {
  // const [codeState, setCodeState] = useState("Home");

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

  return (
    <Nav>
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
