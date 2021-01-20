import React from "react";
// import React, {useContext} from "react";
import "./assets/css/index.css";
import MainApp from "./pages/MainApp";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =() => {
  return ( <Router>
    <div className="App">
      <Switch>
        <Route path="/" component={MainApp} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/sign_up" component={SignUp} />
      </Switch>
    </div>
  </Router>
  );
};

export default App;