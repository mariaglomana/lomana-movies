import * as React from "react";

import {Appbar} from "../layout";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from "./mainApp/routes";
import {IRoute, MovieDetaiMatchProps} from "../types";
import MovieDetail from "./mainApp/MovieDetail";

interface MainAppProps {
}
const MainApp: React.FC<MainAppProps> =() => {
  return (<Router>
    <Appbar variant="temporary"/>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}   


      <Route exact path="/movie_detail/:movie_id" render={({match}: MovieDetaiMatchProps)=> (
        <MovieDetail movie_id={match.params.movie_id} />
      )}/>
      <Route exact path="/" children={<Redirect to="/home" />} />


    </Switch> 
  </Router>);
};

function RouteWithSubRoutes(route: IRoute) {
  return (
    <Route
      exact path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


export default MainApp;