import React from "react";
import { Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import theme from "../assets/theme";
import LogoImg from "../components/HeaderLogo";

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(8),
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




const SignUp: React.FC =() => {
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LogoImg />
        <Box mt={2}>
        </Box>

        <Typography component="h1" variant="h5">
            Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
              aria-label="sign up"
              className={classes.submit} 
            >
          Sign up
            </Button>
            <Typography variant="body2" color="textSecondary" align="center" className={classes.form}>
        Already Have An Account?     
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
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
};
export default SignUp;
