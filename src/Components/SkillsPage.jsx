import styled from "styled-components";
import css from "../Assets/webDev/css.svg";
import html from "../Assets/webDev/html.svg";
import javascript from "../Assets/webDev/javascript.svg";
import mongodb from "../Assets/webDev/mongodb.svg";
import nodejs from "../Assets/webDev/node-js.svg";
import express from "../Assets/webDev/express.svg";
import react from "../Assets/webDev/react.svg";
import redux from "../Assets/webDev/redux.svg";
import postgresql from "../Assets/webDev/postgresql.svg";
import sequelize from "../Assets/webDev/sequelize.svg";
import next from "../Assets/webDev/nextjs-2.svg";
import git from "../Assets/webDev/git.svg";
import github from "../Assets/webDev/github.svg";
import docker from "../Assets/webDev/docker.svg";
import { useEffect, useRef } from "react";

const SkillsPage = () => {
  const box1Ref = useRef();
  const box2Ref = useRef();
  const box3Ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });

    observer.observe(box1Ref.current);
    observer.observe(box2Ref.current);
    observer.observe(box3Ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Container id="skills">
      <Box ref={box1Ref} skill={"Web Development"}>
        <Logo src={html} />
        <Logo src={css} />
        <Logo src={javascript} />
        <Logo src={mongodb} />
        <Logo src={express} />
        <Logo src={react} />
        <Logo src={next} />
        <Logo src={nodejs} />
        <Logo src={postgresql} />
        <Logo src={redux} />
        <Logo src={sequelize} />
        <Circle></Circle>
      </Box>
      <Box ref={box2Ref} skill={"Computer Science Subjects"}>
        <Text>Operating Systems</Text>
        <Text>Computer Networks</Text>
        <Text>Database Management System</Text>
        <Text>Data Structures and Algorithms</Text>
        <Circle></Circle>
      </Box>
      <Box ref={box3Ref} skill={"Others"}>
        <Logo src={git} />
        <Logo src={github} />
        <Logo src={docker} />
        <Circle></Circle>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  color: white;
  font-size: 1.5rem;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 5px;
  font-family: "Source Code Pro", monospace;
`;
const Logo = styled.img`
  width: 7rem;
  height: 7rem;
`;
const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0%;
  background: linear-gradient(to right, #196bca, #f50166);
  position: absolute;
  right: 0;
  border-radius: 20px;
`;
const Box = styled.div`
  width: 60%;
  height: fit-content;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 2rem;
  background-color: #101010;
  transition: all 0.5s ease-in-out;
  transform: translateX(8rem);
  opacity: 0;
  filter: blur(10px);
  &:nth-child(1) {
    transition-delay: 0s;
  }

  &:nth-child(2) {
    transition-delay: 0.2s;
  }

  &:nth-child(3) {
    transition-delay: 0.4s;
  }
  &.show {
    filter: blur(0px);
    transform: translateX(0);
    opacity: 1;
  }
  &::after {
    content: ${(props) => (props.skill ? `'${props.skill}'` : "''")};
    color: white;
    position: absolute;
    font-size: 2rem;
    font-weight: 500;
    transition-delay: 250ms;
  }
  &:hover {
    ${Circle} {
      width: 0;
      transition: all 0.25s ease-in-out;
    }
    &::after {
      display: none;
    }
  }
`;
export default SkillsPage;
