import React from "react";
import styled from "styled-components";

import Link from "@material-ui/core/Link";
import logo from "assets/images/logo.png";

export const LogoImg = styled.img`
  width: 100px;
  height: "auto";
`;
const HeaderLogo: React.FC = () => (
  <Link
    href="https://www.linkedin.com/in/mariagarciadelomana/"
    target="_blank"
    rel="noreferrer"
    aria-label="go to Lomana's linkedin">
    <LogoImg src={logo} alt="Movies Logo" />
  </Link>
);

export default HeaderLogo;
