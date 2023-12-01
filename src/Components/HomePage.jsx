import styled, { keyframes } from "styled-components";

const HomePage = () => {
  return (
    <Container id="home">
      <Hello>hello.</Hello>
      <Scroll>&mdash; scroll down</Scroll>
    </Container>
  );
};

const bounce = keyframes`
  0% {
    background-position: bottom 0 right 0;
  }
  50% {
    background-position: bottom 0 right 50rem;
  }
  100% {
    background-position: bottom 0 right 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  padding-top: 10%;
  padding-left: 10%;
`;

const Hello = styled.div`
  font-size: 25rem;
  background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  animation: ${bounce} 2s ease-in-out infinite;
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
