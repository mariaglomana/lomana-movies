/* eslint-disable indent */
import { upperFirst } from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TheatersIcon from "@material-ui/icons/Theaters";
import StarRateIcon from "@material-ui/icons/StarRate";

interface NavItemProps {
  name: string;
  onClose: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, onClose }) => {
  const title = upperFirst(name);
  const route = name === "home" ? "" : title;
  return (
    <>
      <ListItem
        button
        key={name}
        component={Link}
        to={`/${name}`}
        onClick={() => onClose()}>
        {route && <ListItemIcon>{renderMuiIcon(name)}</ListItemIcon>}
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
    default:
      return null;
  }
}

export default NavItem;
