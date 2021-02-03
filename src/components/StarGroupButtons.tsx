import React from "react";
import clsx from "clsx";
import { range } from "lodash";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";

import { RATING_MAX_SCORE } from "types";

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      display: "none",
    },
    star: {
      color: "#f1c40f",
    },
    active_star: {
      color: "#4762ff",
    },
  }),
);

interface StarGroupButtonsProps {
  selectedValue?: number;
  handleClickStar: (i: number) => void;
}

const StarGroupButtons: React.FC<StarGroupButtonsProps> = ({
  selectedValue,
  handleClickStar,
}) => {
  const values = range(1, RATING_MAX_SCORE + 1);
  return (
    <div>
      {values.map((value, i) => (
        <StarButton
          key={i}
          value={value}
          handleClickStar={handleClickStar}
          selectedValue={selectedValue}
        />
      ))}
    </div>
  );
};

const StarButton = ({
  value,
  selectedValue,
  handleClickStar,
}: {
  value: number;
  selectedValue?: number;
  handleClickStar: (i: number) => void;
}) => {
  const classes = useStyles();
  return (
    <>
      <input
        className={classes.input}
        id={`icon-button-star-${value}`}
        type="number"
      />
      <label htmlFor={`icon-button-star-${value}`}>
        <IconButton
          aria-label={`give rate ${value}`}
          disabled={!!selectedValue}
          component="span"
          onClick={() => handleClickStar(value)}>
          {!!selectedValue && selectedValue >= value ? (
            <Star className={classes.star} />
          ) : (
            <StarBorder
              color="primary"
              className={clsx(!!selectedValue && classes.star)}
            />
          )}
        </IconButton>
      </label>
    </>
  );
};

export default StarGroupButtons;
