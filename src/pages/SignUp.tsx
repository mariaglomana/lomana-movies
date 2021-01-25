import React from "react";
import { UserForm } from "../layout";
import { SignPageContainer } from "../components";

const SignUp: React.FC = () => (
  <SignPageContainer title="Sign up">
    <UserForm type="sign_up" />
  </SignPageContainer>
);

export default SignUp;
