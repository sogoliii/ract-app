import styles from "./About.module.css";
import Sidebar from "../components/Sidebar";

function About() {
  return (
    <div className="page">
      <Sidebar />

      <div className="line-vertical"></div>
      <main className={`content ${styles.about}`}>
        <img
          src="public/images/parmis-about.png"
          alt="parmis"
          className={styles.aboutImg}
        />
        <div className={styles.aboutText}>
          <h2>PARMIS MIRZABABAEI</h2>
          <p>
            Let me introduce you to Parmis Mirzababei , an accomplished
            architect and painter. She has been practicing architecture since
            2010 and is the founder of Parmis Studio, which was in 2017. With a
            Master’s Degree in Architecture, she is a valuable contributor to
            Iranian architecture and periodicals. Located in Tehran, Parmis
            Studio’s portfolio includes a diverse range of projects, from
            single-family homes to large-scale complexes and urban master plans.
            Their exceptional work has been recognized with several awards over
            the past decade. Parmis Studio has been consistently recognized for
            their exceptional work, having won multiple Memar Awards over the
            past decade. This prestigious national award is held annually in
            Iran and solidifies Parmis Studio as one of the top prize-winning
            practices in the country. The team at Parmis Studio strives to make
            a lasting impact with every project, always aiming to leave a
            lasting impression on those who experience their innovative designs
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
