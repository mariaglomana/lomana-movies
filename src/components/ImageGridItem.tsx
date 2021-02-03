import React from "react";
import { Link } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

import { MoviePreviewData } from "types";

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

interface ImageGridItemProps {
  item?: MoviePreviewData;
}

const ImageGridItem: React.FC<ImageGridItemProps> = ({ item }) => {
  const classes = useStyles();
  if (!item) {
    return null;
  }
  return (
    <>
      <GridListTile
        key={item.id}
        cols={2}
        style={{ margin: 10 }}
        component="div">
        <img src={item.poster_url} alt={item.title} />
        <GridListTileBar
          title={item.title}
          subtitle={item.year}
          actionIcon={
            <IconButton
              component={Link}
              to={`/movie_detail/${item.id}`}
              aria-label={`info about ${item.title}`}
              className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    </>
  );
};

export default ImageGridItem;
