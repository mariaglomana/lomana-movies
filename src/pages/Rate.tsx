import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { MoviePreviewData } from "types";
import { PageContainer, ImageGridItem } from "components";
import { ActionRateGroupButtons } from "layout";
import { getUnratedRandomMovie, registerRate } from "api";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    minWidth: 176,
    padding: theme.spacing(2),
  },
}));

const Rate: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [unratedMovie, setUnratedMovie] = useState<
    MoviePreviewData | undefined
  >(undefined);
  const [rate, setRate] = useState<number | undefined>(undefined);

  const handleSaveRate = () => {
    const response =
      unratedMovie && registerRate(unratedMovie.id, rate as number);
    if (response) {
      memoizedLoadRandomMovie();
      setRate(undefined);
    }
  };

  const handleClickStar = (value: number) => {
    setRate(value);
  };

  const memoizedLoadRandomMovie = useCallback(() => {
    const loadRandomMovie = async () => {
      const movie = await getUnratedRandomMovie();
      if (movie) {
        setUnratedMovie(movie as MoviePreviewData);
      } else {
        history.push("/");
      }
    };

    loadRandomMovie();
  }, [history]);

  useEffect(() => {
    memoizedLoadRandomMovie();
  }, [memoizedLoadRandomMovie]);

  return (
    <PageContainer title="Rate random movies">
      <Grid container direction="row" className={classes.center} spacing={3}>
        <Grid item className={classes.column}>
          <ImageGridItem item={unratedMovie} />
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          className={clsx(classes.column, classes.center)}>
          <ActionRateGroupButtons
            rate={rate}
            loadRandomMovie={memoizedLoadRandomMovie}
            setRate={setRate}
            handleSaveRate={handleSaveRate}
            handleClickStar={handleClickStar}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default Rate;
