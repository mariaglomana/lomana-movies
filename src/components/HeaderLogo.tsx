import React from "react";
import styled from "styled-components";

import Link from "@material-ui/core/Link";
import logo from "../assets/images/logo.png";

export const LogoImg = styled.img`
  width: 100px;
  height: "auto";
`;
const HeaderLogo: React.FC = () => (
  <Link
    href="https://www.planetdataset.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="go to PlanetDataset">
    <LogoImg src={logo} alt="Planet Movies Logo" />
  </Link>
);

export default HeaderLogo;
