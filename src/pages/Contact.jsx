import styles from "./Contact.module.css";
import Sidebar from "../components/Sidebar";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <div className="page">
      <Sidebar />
      <div className="line-vertical"></div>
      <div className={`content ${styles.contact}`}>
        <ContactInfo
          xlinkHref="images/spirit.svg#icon-phone"
          text="+989122902881"
        />
        <ContactInfo
          xlinkHref="images/spirit.svg#icon-mail"
          text="info@parmismirzababei.co"
        />
        <ContactInfo
          xlinkHref="images/spirit.svg#icon-instagram"
          text="parmis.studio"
        />
        <ContactInfo
          xlinkHref="images/spirit.svg#icon-location-pin"
          text="Niavaran-Tehran"
        />
      </div>
    </div>
  );
}

export default Contact;
