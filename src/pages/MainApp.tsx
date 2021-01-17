import * as React from "react";
import {Home, Search, Rate, Profile} from "./mainApp";
import SubMenu1Page from "./SubMenu1Page/SubMenu1Page";
import SubMenu2Page from "./SubMenu2Page/SubMenu2Page";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
// import Header from "../layout/Header/Header";
import {Appbar} from "../layout";
// import withAuth from "./hooks/withAuth";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// user: userState;
interface MainAppProps {
}

const MainApp: React.FC<MainAppProps> =() => {
  // const isLoggedIn = user.id === "-1" ? false : true;
  //borrar
  const user = {
    id: "111111",
    firstName: "María",
    lastName: "García",
    email: "mariagarciadelomana@gmail.com",
    password: "coconut",
  };
  return (<Router>
    {/* <Header user={user}/> */}
    <Appbar variant="temporary"/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/rate" component={Rate} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/SubMenu1" component={SubMenu1Page} />
      <Route exact path="/SubMenu2" component={SubMenu2Page} />
      {/* <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" /> */}
    </Switch> 

  </Router>);
};

export default MainApp;