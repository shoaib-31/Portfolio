import styled from "styled-components";

const ProjectsPage = () => {
  return (
    <Container id="projects">
      <Hello>Project</Hello>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 10%;
  padding-left: 10%;
`;
const Hello = styled.div`
  font-size: 25rem;
  color: #f9e000;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
export default ProjectsPage;
