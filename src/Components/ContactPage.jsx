import styled from "styled-components";

const ContactPage = () => {
  return (
    <Container id="contact">
      <Hello>Contact</Hello>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
  padding-top: 10%;
  padding-left: 10%;
`;
const Hello = styled.div`
  font-size: 25rem;
  color: #f9e000;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
`;
export default ContactPage;
