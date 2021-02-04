import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarRateIcon from "@material-ui/icons/StarRate";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";

import { MoviePreviewData } from "types";
import { MovieListItem } from "components";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  itemGrid: {
    paddingTop: 0,
    paddingBottom: 0,
  },

  description: {
    padding: theme.spacing(3, 0),
  },
  title: {
    fontWeight: "bold",
    marginTop: theme.spacing(3),
  },
  star: {
    color: "#f1c40f",
  },
  mb: {
    marginBottom: theme.spacing(2),
  },
  column: {
    minWidth: 176,
  },
}));

interface RateListProps {
  listUnratedMovies: MoviePreviewData[];
  rateListMovie: (i: number) => void;
}

const RateList: React.FC<RateListProps> = ({
  listUnratedMovies,
  rateListMovie,
}) => {
  const classes = useStyles();

  return (
    <Box component="section" maxWidth="lg">
      <Typography
        component="h6"
        paragraph
        color="primary"
        className={classes.title}>
        Other unrated movies:
      </Typography>
      <List>
        {listUnratedMovies.map((movie, i) => (
          <MovieListItem
            key={i}
            movie={movie}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() => rateListMovie(i)}
                aria-label={`rate ${movie.title}`}
                color="secondary">
                <StarRateIcon />
              </IconButton>
            }
          />
        ))}
      </List>
    </Box>
  );
};

export default RateList;
