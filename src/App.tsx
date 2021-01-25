import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/index.css";
import { Appbar } from "./layout";
import { Welcome, SignIn, SignUp } from "./pages";

const App = (): React.ReactElement => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/sign_up" component={SignUp} />
          <Appbar variant="temporary" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
