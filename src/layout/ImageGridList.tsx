import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import {MoviePreviewData } from "../types";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  }),
);

interface ImageGridListProps {
data: MoviePreviewData[];
title: string;
}

const ImageGridList:React.FC<ImageGridListProps> = ({data, title}) =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={120} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">{title}</ListSubheader>
        </GridListTile>
        {data.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={tile.year}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageGridList;