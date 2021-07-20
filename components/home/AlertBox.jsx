import React from "react";
import styled from "styled-components";
import { fonts } from "../styles/design";
const AlertBoxWrapper = styled.div`
  border-radius: 0.4rem;
  /* background: ${(props) => (props.error ? "#FF4242" : "#1a1a1a")}; */
  background: #1a1a1a;
  /* box-shadow: 0.5px 0.5px 1rem #7dff69; */
  box-shadow: ${(props) => (props.error ? "0.5px 0.5px 1rem #FF4242" : " 0.5px 0.5px 1rem #7dff69")};
  width: 25ch;
  height: 8rem;
  font-size: ${fonts.title3.size}rem;
  position: fixed;
  bottom: 15rem;
  right: auto;
  left: auto;
  z-index: 110;
  display: grid;
  justify-items: center;
  align-items: center;
  
  `;
export default function AlertBox({ alert }) {
  if (!alert) return <></>;

  return <AlertBoxWrapper error={alert.error}>
       {/* Message Successfully Sent! 😍 */}
      {alert.message}</AlertBoxWrapper>;
}
