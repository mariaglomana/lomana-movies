import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import { MoviePreviewData } from "../types";
import ImageGridItem from "./ImageGridItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(8),
    },
    gridList: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
    },
    icon: {
      color: "#ff6363",
    },
  }),
);

interface ImageGridListProps {
  data: MoviePreviewData[];
  title: string;
}

const ImageGridList: React.FC<ImageGridListProps> = ({ data, title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={150} spacing={8} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">{title}</ListSubheader>
        </GridListTile>
        {data.map((tile, i) => (
          <ImageGridItem item={tile} key={i} />
        ))}
      </GridList>
    </div>
  );
};

export default ImageGridList;
