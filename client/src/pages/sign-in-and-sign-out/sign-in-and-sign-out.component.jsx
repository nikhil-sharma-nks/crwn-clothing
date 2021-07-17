import React from "react";
import "./sign-in-and-sign-out.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignOut = () => (
  <div className="sign-in-and-sign-out">
    <div className="sign-in-container">
      <SignIn />
    </div>
    <div className="sign-up-container">
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignOut;
