import React from "react";
import "./style.css";
import data from "../data/projectdata.json";

// id, projectName, title, body, link, img
const Projects = (props) => {
  const projectsRef = React.useRef();
  const projects = data.data || [];

  return (
    <div>
      <h2 className="projectstitle">Projects</h2>
      <div className="container" ref={{ projectsRef }}>
        {projects.map((P) => (
          <div className="card" key={P.id}>
            <div className="card-body">
              <h5 className="card-title" {...P.projectName}></h5>
              <h6
                className="card-subtitle mb-2 text-muted"
                {...P.projectName}
              ></h6>
              <h5 className="card-title">{...P.title}</h5>
              <p className="card-title">{...P.body}</p>
              <a
                href={P.link}
                className="card-link"
                target="blank"
                rel="noopner noreferrer"
              >
                Link
              </a>
            </div>
            <img src={P.img} className="card-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
