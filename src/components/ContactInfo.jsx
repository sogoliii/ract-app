import styles from "./ContactInfo.module.css";
function ContactInfo({ xlinkHref, text }) {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactIconContainer}>
        <svg className={styles.contactIcon}>
          <use xlinkHref={xlinkHref}></use>
        </svg>
      </div>
      <span className={styles.contactText}>{text}</span>
    </div>
  );
}

export default ContactInfo;
