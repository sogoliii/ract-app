import Sidebar from "../components/Sidebar";
import styles from "./User.module.css";
function User() {
  return (
    <div className="page">
      <Sidebar />
      <div className="line-vertical"></div>
      <div className={`content ${styles.userContent}`}>
        <h2>Welcome</h2>
        <p> Your 3d model is ready, please click on the button below!</p>
        <a
          href="http://parmismirzababaei.co/MrAziziTour/index.htm"
          className={styles.userBtn}
        >
          Show Model
        </a>
      </div>
    </div>
  );
}

export default User;
