import { NavLink } from "react-router-dom";
import styles from "./ProjectFigure.module.css";

function ProjectFigure({ project }) {
  const { name, img, id } = project;

  return (
    <NavLink to={id}>
      <figure className={styles.projectFig}>
        <img className={styles.projectImg} src={img} alt="project" />
        <figcaption className={styles.projectCap}>{name}</figcaption>
      </figure>
    </NavLink>
  );
}

export default ProjectFigure;
