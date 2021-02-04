import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { includes } from "lodash";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { MoviePreviewData } from "types";
import { PageContainer } from "components";
import { RateMain, RateList } from "layout";
import { getUnratedRandomMovie, registerRate } from "api";

const ELEMENTS_OF_RATE_LIST = 4;

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
  mainRate: {
    marginTop: theme.spacing(4),
    marginBottom: -theme.spacing(4),
    flexDirection: "column",
  },
}));

const Rate: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const [unratedMovie, setUnratedMovie] = useState<
    MoviePreviewData | undefined
  >(undefined);
  const [listUnratedMovies, setListUnratedMovies] = useState<
    MoviePreviewData[]
  >([]);

  const memoizedLoadRandomMovie = useCallback((): Promise<
    MoviePreviewData | undefined
  > => {
    const loadRandomMovie = async (): Promise<MoviePreviewData | undefined> => {
      const movie = await getUnratedRandomMovie();
      if (movie) {
        return movie;
      } else {
        history.push("/");
      }
    };

    return loadRandomMovie();
  }, [history]);

  const loadUnrated = async (newUnratedArr: MoviePreviewData[]) => {
    while (newUnratedArr.length < ELEMENTS_OF_RATE_LIST + 1) {
      const newUnrated = await memoizedLoadRandomMovie();
      if (!newUnrated) {
        break;
      }
      !includes(newUnratedArr, newUnrated) && newUnratedArr.push(newUnrated);
    }
    setUnratedMovie(newUnratedArr.shift());
    setListUnratedMovies(newUnratedArr);
  };

  const loadMainUnrated = async () => {
    await loadUnrated(listUnratedMovies);
  };

  const loadAllUnrated = async () => {
    await loadUnrated([]);
  };

  const rateListMovie = async (movie_index: number) => {
    const unratedArr =
      movie_index === 0
        ? listUnratedMovies
        : moveMovieToBeginning(listUnratedMovies, movie_index);
    await loadUnrated(unratedArr);
  };

  const handleSaveRate = async (rate: number) => {
    const isRateRegistered =
      unratedMovie && registerRate(unratedMovie.id, rate);
    if (isRateRegistered) {
      await loadMainUnrated();
    }
  };

  useEffect(() => {
    if (!unratedMovie || !listUnratedMovies.length) {
      loadAllUnrated();
    }
  }, [memoizedLoadRandomMovie]);

  return (
    <PageContainer title="Rate random movies">
      <Grid container direction="row" className={classes.center} spacing={3}>
        <Grid item className={clsx(classes.center, classes.mainRate)}>
          <RateMain
            unratedMovie={unratedMovie}
            changeMovies={loadAllUnrated}
            handleSaveRate={handleSaveRate}
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={3}
          className={clsx(classes.column, classes.center)}>
          <RateList
            listUnratedMovies={listUnratedMovies}
            rateListMovie={rateListMovie}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
export default Rate;

const moveMovieToBeginning = (
  arr: MoviePreviewData[],
  movie_index: number,
): MoviePreviewData[] => {
  const newArr = [arr[movie_index]];
  newArr.concat(arr.slice(0, movie_index).concat(arr.slice(movie_index + 1)));
  return newArr;
};
