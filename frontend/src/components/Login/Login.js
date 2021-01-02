import React from "react";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${styles.login}`}
    >
      <div
        className={`d-flex justify-content-around align-items-center mb-5 ${styles.logo}`}
      >
        <img className="mr-3" src="/assets/icons/logo.svg" />
        <span className={"text-center"}>
          <strong>HSBC</strong> UK
        </span>
      </div>
      <div className={styles.loginForm}>
        <div class="d-flex flex-column input-group flex-nowrap mb-3">
          <label>Username</label>
          <input
            type="text"
            className={`w-100 form-control px-3 py-4 ${styles.usernameInput}`}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div class="d-flex flex-column input-group flex-nowrap mb-3">
          <label>Password</label>
          <input
            type="text"
            className={`w-100 form-control px-2 py-4 ${styles.usernameInput}`}
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <button className={`btn w-100 py-3 ${styles.submit}`}>Login</button>
        <div className="d-flex justify-content-between">
          <div>
            <input type="checkbox" value="" defaultValue="" />
            <span>Remember Me</span>
          </div>
          <span>Forgot password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
