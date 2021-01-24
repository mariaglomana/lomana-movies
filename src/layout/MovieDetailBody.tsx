import React from "react";
import {map} from "lodash";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import {APIMovieData } from "../types";
import { TextParagraph, Sidebar} from "../components";
import {APIMovieDataKeys} from "../types";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  itemGrid: {
    paddingTop: 0, 
    paddingBottom: 0
  }
}));

interface MovieDetailMainProps {
  movie: APIMovieData;
}

const IN_DEPTH_KEYS: APIMovieDataKeys[] = ["year", "published_at", "duration", "country", "language", "director" ];

const MovieDetailBody: React.FC<MovieDetailMainProps> =({movie}) => {
  const classes = useStyles();
  const { title , description, poster_url, url} = movie; 
  const inDepthInfo = map(IN_DEPTH_KEYS, key => ({"key": key , "value": movie[key] }));

  
  return (
    <Grid container spacing={5} className={classes.mainGrid}>  
      <Grid item md={2} xs={12} className={classes.itemGrid}>
        <img src={poster_url} alt={`thumbnail of ${title}`} />
      </Grid>

      <Grid item xs={12} md={6} className={classes.itemGrid}>
        <TextParagraph title={title} description={description} /> 
      </Grid>

      <Grid item xs={12} md={4} className={classes.itemGrid}>
        <Sidebar
          title="In depth"
          data={inDepthInfo}
          url={url}
        /> 
      </Grid>
    </Grid>
  );
};
export default MovieDetailBody;
