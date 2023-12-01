import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <Nav>
      <StyledLink
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
        show={activeLink === "home"}
      >
        home
      </StyledLink>
      <StyledLink
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
        show={activeLink === "about"}
      >
        about me
      </StyledLink>
      <StyledLink
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
        show={activeLink === "skills"}
      >
        skills
      </StyledLink>
      <StyledLink
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
        show={activeLink === "projects"}
      >
        projects
      </StyledLink>
      <StyledLink
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        onSetActive={handleSetActive}
        show={activeLink === "contact"}
      >
        say hello
      </StyledLink>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100vh;
  height: 2rem;
  right: -48vh;
  top: 45vh;
  position: fixed;
  transform: rotateZ(-90deg);
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding-bottom: 10rem;
`;
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${(props) => (props.show ? "#fff" : "#484848")};
  margin: 0 1.5rem;
  font-weight: 300;
  position: relative;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    display: ${(props) => (props.show ? "block" : "none")};
    width: 100%;
    background-color: #fff;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
    height: 2px;
    top: 3rem;
  }
`;
export default Navbar;
