import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import logo from "assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(4),
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  paper: {
    marginTop: theme.spacing(16),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    maxWidth: 300,
  },
  copyright: {
    marginTop: theme.spacing(4),
  },
  link: {
    fontWeight: 700,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary,
    },
  },
  marginBottom: {
    marginBotton: theme.spacing(4),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  btns_container: {
    display: "flex",
    flexDirection: "column",
    marginBotton: theme.spacing(10),
    alignItems: "center",
  },
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Box className={classes.copyright}>
      <Typography
        variant="body2"
        color="textSecondary"
        component="span"
        style={{ flexDirection: "row" }}>
        {"Made with 💜 by "}
        <Link
          href="https://www.linkedin.com/in/mariagarciadelomana/"
          target="_blank"
          rel="noreferrer"
          aria-label="go to mariaglomana linkedin"
          className={classes.link}
          underline="none">
          <Typography
            variant="body2"
            component="span"
            className={classes.link}
            color="textSecondary">
            {"mariaglomana"}
          </Typography>
        </Link>
        {` - ${new Date().getFullYear()}`}.
      </Typography>
    </Box>
  );
}

const Welcome: React.FC = () => {
  const classes = useStyles();
  return (
    <Box component="main" maxWidth="sm" className={classes.container}>
      <div>
        <Typography variant="h2" color="textPrimary">
          Welcome to
        </Typography>
        <img src={logo} className={classes.logo} alt="Movies Logo" />
      </div>
      <div>
        <Box className={classes.btns_container}>
          <Button
            component={RouterLink}
            to="/sign_up"
            variant="contained"
            color="primary"
            aria-label="sign up">
            Create new account
          </Button>
          <Typography
            variant="body2"
            color="textPrimary"
            className={classes.marginTop}>
            Already have an account?
            <Button
              component={RouterLink}
              to="/sign_in"
              variant="text"
              color="secondary"
              aria-label="sign in">
              Sign in
            </Button>
          </Typography>
        </Box>
        <Copyright />
      </div>
    </Box>
  );
};
export default Welcome;
