import React from "react";
import styles from "./Onboarding.module.scss";
import Login from "../../components/Login/Login";

const OnBoarding = () => {
  return (
    <div className={`row row-cols-2 m-0 ${styles.onboarding}`}>
      <div>
        <Login />
      </div>
      <div>
        <img
          className={styles.wallpaper}
          src="/assets/images/wallpaper-purple.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default OnBoarding;
