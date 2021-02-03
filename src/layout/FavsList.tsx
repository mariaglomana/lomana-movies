import React from "react";
import { Link } from "react-router-dom";
import { groupBy, range } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Star from "@material-ui/icons/Star";
import InfoIcon from "@material-ui/icons/Info";

import { Rating, RATING_MAX_SCORE } from "types";
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

interface FavsListProps {
  ratings: Rating[];
}

const FavsList: React.FC<FavsListProps> = ({ ratings }) => {
  const classes = useStyles();

  const groupedRatings = groupBy(ratings, "score");
  const favsScores = [
    RATING_MAX_SCORE,
    RATING_MAX_SCORE - 1,
    RATING_MAX_SCORE - 2,
  ];
  return (
    <section style={{ width: "100%" }}>
      {favsScores.map((score) => (
        <List key={score}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={3} className={classes.column}>
              <ListSubheader
                component="div"
                id={`movies-list-with-${score}-stars`}>
                {range(0, score).map((i) => (
                  <Star className={classes.star} key={i} />
                ))}
              </ListSubheader>
            </Grid>
            <Grid item xs={12} sm={6} md={8} className={classes.column}>
              {groupedRatings[score].map((rating) => (
                <MovieListItem
                  key={rating.id}
                  movie={rating.movie}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      component={Link}
                      to={`/movie_detail/${rating.movie.id}`}
                      aria-label={`info about ${rating.movie.title}`}
                      color="secondary">
                      <InfoIcon />
                    </IconButton>
                  }
                />
              ))}
            </Grid>
          </Grid>

          <Divider light variant="middle" className={classes.mb} />
        </List>
      ))}
    </section>
  );
};

export default FavsList;
