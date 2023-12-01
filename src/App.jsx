import "./App.css";
import AboutPage from "./Components/AboutPage";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import ProjectsPage from "./Components/ProjectsPage";
import SkillsPage from "./Components/SkillsPage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default App;
