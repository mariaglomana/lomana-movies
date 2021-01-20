import * as React from "react";
import { Link as RouterLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import verticalLogo from "../assets/images/logo_vertical.png";
import {ReactComponent as PlanetLogo } from "../assets/images/planet_logo.svg";

const useStyles = makeStyles({
  container: {
    height: "100vh", 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  }, 
  logo: {
    maxWidth: 300,
  },
  marginBottom: {
    marginBotton: theme.spacing(2)
  },
  marginTop: {
    marginTop: theme.spacing(2)
  },
  column: {
    flexDirection: "column"
  }
});



function Copyright() {
  const classes = useStyles();
  return (
    <Box className={classes.marginTop} >
      <Typography variant="body2" color="textSecondary">
        {"Code test for Frontend Position at "}
        <Link href="https://www.planetdataset.com/" target="_blank" rel="noreferrer" aria-label="go to PlanetDataset">
          <PlanetLogo style={{height: 15, width: "auto"}}/>
        </Link>
        {`  - ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
}


const Welcome: React.FC =() => {
  const classes = useStyles();
  return ( <Container maxWidth="sm" className={classes.container} >
    <Typography variant="h2" color="textPrimary" gutterBottom >
          Welcome to
    </Typography>
    <img src={verticalLogo} className={classes.logo } alt="Logo"/>
    <Box className={classes.column} >
      <Button
        component={RouterLink}
        to="/sign_up"
        variant="contained"
        color="primary"
        aria-label="sign up"
        className={classes.marginTop} >
          Create new account
      </Button>
      <Typography variant="body2" color="textPrimary" className={classes.marginBottom}>
        Already have an account?     
        <Button
          component={RouterLink}
          to="/sign_in"
          variant="text"
          color="secondary"
          aria-label="sign in"
        >
          Sign in
        </Button>
      </Typography>
    </Box>
    <Copyright />
  </Container>
  );
};
export default Welcome;
