import { useState } from "react";
import {
  ProjectContent,
  ProjectHeading,
  ProjectImg,
  ProjectMainSection,
  Projects,
  ProjectSection,
  PopupOverlay,
  PopupContainer,
  CloseButton,
  PopupImage,
  PopupTitle,
  PopupText,
  PopupTech,
  TechBadge,
  ViewLink
} from "./ProjectStyleComponent";

import Eye from "../../images/Project_icons/eye.jpg";
import Ele from "../../images/Project_icons/major.png";
import Banner from "../../images/Project_icons/ATM-Program-in-Java.jpg";
import Banner1 from "../../images/Project_icons/banner.png";
import TA from "../../images/Project_icons/TA.png";

const projectData = [
  {
    img: Eye,
    title: "Eye Disease Detection by using Deep Learning",
    date: "Mar 2023",
    description:
      "A deep learning-based tool using computer vision for real-time diagnosis, enabling users to upload images and receive instant results for early detection. 👁️⚡",
    technologies: ["Python", "HTML", "Deep Learning"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ecf8ef1d4df99f8e0fe12f0789cbaeec77942e16/Mini%20Projects"
  },
  {
    img: Ele,
    title: "Electricity Monitoring & Controlling Management System",
    date: "May 2024",
    description:
      "An IoT-based electricity monitoring system for real-time power usage tracking and automated control mechanisms.",
    technologies: ["C++", "IOT", "SMPS"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ecf8ef1d4df99f8e0fe12f0789cbaeec77942e16/Major%20Project"
  },
  {
    img: Banner,
    title: "ATM Simulation System",
    date: "May 2024",
    description: "A command-line ATM system with error handling and security.",
    technologies: ["Java", "OOPS", "SOLID Principles"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ecf8ef1d4df99f8e0fe12f0789cbaeec77942e16/Java%20Projects/Atm%20Console%20Application"
  },
  {
    img: Banner1,
    title: "Guess the Number Application",
    date: "May 2024",
    description:
      "A Java-based interactive game using random number generation and conditional logic, where users guess a number with hints and multiple attempts. 🎯🔢",
    technologies: ["Java", "Looping Construct"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ecf8ef1d4df99f8e0fe12f0789cbaeec77942e16/Java%20Projects/Guess%20Game%20Application"
  },
  {
    img: Eye,
    title: "CRUD Operation using RESTful API with Spring Boot",
    date: "May 2024",
    description:
      "A RESTful API project using Java Spring Boot, Hibernate, and Postman for performing CRUD operations efficiently.",
    technologies: ["Java", "Spring Boot", "Hibernate & Postman"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ecf8ef1d4df99f8e0fe12f0789cbaeec77942e16/Java%20Projects/CRUD%20OPERATION%20USING%20SPRINGBOOT"
  },
  {
    img: TA,
    title: "TaskMaster",
    date: "Feb 2025",
    description:
      "A React Task Management app with user login/profile editing that lets you create, view, and edit tasks (name, description, start/due dates) via Axios calls to a Spring Boot REST API..",
    technologies: ["Java", "Spring Boot", "Hibernate & Postman","React JS"],
    ViewCode: "https://github.com/Senthan19/Projects/tree/ca233c4d7da7a663e01b976dc44bc83c983087e6/Java%20Projects/taskapp"
  }
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <ProjectMainSection id="projects">
      <ProjectHeading>Projects</ProjectHeading>
      <ProjectContent>
        I have worked on a wide range of projects. From web apps to Android
        apps. Here are some of my projects.
      </ProjectContent>
      <ProjectSection>
        {projectData.map((project, index) => (
          <Projects key={index} onClick={() => setSelectedProject(project)}>
            <ProjectImg src={project.img} />
            <p style={{ fontSize: "1.5rem", marginBottom: "0" }}>
              {project.title}
            </p>
            <p style={{ fontSize: "1rem", marginBottom: "0" }}>{project.date}</p>
            <p style={{ fontSize: "1rem", marginBottom: "0" }}>
              {project.description}
            </p>
            <p>
              {project.technologies.map((tech, i) => (
                <TechBadge key={i}>{tech}</TechBadge>
              ))}
            </p>
            <button>
              <a href={project.ViewCode || "#"}>View Code</a>
            </button>
          </Projects>
        ))}
      </ProjectSection>
      {selectedProject && (
        <PopupOverlay onClick={() => setSelectedProject(null)}>
          <PopupContainer onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedProject(null)}>✖</CloseButton>
            <PopupImage src={selectedProject.img} />
            <PopupTitle>{selectedProject.title}</PopupTitle>
            <PopupText>{selectedProject.date}</PopupText>
            <PopupText>{selectedProject.description}</PopupText>
            <PopupTech>
              {selectedProject.technologies.map((tech, i) => (
                <TechBadge key={i}>{tech}</TechBadge>
              ))}
            </PopupTech>
              <ViewLink href={selectedProject.ViewCode || "#"} target="_blank">View Code</ViewLink>
          </PopupContainer>
        </PopupOverlay>
      )}
    </ProjectMainSection>
  );
}
