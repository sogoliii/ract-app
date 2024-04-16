import styles from "./ProjectsList.module.css";
import ProjectFigure from "./ProjectFigure";
import Spinner from "./Spinner";

//////////////////////////////////////////////
///PRODUCTS LIST

function ProjectsList({ projects, isLoading }) {
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectFigure project={project} key={project.id} />
      ))}
    </div>
  );
}

export default ProjectsList;
