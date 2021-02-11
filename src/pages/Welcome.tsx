import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import logo from "assets/images/logo.png";
import logo_dark_theme from "assets/images/logo_dark_theme.png";
import { Copyright, WelcomeButtons } from "components";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(4),
    height: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: 300,
  },
  marginTop: {
    marginTop: theme.spacing(8),
  },
}));

const Welcome: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mode = theme.palette.type;

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div>
        <Typography variant="h2" color="textPrimary">
          Welcome to
        </Typography>
        <img
          src={mode === "light" ? logo : logo_dark_theme}
          className={classes.logo}
          alt="Movies Logo"
        />
      </div>
      <div>
        <WelcomeButtons />
        <Copyright />
      </div>
    </Container>
  );
};
export default Welcome;
