import styled from "styled-components";
import contact from "/contact.jpeg";
import gmail from "/src/Assets/contact/gmail.ico";
import linkedin from "/src/Assets/contact/linkedin.ico";
import github from "/src/Assets/contact/github.ico";
import instagram from "/src/Assets/contact/instagram.ico";
import twitter from "/src/Assets/contact/twitter.ico";
import { useEffect, useRef } from "react";
const ContactPage = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  const box4Ref = useRef();
  const box5Ref = useRef();
  const box6Ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    observer.observe(box1Ref.current);
    observer.observe(box2Ref.current);
    observer.observe(box3Ref.current);
    observer.observe(box4Ref.current);
    observer.observe(box5Ref.current);
    observer.observe(box6Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Container id="contact">
      <Left>
        <Image src={contact} />
        <p
          style={{
            color: "#fff",
            width: "60%",
            fontSize: "1.5rem",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          I will be happy to connect with you. You can contact me through any of
          the following links.
        </p>
        <Contact ref={box1Ref}>
          <Icon src={gmail} />
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:shoaibakmasood@gmail.com"
          >
            {" "}
            shoaibakmasood@gmail.com
          </Link>
        </Contact>
        <Contact ref={box2Ref}>
          <Icon src={linkedin} />
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="www.linkedin.com/in/shoaib31"
          >
            www.linkedin.com/in/shoaib31
          </Link>
        </Contact>
        <Contact ref={box3Ref}>
          <Icon src={github} />
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/shoaib-31"
          >
            https://github.com/shoaib-31
          </Link>
        </Contact>
        <Contact ref={box4Ref}>
          <Icon src={instagram} />
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/shoaib_a_5"
          >
            https://instagram.com/shoaib_a_5
          </Link>
        </Contact>
        <Contact ref={box5Ref}>
          <Icon src={twitter} />
          &nbsp;
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Shoaib_31"
          >
            https://twitter.com/Shoaib_31
          </Link>
        </Contact>
      </Left>
      <Right>
        <Say>
          I can&apos;t wait to hear from you. Fill out the form below and
          I&apos;ll get back to you shortly.
        </Say>
        <StyledForm
          ref={box6Ref}
          action="https://formspree.io/f/meqbbwoy"
          method="POST"
        >
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledInput required type="text" id="name" name="name" />

          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput required type="email" id="email" name="email" />

          <StyledLabel required htmlFor="message">
            Message:
          </StyledLabel>
          <StyledTextArea
            id="message"
            rows={10}
            name="message"
          ></StyledTextArea>

          <Btn type="submit">Submit</Btn>
        </StyledForm>
      </Right>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #101010;
  border-radius: 2rem;
  width: 30rem;
  height: fit-content;
  padding: 2rem;
  border: 2px solid white;
  margin: 1rem;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  transform: translateY(2rem);
  opacity: 0;
  filter: blur(5px);
  &.show {
    filter: blur(0px);
    transform: translateY(0);
    opacity: 1;
  }
`;
const Btn = styled.button`
  margin: 1rem 0;
  height: 3rem;
  font-size: 1.5rem;
  border-radius: 0.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #196bca, #f50166);
  color: white;
  font-weight: 700;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: linear-gradient(to right, #196bca, #196bca);
  }
`;
const StyledTextArea = styled.textarea`
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 0 0.5rem;
  font-size: 1.3rem;
`;
const StyledLabel = styled.label`
  color: white;
  font-size: 1.5rem;
`;
const StyledInput = styled.input`
  width: 80%;
  height: 2rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 0 0.5rem;
  font-size: 1.3rem;
`;
const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Say = styled.div`
  color: white;
  width: 70%;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
`;
const Left = styled.div`
  width: 40%;
  height: 100%;
  border: 2px solid white;
  border-top: none;
  border-left: none;
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const Icon = styled.img`
  width: 2rem;
  aspect-ratio: 1;
`;
const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const Image = styled.img`
  width: 50%;
  aspect-ratio: 1;
  border-radius: 50%;
`;
const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  transition: all 0.4s ease-in-out;
  transform: translateY(2rem);
  opacity: 0;
  filter: blur(5px);
  &:nth-child(1) {
    transition-delay: 0.1s;
  }

  &:nth-child(2) {
    transition-delay: 0.2s;
  }

  &:nth-child(3) {
    transition-delay: 0.3s;
  }
  &:nth-child(4) {
    transition-delay: 0.8s;
  }
  &:nth-child(5) {
    transition-delay: 0.9s;
  }
  &.show {
    filter: blur(0px);
    transform: translateY(0);
    opacity: 1;
  }
`;
export default ContactPage;
