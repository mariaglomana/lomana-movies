import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./assets/css/index.css";
import { Appbar } from "./layout";
import { Welcome, SignIn, SignUp } from "./pages";
import { useUser } from "./hooks";

const App = (): React.ReactElement => {
  const { isLogged } = useUser();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/sign_up" component={SignUp} />
          {isLogged ? (
            <Appbar variant="temporary" />
          ) : (
            <Route path="/">
              <Redirect to="/welcome" />
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
