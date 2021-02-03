import React, { useState } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { MoviePreviewData } from "types";
import { ImageGridItem } from "components";
import { ActionRateGroupButtons } from "layout";
import { registerRate } from "api";

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

interface RateMainProps {
  unratedMovie?: MoviePreviewData;
  memoizedLoadRandomMovie: () => void;
}

const RateMain: React.FC<RateMainProps> = ({
  unratedMovie,
  memoizedLoadRandomMovie,
}) => {
  const classes = useStyles();

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

  return (
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
  );
};
export default RateMain;
