import React from "react";
import { UserForm } from "../layout";
import { SignPageContainer } from "../components";

const SignIn: React.FC = () => (
  <SignPageContainer title="Sign in">
    <UserForm type="sign_in" />
  </SignPageContainer>
);

export default SignIn;
