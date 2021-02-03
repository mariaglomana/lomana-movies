/* eslint-disable indent */
import { upperFirst, replace } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarRateIcon from "@material-ui/icons/StarRate";

import { useUser } from "hooks";

interface NavItemProps {
  name: string;
  onClose: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, onClose }) => {
  const { signOut } = useUser();

  const title = replace(upperFirst(name), "_", " ");
  const route = name === "sign_out" ? "/" : `/${name}`;
  const withIcon = name !== "home";

  const handleClick = () => {
    if (name === "sign_out") signOut();
    onClose();
  };
  return (
    <>
      <ListItem
        button
        key={name}
        component={Link}
        to={route}
        onClick={handleClick}>
        {withIcon && <ListItemIcon>{renderMuiIcon(name)}</ListItemIcon>}
        <ListItemText primary={title} />
      </ListItem>
    </>
  );
};

function renderMuiIcon(name: string) {
  switch (name) {
    case "profile":
      return <AccountCircleIcon />;
    case "movies":
      return <TheatersIcon />;
    case "rate":
      return <StarRateIcon />;
    case "favorites":
      return <FavoriteIcon />;
    case "sign_out":
      return <ExitToAppIcon />;
    default:
      return null;
  }
}

export default NavItem;
