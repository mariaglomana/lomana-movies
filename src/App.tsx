import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import "./assets/css/index.css";
import { Appbar } from "./layout";
import { Welcome, SignIn, SignUp } from "./pages";
import { useUser, useDarkMode } from "./hooks";
import { ThemeButton } from "components";

const App = (): React.ReactElement => {
  const { isLogged } = useUser();
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={themeConfig}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/sign_in" component={SignIn} />
            <Route exact path="/sign_up" component={SignUp} />
            {isLogged ? (
              <Appbar
                variant="temporary"
                themeControl={
                  <ThemeButton
                    change={toggleDarkMode}
                    type={theme.palette.type}
                  />
                }
              />
            ) : (
              <Route path="/" component={Welcome} />
            )}
            <Route exact path="/" component={Welcome} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
