import React from "react";
import styled from "styled-components";

import Link from "@material-ui/core/Link";
import horizontalLogo from "../assets/images/logo_horiz.png";

const LogoImg = styled.img`
width: 200px;
height: "auto";
`;
const HeaderLogo: React.FC = ()=> ( <Link href="https://www.planetdataset.com/" target="_blank" rel="noreferrer" aria-label="go to PlanetDataset">
  <LogoImg src={horizontalLogo} alt="Planet Movies Logo"/>
</Link>
);

export default HeaderLogo;
