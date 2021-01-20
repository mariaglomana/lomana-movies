import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: "none",
    },
  }),
);

interface RateGroupButtonsProps {
    selectedValue?: number;
    handleClickStar: (i:number)=> void ;
}

const RateGroupButtons: React.FC<RateGroupButtonsProps>= ({ selectedValue, handleClickStar })=> {
  const classes = useStyles();
  const values = [1,2,3,4,5];
  return (
    <div className={classes.root}>
      {values.map(value => (<StarButton value={value} handleClickStar={handleClickStar} selectedValue={selectedValue}/>))}
    </div>
  );
};

const StarButton = ({value, selectedValue, handleClickStar }:{value: number, selectedValue?: number, handleClickStar: (i:number)=> void } ) => {
  const classes = useStyles();
  return (<>
    <input className={classes.input} id={`icon-button-star-${value}`} type="number" />
    <label htmlFor={`icon-button-star-${value}`}>
      <IconButton color="primary" aria-label={`give rate ${value}`}
        disabled={!!selectedValue}
        component="span" onClick={()=>handleClickStar(value)}>
        {!!selectedValue && selectedValue >= value ? (<Star/>):(<StarBorder />)}
      </IconButton>
    </label>
  </>);
};

export default RateGroupButtons;
