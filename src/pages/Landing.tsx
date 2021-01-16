import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import verticalLogo from "../assets/images/logo_vertical.png";
import {ReactComponent as PlanetLogo } from "../assets/images/planet_logo.svg";

function Copyright() {
  return (
    <Box style={{marginTop: 30}} >
      <Typography variant="body2" color="textSecondary">
        {"Code test for Frontend Position at "}
        <Link href="https://www.planetdataset.com/" target="_blank" rel="noreferrer" aria-label="go to PlanetDataset">
          <PlanetLogo style={{height: 15, width: "auto", marginBottom: -2}}/>
        </Link>
        {`  - ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
}

interface LandingProps {

}

const Landing: React.FC<LandingProps> =() => {
  return (
    <Container maxWidth="md" >
      <Box style={{flex: 1, verticalAlign: "center", marginTop: 40}} >
        <Typography variant="body2" color="textPrimary">
          Welcome to
        </Typography>

        <img src={verticalLogo} alt="Logo"/>
        <Copyright />

      </Box>
    </Container>
  );
};
export default Landing;
