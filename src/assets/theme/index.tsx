import { createMuiTheme } from "@material-ui/core/styles";


import palette from "./palette";

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette,
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

export default theme;
