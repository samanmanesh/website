import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { fonts, colors } from "./styles/design";
// import { v4 as uuidv4 } from 'uuid';
import { Button } from "./styles";
const ContactContainer = styled.section`
  margin-top: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* & > * {
    border-radius: 0.1rem;
  } */
`;

const Input = styled.input`
  all: unset;
  border-radius: 0.1rem;
  padding: 1rem;
  margin-block: 1rem;
  font-size: ${fonts.paragraph.primary.size}rem;
  background: ${colors.button.primary};
  color: ${colors.fontColor.fontColor1};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.button.secondary};
    opacity: 0.8;
  }
  border: 1px solid transparent;
  transition: all 0.5s ease;
  box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
  :focus {
    border-color: rgba(40, 40, 87, 0.58);
    box-shadow: 0px 4px 1rem rgba(173, 173, 174, 0.25);
  }
`;

const Label = styled.label`
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.fontColor.fontColor1};
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  all: unset;
  word-wrap: break-word;
  word-break: break-all;
  /* border: none; */
  border-radius: 0.1rem;
  margin-block: 1rem;
  background: ${colors.button.primary};
  min-height: 15ch;
  font-size: ${fonts.paragraph.primary.size}rem;
  color: ${colors.fontColor.fontColor1};
  padding: 1rem;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${colors.button.secondary};
    opacity: 0.8;
  }
  border: 1px solid transparent;
  transition: all 0.5s ease;
  box-shadow: 0px 4px 1rem -10px rgba(154, 147, 147, 0.25);
  :focus {
    border-color: rgba(40, 40, 87, 0.58);
    box-shadow: 0px 4px 1rem rgba(173, 173, 174, 0.25);
  }
`;

const ContactButton = styled.button`
  all: unset;
`;

export default function Contact() {
  const [lock, setLock] = useState(false);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    setLock(true);

    

    const combineMessage = {};
    for (let child of e.target.children)
      if (child.name) combineMessage[child.name] = child.value;

    emailjs
      .send(
        "service_1dgi6wn",
        "template_xz8wurx",
        combineMessage,
        "user_qs1RvJin7Sp2sBdWmL8uo"
      )
      .then(
        (result) => {
          console.log(result.text);
          //    inputRef.current.value.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(() =>
        setTimeout(() => {
          setLock(false) , inputRef.current.reset();
        }, 3000)
      );
    
  }


  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit} disabled={lock} ref={inputRef}>
        {/* <Label>Your Name</Label> */}
        <Input type="text" name="user_name" placeholder="Your Name" />
        {/* <Label>Your Email</Label> */}
        <Input type="email" name="user_email" placeholder="Your Email" />
        {/* <Label>Message</Label> */}
        <TextArea type="text" name="message" placeholder="Message" />
        <Button
          type="submit"
          id="btnsubmit"
          disabled={lock}
        >
          <span>Send Message !</span>
          <img src="arrow5-line-right.svg" alt="arrow type5" />
        </Button>
      </ContactForm>
    </ContactContainer>
  );
}
