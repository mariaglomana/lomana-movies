import * as React from "react";

import {Appbar} from "../layout";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from "./mainApp/routes";
import {IRoute} from "../types";
interface MainAppProps {
}
const MainApp: React.FC<MainAppProps> =() => {
  return (<Router>
    <Appbar variant="temporary"/>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}    </Switch> 
  </Router>);
};

function RouteWithSubRoutes(route: IRoute) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


export default MainApp;