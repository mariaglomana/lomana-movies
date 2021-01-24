import React, {useState, useRef} from "react";
import {omit} from "lodash";
import clsx from "clsx";
import { Link as RouterLink, useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import theme from "../assets/theme";
import {User, APIResponse} from "../types";
import {getFormattedFormState, validationFormSchema, getInitialFormState} from "../utils";
import {registerUser, loginUser} from "../api";
import useForm from "../hooks/useForm";
import { InputForm} from "../components";

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
});

const defaultStateSchema = {
  first_name: { value: "", error: "" },
  last_name: { value: "", error: "" },
  email: { value: "", error: "" },
  password: { value: "", error: "" },
};

const typeMap = {
  "sign_up" : {
    "keys": ["first_name", "last_name", "email", "password"],
    "defaultFormState": defaultStateSchema,
    "validationFormStateSchema": validationFormSchema,
    "primary_btn": "Sign up",
    "secondary_btn": {
      "text": "Already have an account?",
      "action": "Sign in"
    },
  },
  "sign_in" : {
    "keys": ["email", "password"],
    "defaultFormState": omit(defaultStateSchema, ["first_name", "last_name"]),
    "validationFormStateSchema": omit(validationFormSchema, ["first_name", "last_name"]),
    "primary_btn": "Sign in",
    "secondary_btn": {
      "text": "New at Planet Movies?",
      "action": "Sign up"
    },
  },
  "profile" : {
    "keys": ["first_name", "last_name", "password"],
    "defaultFormState": omit(defaultStateSchema, ["email"]),
    "validationFormStateSchema": omit(validationFormSchema, ["email"]),
    "primary_btn": "Save changes",
    "secondary_btn": {
      "text": "",
      "action": "Cancel edition"
    },
  },
};


interface StateProp { value: string; error: string;}
interface State {
  first_name: StateProp;
  last_name: StateProp;
  email: StateProp;
  password: StateProp;
}

type FormType = "sign_in" | "sign_up" | "profile"
interface UserFormProfileProps {
  type: FormType;
  user?: User;
  setShowForm?: (showForm: boolean)=> void;
}

const UserFormProfile: React.FC<UserFormProfileProps> =({type, user, setShowForm}) => {
  const classes = useStyles();
  let history = useHistory();

  const isFullForm = type !== "sign_in";
  const isSignForm = type !== "profile";

  const {keys, defaultFormState, validationFormStateSchema, primary_btn, secondary_btn} = typeMap[type];

  const initialFormState = getInitialFormState(defaultFormState, user, keys);
  const inputSubmit = useRef<HTMLInputElement>(null);
  const [submitErrorMsg, setSubmitErrorMsg] = useState<string>("");

  const { state, disable, handleOnChange, handleOnSubmit } = useForm(
    initialFormState,
    validationFormStateSchema,
    onSubmitForm
  );

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
    if (type === "sign_up" ){
      response= await registerUser(formattedState as Omit<User, "id">);
    } else if (type === "sign_in" ){
      response= await loginUser(formattedState as Omit<User, "id"| "first_name"| "last_name">);
    // } else if (type === "profile" ){
      //todo
      // response= await resetUser(formattedState as Omit<User, "id"| "first_name"| "last_name">);
    } 

    manageAPIResponse(response);
  }

  return (
    <form className={classes.form} noValidate onSubmit={handleOnSubmit}>

      { isFullForm && ( <>
        <InputForm 
          required 
          autoFocus 
          id="first_name" 
          state={state.first_name} 
          handleOnChange={handleOnChange}
        />
        <InputForm 
          required 
          id="last_name" 
          state={state.last_name} 
          handleOnChange={handleOnChange}
        />
      </>)}

      { isSignForm && (<InputForm 
        required 
        id="email" 
        state={state.email} 
        handleOnChange={handleOnChange}
      />
      )}
      <InputForm 
        required 
        isTypePassword
        id="password" 
        state={state.password} 
        handleOnChange={handleOnChange}
      />

      <Box mb={2}>
        <Typography variant="body2" color="error" >{submitErrorMsg}</Typography>
      </Box>   

      <Box className={clsx(classes.margin, "col")}>
        {/* Submit input connected to useForm hook (not displayed) */}
        <input
          type="submit"
          ref={inputSubmit}
          name="submit" disabled={disable}
          value="Submit" 
          style={{display: "none"}}
        />
        {/* Submit button with the styles */}
        <Button
          disabled={disable}
          fullWidth
          variant="contained"
          color="primary"
          aria-label={primary_btn}
          className={classes.submit} 
          onClick={handleButtonSubmit}
        >{primary_btn} </Button>

        {isSignForm ? (
          <>
            <Typography variant="body2" color="textSecondary" align="center" className={classes.form}>
              {secondary_btn.text}  
              <Button
                component={RouterLink}
                to={isFullForm ? "/sign_in" : "/sign_up"}
                variant="text"
                color="secondary"
                aria-label={isFullForm ? "sign_in" : "sign_up"}
              >
                {secondary_btn.action}  
              </Button>
            </Typography>
          </>
        ) : (
          <Button  
            fullWidth
            variant="outlined"
            color="secondary"
            aria-label={secondary_btn.action}
            onClick={()=>setShowForm && setShowForm(false)}
          >{secondary_btn.action}</Button>
        )}
      </Box>
    </form>
  );
};
export default UserFormProfile;
