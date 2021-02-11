/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, Suspense } from "react";
import clsx from "clsx";
import { Route, Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

import { NavItem, HeaderLogo } from "components";
import { Movies } from "pages";

const Home = React.lazy(() => import("pages/Home"));
const Rate = React.lazy(() => import("pages/Rate"));
const Favorites = React.lazy(() => import("pages/Favorites"));
const Profile = React.lazy(() => import("pages/Profile"));
const MovieDetail = React.lazy(() => import("pages/MovieDetail"));

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  flex: {
    flex: 1,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbarMargin: theme.mixins.toolbar,
  aboveDrawer: {
    zIndex: theme.zIndex.drawer + 1,
    widht: "100%",
  },
  barContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  white: {
    backgroundColor: "#ffffff",
  },
});

const MyToolbar = withStyles(styles)(
  ({ classes, title, onMenuClick, themeControl }) => (
    <div>
      <AppBar className={classes.aboveDrawer} color="primary" position="fixed">
        <Toolbar className={classes.barContent}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={onMenuClick}>
            <MenuIcon />
          </IconButton>
          <HeaderLogo />
          {themeControl}
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </div>
  ),
);

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, onItemClick }) => (
    <>
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div
          className={clsx({
            [classes.toolbarMargin]: variant === "persistent",
          })}
        />
        <List>
          <NavItem name="home" onClose={onClose} />
          <NavItem name="movies" onClose={onClose} />
          <NavItem name="rate" onClose={onClose} />
          <NavItem name="favorites" onClose={onClose} />
          <NavItem name="profile" onClose={onClose} />
          <NavItem name="sign_out" onClose={onClose} />
        </List>
      </Drawer>
      <main className={classes.content}>
        <Route exact path="/home" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/rate" component={Rate} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/movie_detail/:movie_id"
          render={({ match }) => (
            <MovieDetail movie_id={match.params.movie_id} />
          )}
        />
        <Redirect from="/" to="/movies" />
      </main>
    </>
  ),
);

function AppBarInteraction({ classes, variant, themeControl }) {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("Home");

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const onItemClick = (title) => () => {
    setTitle(title);
    setDrawer(variant === "temporary" ? false : drawer);
    setDrawer(!drawer);
  };

  return (
    <Box className={classes.root}>
      <Suspense fallback={<CircularProgress />}>
        <MyToolbar
          title={title}
          onMenuClick={toggleDrawer}
          themeControl={themeControl}
        />
        <MyDrawer
          open={drawer}
          onClose={toggleDrawer}
          onItemClick={onItemClick}
          variant={variant}
          anchor={"right"}
        />
      </Suspense>
    </Box>
  );
}

export default withStyles(styles)(AppBarInteraction);
