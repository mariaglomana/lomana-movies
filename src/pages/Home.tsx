import * as React from "react";

import verticalLogo from "../assets/images/logo_vertical.png";
import { PageContainer } from "../components";

const Home: React.FC = () => {
  return (
    <PageContainer title="Home">
      <img src={verticalLogo} alt="Logo" />
    </PageContainer>
  );
};
export default Home;
