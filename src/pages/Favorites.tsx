import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Rating } from "types";
import { PageContainer } from "components";
import { FavsList } from "layout";
import { getRatings } from "api";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    padding: theme.spacing(3, 0),
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));

const EmptyMessage: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const navigateToRate = () => history.push("/rate");

  return (
    <>
      <Typography variant="body1" className={classes.description} gutterBottom>
        {"You haven't rated any movie yet"}
      </Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        aria-label="Go to Rate"
        onClick={navigateToRate}>
        Rate a movie
      </Button>
    </>
  );
};

const Favorites: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [ratings, setRatings] = useState<Rating[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const memoizedLoadRatings = useCallback(() => {
    const loadRatings = async () => {
      setIsLoading(true);
      const ratings = await getRatings();
      if (ratings) {
        setRatings(ratings);
      }
      setIsLoading(false);
    };

    loadRatings();
  }, [history]);

  useEffect(() => {
    memoizedLoadRatings();
  }, [memoizedLoadRatings]);

  return (
    <PageContainer title="Your favorite movies:">
      <Container component="main" maxWidth="sm">
        <div className={classes.paper}>
          {isLoading ? (
            <CircularProgress />
          ) : !ratings.length ? (
            <EmptyMessage />
          ) : (
            <FavsList ratings={ratings} />
          )}
        </div>
        <Box mt={8}></Box>
      </Container>
    </PageContainer>
  );
};
export default Favorites;
