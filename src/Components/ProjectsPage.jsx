import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectData from "../Assets/Data/Projects/projectData.js";
import Githubsvg from "../Assets/skills/github.svg";
const Project = (props) => {
  const { title, description, image, github, technologies } = props.data;
  return (
    <Main>
      <span style={{ fontWeight: "800" }}>{title}</span>
      <Image src={image} />
      <Description>{description}</Description>
      <Technologies>
        <span style={{ fontWeight: "800", fontSize: "1.2rem" }}>
          Technologies:
        </span>{" "}
        {technologies.map((tech) => {
          return (
            <span
              style={{
                borderRadius: "6px",
                margin: "4px",
                backgroundColor: "#363636",
                padding: "4px",
              }}
            >
              {tech}
            </span>
          );
        })}
        <a target="_blank" rel="noopener noreferrer" href={github}>
          <Icon src={Githubsvg} alt="Github" />
        </a>
      </Technologies>
    </Main>
  );
};
const ProjectsPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.25,
    dots: true,
    speed: 1000,
    variableWidth: true,
  };
  return (
    <Container id="projects">
      <Carousel>
        <Slider {...settings}>
          {projectData.map((project) => {
            return <Project key={project.index} data={project} />;
          })}
        </Slider>
      </Carousel>
    </Container>
  );
};
const Image = styled.img`
  width: 50%;
  aspect-ratio: 16/9;
`;
const Icon = styled.img`
  aspect-ratio: 1;
  width: 3rem;
  margin: 5px;
  outline: none;
`;
const Description = styled.div`
  font-size: 1rem;
  width: 80%;
`;
const Technologies = styled.div`
  font-size: 1rem;
  width: 80%;
`;
const Carousel = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding-top: 5rem;
`;
const Main = styled.div`
  width: 60vw;
  height: 80vh;
  display: flex;
  font-size: 2rem;
  color: white;
  background-color: #171717;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 1rem;
`;
export default ProjectsPage;
