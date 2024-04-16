import { useParams } from "react-router-dom";
import styles from "./SingleProject.module.css";
import ImageGallery from "react-image-gallery";

function SingleProject({ projects }) {
  const { id } = useParams();
  const project = projects.filter((project) => project.id === id);
  const images = project[0].images;

  return (
    <div className={styles.ProjectContent}>
      <ImageGallery
        items={images}
        showPlayButton={false}
        slideOnThumbnailOver={true}
        showIndex={true}
      />
    </div>
  );
}

export default SingleProject;
