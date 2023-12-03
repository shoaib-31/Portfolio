import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import ProjectsPage from "./Components/ProjectsPage";
import MediaQuery from "react-responsive";
import SkillsPage from "./Components/SkillsPage";

function App() {
  return (
    <>
      <MediaQuery maxDeviceWidth={1099}>
        <p style={{ color: "white" }}>
          Sorry this website in currently not visible for your device size.
          Please visit few days later.
        </p>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1100}>
        <Navbar />
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
      </MediaQuery>
    </>
  );
}

export default App;
