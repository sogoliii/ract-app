import styles from "./Login.module.css";
import Form from "../components/Form";
import Sidebar from "../components/Sidebar";

function Login() {
  return (
    <div className="page">
      <Sidebar />
      <div className="line-vertical"></div>
      <div className={`content ${styles.formContent}`}>
        <h2>Welcome!</h2>
        <p>Please enter your details</p>
        <Form />
      </div>
    </div>
  );
}

export default Login;
