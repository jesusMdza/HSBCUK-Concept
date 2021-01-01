import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div>
        <img className={styles.logo} src="" />
        <span>HSBC UK</span>
      </div>
      <div className={styles.loginForm}>
        <input type="email" value="" defaultValue="" />
        <input type="text" value="" defaultValue="" />
        <button>Login</button>
        <div>
          <span>Remember Me</span>
          <span>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
