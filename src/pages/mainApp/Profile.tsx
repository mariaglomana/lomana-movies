import * as React from "react";

import verticalLogo from "../../assets/images/logo_vertical.png";
import {PageContainer} from "../../components";
interface ProfileProps {

}

const Profile: React.FC<ProfileProps> =() => {
  return (
    <PageContainer title="Your profile" >
      <img src={verticalLogo} alt="Logo"/>
    </PageContainer>
  );
};
export default Profile;
