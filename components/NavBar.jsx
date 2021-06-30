import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  max-width: 1000px;
  padding-top: 1rem;
  display: flex;
  & > * {
      &:first-child {
          margin-right: auto;
      }
      &:not(:first-child) {
          margin-left: 0.5rem;
      }
  }
`;
export default function NavBar() {
    return (
        <Nav>
            <div className="nav-item">Saman S.</div>
            <div className="nav-item">Resume</div>
            <div className="nav-item">About</div>
            <div className="nav-item">Contact</div>
        </Nav>
    )
}
