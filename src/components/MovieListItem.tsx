import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import { MoviePreviewData } from "types";

interface MovieListItemProps {
  movie: MoviePreviewData;
  secondaryAction: React.ReactNode;
}

const MovieListItem: React.FC<MovieListItemProps> = ({
  movie,
  secondaryAction,
}) => (
  <ListItem key={movie.id}>
    <ListItemAvatar>
      <Avatar alt={`${movie.title} avatar`} src={movie.poster_url} />
    </ListItemAvatar>
    <ListItemText primary={movie.title} />
    <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
  </ListItem>
);

export default MovieListItem;
