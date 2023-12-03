import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const HomePage = () => {
  const homeRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    observer.observe(homeRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Container id="home">
      <Hello ref={homeRef}>hello.&nbsp;&nbsp;</Hello>
      <Scroll>&mdash; scroll down</Scroll>
    </Container>
  );
};

const bounce = keyframes`
  0% {
    background-position: bottom 0 right 0;
  }
  50% {
    background-position: bottom 0 right 10rem;
  }
  100% {
    background-position: bottom 0 right 0;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 102vh;
  overflow-x: hidden;
  display: flex;
  align-items: center;
`;

const Hello = styled.div`
  font-size: 25rem;
  background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  animation: ${bounce} 2s ease-in-out infinite;
  margin-left: 5%;
  transition: all 0.4s ease-in-out;
  transform: translateY(5rem);
  opacity: 0;
  filter: blur(10px);
  &.show {
    filter: blur(0px);
    transform: translateX(0);
    opacity: 1;
  }
  @media (max-width: 1300px) {
    font-size: 21rem;
    animation: none;
  }
`;

const Scroll = styled.div`
  color: #fff;
  font-size: 1.5rem;
  transform: rotateZ(-90deg);
  width: fit-content;
  bottom: 4rem;
  left: 4rem;
  position: absolute;
`;

export default HomePage;
