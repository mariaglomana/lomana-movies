import React from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";

import Link from "@material-ui/core/Link";
import logo from "assets/images/logo.png";
import logo_dark_theme from "assets/images/logo_dark_theme.png";

export const LogoImg = styled.img`
  width: 100px;
  height: "auto";
`;
const HeaderLogo: React.FC = () => {
  const theme = useTheme();
  const mode = theme.palette.type;

  return (
    <Link
      href="https://www.linkedin.com/in/mariagarciadelomana/"
      target="_blank"
      rel="noreferrer"
      aria-label="go to Lomana's linkedin">
      <LogoImg
        src={mode === "light" ? logo : logo_dark_theme}
        alt="Movies Logo"
      />
    </Link>
  );
};

export default HeaderLogo;
