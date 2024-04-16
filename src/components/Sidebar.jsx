import AppNavVertical from "./AppNavVertical";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <AppNavVertical />
      <div className={styles.logo}>
        <img src="public/images/logo.original.PNG" alt="Logo" />
      </div>
    </div>
  );
}

export default Sidebar;
