import React, {useState, useRef} from "react";
import {startCase} from "lodash";
import clsx from "clsx";
import { Link as RouterLink, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import theme from "../assets/theme";
import {User, APIResponse} from "../types";
import {getFormattedFormState} from "../utils";
import {registerUser, loginUser} from "../api";
import useForm from "../hooks/useForm";
import LogoImg from "../components/HeaderLogo";
import {ErrorMessage} from "../components";


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
  margin: {
    marginVertical: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
});

const stateSchema = {
  first_name: { value: "", error: "" },
  last_name: { value: "", error: "" },
  email: { value: "", error: "" },
  password: { value: "", error: "" },
};
const validationStateSchema = {
  first_name: {
    required: true,
    validator: {
      regEx: /^[A-Za-z ]+$/,
      error: "Invalid first name format.",
    },
  },
  last_name: {
    required: true,
    validator: {
      regEx: /^[a-zA-Z ]+$/,
      error: "Invalid last name format.",
    },
  },
  email: {
    required: true,
    validator: {
      regEx: /^\S+@\S+$/,
      error: "Invalid email format.",
    },
  },
  password: {
    required: true,
    validator: {
      regEx: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      error: "Your password must contain at least six characters, including at least one letter and one number.",
    },
  },
};

const typeMap = {
  "sign_up" : {
    "formState": stateSchema,
    "validationFormStateSchema": validationStateSchema,
    "title": "Sign up",
    "secondary_btn": {
      "text": "Already have an account?",
      "action": "Sign in"
    }
  },
  "sign_in" : {
    "formState": {email: stateSchema.email, password: stateSchema.password},
    "validationFormStateSchema": {email: validationStateSchema.email, password: validationStateSchema.password},
    "title": "Sign in",
    "secondary_btn": {
      "text": "New at Planet Movies?",
      "action": "Sign up"
    }
  },
};

interface StateProp { value: string; error: string;}
interface State {
  first_name: StateProp;
  last_name: StateProp;
  email: StateProp;
  password: StateProp;
}

type FormType = "sign_in" | "sign_up"
interface UserFormProps {
  type: FormType
}

const UserForm: React.FC<UserFormProps> =({type}) => {
  const isSignUp = type === "sign_up";
  const {formState, validationFormStateSchema, title} = typeMap[type];

  const classes = useStyles();
  let history = useHistory();
  const inputSubmit = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string>("");

  const { state, disable, handleOnChange, handleOnSubmit } = useForm(
    formState,
    validationFormStateSchema,
    onSubmitForm
  );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword );
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleButtonSubmit = () => {
    inputSubmit.current && inputSubmit.current.click();
  };

  const manageAPIResponse =(response: APIResponse| undefined ) => {
    if (response && response.data){
      localStorage.setItem("planet_auth_token", response.data.token );
      history.push("/home");
    } else if (response && response.error){
      setSubmitErrorMsg(response.error);
    } else {
      setSubmitErrorMsg("An error has occurred. Please, try again later.");
    }
  };

  async function onSubmitForm(state: State) {
    const formattedState = getFormattedFormState(type, state);

    let response;
    if (isSignUp ){
      response= await registerUser(formattedState as Omit<User, "id">);
    } else {
      response= await loginUser(formattedState as Omit<User, "id"| "first_name"| "last_name">);
    }

    manageAPIResponse(response);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LogoImg />
        <Box m={2}>
        </Box>

        <Typography component="h1" variant="h5" paragraph>
          {title}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>

          { isSignUp && ( <>
            <FormControl fullWidth className={classes.margin}>
              <InputLabel 
                variant="filled"
                required
                htmlFor="signup-firstName">First Name</InputLabel>
              <FilledInput
                id="signup-firstName"
                value={startCase(state.first_name.value)}
                name="first_name"
                onChange={handleOnChange}
                aria-describedby="firstName"
                inputProps={{
                  "aria-label": "firstName",
                }}
                autoFocus
                required
              />
              <ErrorMessage error={state.first_name.error}/>
            </FormControl>

            <FormControl fullWidth className={classes.margin}>
              <InputLabel 
                variant="filled"
                required
                htmlFor="signup-last_name">Last Name</InputLabel>
              <FilledInput
                id="signup-last_name"
                value={startCase(state.last_name.value)}
                onChange={handleOnChange}
                name="last_name"
                aria-describedby="last_name"
                inputProps={{
                  "aria-label": "last_name",
                }}
                required
              />
              <ErrorMessage error={state.last_name.error}/>
            </FormControl>
          </>)}

          <FormControl fullWidth className={classes.margin}>
            <InputLabel 
              variant="filled"
              required
              htmlFor="signup-email">Email Address</InputLabel>
            <FilledInput
              id="signup-email"
              value={state.email.value}
              onChange={handleOnChange}
              name="email"
              aria-describedby="email"
              inputProps={{
                "aria-label": "email",
              }}
              required
            />
            <ErrorMessage error={state.email.error}/>
          </FormControl>

          <FormControl fullWidth className={classes.margin} variant="filled">
            <InputLabel 
              variant="filled"
              required
              htmlFor="signup-password">Password</InputLabel>
            <FilledInput
              id="signup-password"
              type={showPassword ? "text" : "password"}
              value={state.password.value}
              onChange={handleOnChange}
              name="password"
              aria-describedby="password"
              inputProps={{
                "aria-label": "password",
              }}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <ErrorMessage error={state.password.error}/>
          </FormControl>

          <Box mb={2}>
            <Typography variant="body2" color="error" >{submitErrorMsg}</Typography>
          </Box>   

          <Box className={clsx(classes.margin, "col")}>
            {/* Submit button with the styles */}
            <Button
              disabled={disable}
              fullWidth
              variant="contained"
              color="primary"
              aria-label={title}
              className={classes.submit} 
              onClick={handleButtonSubmit}
            >{title} </Button>
            {/* Submit input connected to useForm hook (not displayed) */}
            <input
              type="submit"
              ref={inputSubmit}
              name="submit" disabled={disable}
              value="Submit" 
              style={{display: "none"}}
            />

            <Typography variant="body2" color="textSecondary" align="center" className={classes.form}>
              {typeMap[type].secondary_btn.text}  
              <Button
                component={RouterLink}
                to={isSignUp ? "/sign_in" : "/sign_up"}
                variant="text"
                color="secondary"
                aria-label={isSignUp ? "sign_in" : "sign_up"}
              >
                {typeMap[type].secondary_btn.action}  
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
export default UserForm;
