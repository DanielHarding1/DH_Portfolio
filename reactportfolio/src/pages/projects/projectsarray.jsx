import projectsdata from "../data/projectdata.json";
import Projects from "./Projects";

const ProjectsArray = () => {
  const ProjectsArr = projectsdata.map((char, i) => (
    <Projects {...char} key={i} />
  ));
  return <section>{ProjectsArr}</section>;
};

export default ProjectsArray;
