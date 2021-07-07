import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import {fonts, colors} from "./styles/design";
// import { v4 as uuidv4 } from 'uuid';

const ContactContainer = styled.section`
margin-top: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
all: unset;
padding: 1.2rem;
margin-block: 1rem;
font-size: ${fonts.paragraph.primary.size}rem;
background: ${colors.button.primary};
color: ${colors.fontColor.fontColor1};
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:${colors.fontColor.fontColor1};
  opacity: .8; 
}
`;

const Label = styled.label`
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:${colors.fontColor.fontColor1};
  opacity: 1; 
}
`;

const TextArea = styled.textarea`
/* all: unset; */
border: none;
margin-block: 1rem;
background: ${colors.button.primary};
min-height: 20ch;
font-size: ${fonts.paragraph.primary.size}rem;
color: ${colors.fontColor.fontColor1};
padding:1.2rem;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color:${colors.fontColor.fontColor1};
  opacity: .8; 
}

`;

const ContactButton = styled.button`
  
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
        <Input type="email" name="user_email" placeholder="Your Email"/>
        {/* <Label>Message</Label> */}
        <TextArea type="text" name="message" placeholder="Message" />
        <ContactButton type="submit">Send Message!</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
}
