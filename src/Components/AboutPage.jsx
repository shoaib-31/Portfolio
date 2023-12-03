import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";
import Pic from "/Pic.svg";
import { useEffect, useRef } from "react";

const handleDownload = () => {
  const pdfUrl = "/Resume.pdf";
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
const sendEmail = () => {
  var recipientEmail = "shoaibakmasood@gmail.com";

  var emailSubject = "Regarding Job Opportunity";

  var emailContent = "Hello Shoaib, we would like to offer you a job.";

  var gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=" +
    encodeURIComponent(recipientEmail) +
    "&su=" +
    encodeURIComponent(emailSubject) +
    "&body=" +
    encodeURIComponent(emailContent);

  window.open(gmailLink, "_blank");
};

const AboutPage = () => {
  const aboutRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    observer.observe(aboutRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Container id="about">
      <Left>
        <Image src={Pic} />
      </Left>
      <Right ref={aboutRef}>
        <Light>I&apos;m a</Light>
        <Dark>Full Stack Developer</Dark>
        <Buttons>
          <Button onClick={handleDownload}>
            <FaDownload />
            &nbsp;Download CV
          </Button>
          <Button onClick={sendEmail}>Hire Me</Button>
        </Buttons>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 110vh;
  border-width: 5px 0;
  display: flex;
  overflow-x: hidden;
  padding: 2rem 0;
`;
const Left = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  transition: all 0.6s ease-in-out;
  transform: translateX(50%);
  opacity: 0;
  filter: blur(10px);
  &.show {
    filter: blur(0px);
    transform: translateX(0);
    opacity: 1;
  }
`;
const Light = styled.div`
  color: #5d5d5d;
  font-size: 4rem;
  font-weight: 700;
  @media (max-width: 1300px) {
    font-size: 3rem;
  }
`;
const Dark = styled.div`
  color: white;
  font-size: 7rem;
  font-weight: 700;
  @media (max-width: 1300px) {
    font-size: 6rem;
  }
`;
const Buttons = styled.div`
  height: auto;
  width: 100%;
`;
const Button = styled.button`
  aspect-ratio: 4;
  width: fit-content;
  padding: 1rem;
  border: none;
  margin: 1rem;
  border-radius: 1rem;
  background: linear-gradient(to right, #196bca, #f50166);
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export default AboutPage;
