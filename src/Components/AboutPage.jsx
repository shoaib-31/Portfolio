import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";
import Pic from "/Pic.svg";
const handleDownload = () => {
  const pdfUrl = "/Resume.pdf";
  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = "Resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const AboutPage = () => {
  return (
    <Container id="about">
      <Left>
        <Image src={Pic} />
      </Left>
      <Right>
        <Light>I&apos;m a</Light>
        <Dark>Full Stack Developer</Dark>
        <Buttons>
          <Button onClick={handleDownload}>
            <FaDownload />
            &nbsp;Download CV
          </Button>
          <Button>Hire Me</Button>
        </Buttons>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border-width: 5px 0;
  display: flex;
`;
const Left = styled.div`
  width: 50%;
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
`;
const Light = styled.div`
  color: #5d5d5d;
  font-size: 5rem;
  font-weight: 700;
`;
const Dark = styled.div`
  color: white;
  font-size: 8rem;
  font-weight: 700;
`;
const Buttons = styled.div`
  height: auto;
  width: 100%;
`;
const Button = styled.button`
  aspect-ratio: 4;
  width: fit-content;
  padding: 1.5rem;
  border: none;
  margin: 1rem;
  border-radius: 1.5rem;
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
