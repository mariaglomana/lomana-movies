import {IRoute} from "../../types";
import Home from "./Home";
import Movies from "./Movies";
import Rate from "./Rate";
import Profile from "./Profile";

const routes : IRoute[] = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/movies",
    component: Movies
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