import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { getRatings } from "api";

const useStyles = makeStyles((theme) => ({
  description: {
    margin: theme.spacing(3, 0),
  },
}));

const RateCounterMessage: React.FC = () => {
  const classes = useStyles();

  const [numberOfRatings, setNumberOfRatings] = useState<number | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const memoizedLoadRatings = useCallback(() => {
    const loadRatings = async () => {
      setIsLoading(true);
      const ratings = await getRatings();
      if (ratings) {
        setNumberOfRatings(ratings.length);
      }
      setIsLoading(false);
    };

    loadRatings();
  }, [history]);

  useEffect(() => {
    memoizedLoadRatings();
  }, [memoizedLoadRatings]);

  const message = !!numberOfRatings
    ? `Congrats! 🎉 \n\nYou have already rated ${numberOfRatings} movies!!`
    : "You haven't rated any movie yet";

  return (
    <>
      {!isLoading && (
        <>
          <Box m={2} />
          <Typography variant="body1" className={classes.description}>
            {message}
          </Typography>
        </>
      )}
    </>
  );
};

export default RateCounterMessage;
