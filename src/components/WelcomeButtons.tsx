import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
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

const WelcomeButtons: React.FC = () => {
  const classes = useStyles();
  return (
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
  );
};

export default WelcomeButtons;
