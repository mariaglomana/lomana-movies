import {IRoute} from "../../types";
// import {Home, Search, Rate, Profile} from "./index";
import Home from "./Home";
import Search from "./Search";
import Rate from "./Rate";
import Profile from "./Profile";

const routes : IRoute[] = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/rate",
    component: Rate
  },
  {
    path: "/profile",
    component: Profile
  },
];

export default routes;