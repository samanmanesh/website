import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { fonts, colors } from "./styles/design";
// import { v4 as uuidv4 } from 'uuid';
import {Button} from "./styles";
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
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1dgi6wn",
        "template_xz8wurx",
        e.target,
        "user_qs1RvJin7Sp2sBdWmL8uo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        {/* <Label>Your Name</Label> */}
        <Input type="text" name="user_name" placeholder="Your Name" />
        {/* <Label>Your Email</Label> */}
        <Input type="email" name="user_email" placeholder="Your Email" />
        {/* <Label>Message</Label> */}
        <TextArea type="text" name="message" placeholder="Message" />
        <Button type="submit">
            <span>Send Message !</span>
            <img src="arrow5-line-right.svg" alt="arrow type5" /> 
        
        </Button>
      </ContactForm>
    </ContactContainer>
  );
}
