import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useAuth } from "../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (username && password) login(username, password);
    console.log(isAuthenticated);
  }

  //Authentication -> go to home page
  useEffect(
    function () {
      if (isAuthenticated) navigate("/user", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.formBtn}>Login</button>
    </form>
  );
}

export default Form;
