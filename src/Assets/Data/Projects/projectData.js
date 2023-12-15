import Ecommerce from "./e-commerce.jpg";
import Portfolio from "./Portfolio.jpg";
import Quizzr from "./Quizzr.jpg";

const projects = [
  {
    index: 1,
    title: "E-Commerce Platform",
    image: Ecommerce,
    description:
      "This is a E-Commerce Platform where you can buy products if you are a customer and if you are a seller you can sell your products. I've implemnted both functionalitites to sign up as a user and business ownner both. I've implemented JWT to build the login functionality. Users can also perform CRUD operations on their products. I've used React, Redux, Node, Express and MongoDB to build this project.",
    github: "https://github.com/shoaib-31/E-commerece-Platform.git",
    technologies: ["React", "Redux", "Node", "Express", "MongoDB"],
  },
  {
    index: 2,
    title: "Portfolio Website",
    image: Portfolio,
    description:
      "The website you are currently viewing is my portfolio website. I've used React to build this website. I've used React Hooks to manage the state of the website. I've used React Icons to add icons to the website. I've used React Scroll to add smooth scrolling to the website.I've used Github to deploy the website.",
    github: "https://github.com/shoaib-31/Portfolio.git",
    technologies: ["React", "HTML", "CSS", "Javascript"],
  },
  {
    index: 2,
    title: "Quizzr",
    image: Quizzr,
    description:
      "Crafted with passion and precision, my quizzing platform seamlessly blends MongoDB, React, Node, Express, Redux, HTML, CSS, and JavaScript. Immerse yourself in a dynamic experience where users can effortlessly create and take quizzes, showcasing the intersection of innovation and user-friendly design.",
    github: "https://github.com/shoaib-31/Quizzr.git",
    technologies: [
      "MongoDb",
      "Express",
      "Node.js",
      "React",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
];

export default projects;
