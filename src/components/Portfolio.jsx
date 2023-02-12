import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { ThemeContext } from "../components/ThemeProvider";
import { useRouteMatch } from "react-router-dom";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Portfolio = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  let { path, url } = useRouteMatch();

  const projects = [
    {
      id: 1,
      title: "Array destructuring in JavaScript",
      description:
        "An explanation and demonstration of array destructuring in JavaScript, with examples and use cases.",
      image: arrayDestruct,
    },
    {
      id: 2,
      title: "Installing Node.js on different platforms",
      description:
        "A comprehensive guide on how to install Node.js on Windows, macOS, and Linux operating systems.",
      image: installNode,
    },
    {
      id: 3,
      title: "React Navigation Bar",
      description:
        "A tutorial on how to create a navigation bar component in React using hooks and styled components.",
      image: navbar,
    },
    {
      id: 4,
      title: "React Parallax Effect",
      description:
        "A step-by-step guide on how to create a parallax effect in React using react-parallax library.",
      image: reactParallax,
    },
    {
      id: 5,
      title: "React Scroll Animation",
      description:
        "A tutorial on how to add scroll animations to your React app using react-smooth library.",
      image: reactSmooth,
    },
    {
      id: 6,
      title: "React Weather App",
      description:
        "A guide on how to build a weather app in React using OpenWeatherMap API and hooks.",
      image: reactWeather,
    },
  ];

  return (
    <Router>
      <div className={`${theme}-portfolio`}>
        <h1 className="portfolio-title">My Portfolio</h1>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={`${url}/${project.id}`}>Learn More</Link>
            </div>
          ))}
        </div>
        <Route path={`${path}/:projectId`}>
          <ProjectDetails projects={projects} />
        </Route>
      </div>
    </Router>
  );
};

const ProjectDetails = ({ projects }) => {
  let { projectId } = useParams();
  const project = projects.find((project) => project.id === Number(projectId));

  return (
    <div className="project-details">
      <img src={project.image} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Portfolio;
