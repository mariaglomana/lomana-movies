import React from "react";
import { Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import theme from "../assets/theme";
import LogoImg from "../components/HeaderLogo";

// const IMAGE = require("../assets/images/sign_bckg.jpg");
// https://source.unsplash.com/random

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://unsplash.com/photos/atsUqIm3wxo)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  marginBottom: {
    marginBotton: 30
  },
  marginTop: {
    marginTop: 30
  },
  column: {
    flexDirection: "column"
  }
});

const SignIn: React.FC =() => {
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <LogoImg />
          <Box mt={2}>
          </Box>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box mt={2}>
            </Box>

            <Box className={classes.column} >
              <Button
                type="submit"
                fullWidth
                component={RouterLink}
                to="/"
                variant="contained"
                color="primary"
                aria-label="sign in"
                className={classes.submit} 
              >
          Sign in
              </Button>
              <Typography variant="body2" color="textSecondary" align="center" className={classes.form}>
        New at Planet Movies?     
                <Button
                  component={RouterLink}
                  to="/sign_in"
                  variant="text"
                  color="secondary"
                  aria-label="sign up"
                >
          Register for free
                </Button>
              </Typography>
            </Box>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Grid>
    </Grid> );
};
export default SignIn;
