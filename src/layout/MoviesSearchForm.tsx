import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useMovies } from "hooks";
import { ImageGridList, MoviesInputSearch } from "components";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    maxWidth: 600,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    marginVertical: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(6),
    alignSelf: "flex-end",
    marginBottom: theme.spacing(4),
    marginRight: 10,
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(12),
  },
}));

const MoviesSearchForm: React.FC = () => {
  const classes = useStyles();

  const {
    loading,
    moviesToDisplay,
    title,
    handleChangeTitle,
    loadMovies,
  } = useMovies();

  const imgGridTitle = !title ? "All the available movies" : "Filtered results";

  return (
    <div className={classes.container}>
      <MoviesInputSearch title={title} handleChangeTitle={handleChangeTitle} />
      {loading ? (
        <div className={classes.centered}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <ImageGridList title={imgGridTitle} data={moviesToDisplay} />
          <div className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              aria-label="More movies"
              endIcon={<AddIcon />}
              onClick={loadMovies}>
              More movies
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default MoviesSearchForm;
