import React, { useState } from "react";
import { startCase, replace } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import theme from "../assets/theme";
import { ErrorMessage } from "../components";

const useStyles = makeStyles({
  margin: {
    marginVertical: theme.spacing(1),
  },
});

interface StateProp {
  value: string;
  error: string;
}
interface InputFormProps {
  isTypePassword?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  id: string;
  state: StateProp;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  isTypePassword,
  required,
  autoFocus,
  id,
  state,
  handleOnChange,
}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl fullWidth className={classes.margin}>
      <InputLabel variant="filled" htmlFor={id}>
        {startCase(replace(id, "_", " "))}
      </InputLabel>
      <FilledInput
        id={id}
        type={isTypePassword && !showPassword ? "password" : "text"}
        value={state.value}
        name={id}
        onChange={handleOnChange}
        aria-describedby={id}
        inputProps={{
          "aria-label": id,
        }}
        autoFocus={autoFocus}
        required={required}
        endAdornment={
          isTypePassword && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
      <ErrorMessage error={state.error} />
    </FormControl>
  );
};
export default InputForm;
