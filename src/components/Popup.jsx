import styles from "./Popup.module.css";
function Popup() {
  return (
    <div className={styles.popup} id="info">
      <div className={styles.popupContent}>
        <a href="#product" className={styles.popupClose}>
          x
        </a>
        <ul>
          <li>Client: Bastak Municipality</li>
          <li>Architect: Parmis mirzababaei</li>
          <li>Area: 2400 m2</li>
          <li>location: bastak - Hormozgan</li>
          <li>Date: 2018</li>
          <li>Award: Bastak plaza competition-Honorable mention </li>
        </ul>
      </div>
    </div>
  );
}

export default Popup;
