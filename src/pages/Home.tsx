import * as React from "react";

import { RateCounterMessage } from "components";
import { PageContainer } from "components";
import logo from "assets/images/logo.png";

const Home: React.FC = () => {
  return (
    <PageContainer title="Home">
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <img src={logo} style={{ maxWidth: 200 }} alt="Movies Logo" />
      <RateCounterMessage />
    </PageContainer>
  );
};
export default Home;
