import React from "react";
import styles from "./Register.module.scss";

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      <div>
        <img className={styles.logo} src="" />
        <span>HSBC UK</span>
      </div>
      <div className={styles.registerForm}>
        <input type="text" value="" defaultValue="" />
        <input type="text" value="" defaultValue="" />
        <input type="email" value="" defaultValue="" />
        <input type="text" value="" defaultValue="" />
        <button>Register</button>
        <div>
          <span>Remember Me</span>
          <span>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
