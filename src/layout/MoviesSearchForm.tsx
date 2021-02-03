import React, { useState, useEffect } from "react";
import { startCase, filter, includes, toLower } from "lodash";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import theme from "assets/theme";
import { MoviePreviewData } from "types";
import { ImageGridList } from "components";

const useStyles = makeStyles({
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
});

interface MoviesSearchFormProps {
  movies: MoviePreviewData[];
  loadMovies: () => void;
}

const MoviesSearchForm: React.FC<MoviesSearchFormProps> = ({
  movies,
  loadMovies,
}) => {
  const classes = useStyles();
  const [inputTitle, setInputTitle] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<MoviePreviewData[]>([]);

  const imgGridTitle = !inputTitle
    ? "All the available movies"
    : "Filtered results";
  const moviesToDisplay = !inputTitle ? movies : filteredMovies;

  const filterByTitle = (text: string) => {
    return filter(movies, (movie) =>
      includes(toLower(movie.title), toLower(text)),
    );
  };

  const filterMovies = (text: string) => {
    if (movies.length) {
      const newFiltered = filterByTitle(text);
      setFilteredMovies(newFiltered);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setInputTitle(inputText);
    filterMovies(inputText);
  };

  useEffect(() => {
    filterMovies(inputTitle);
  }, [movies]);

  return (
    <div className={classes.container}>
      <Box m={3}>
        <Typography component="h6" paragraph>
          Filter your movies by title:
        </Typography>
        <form className={classes.form} noValidate>
          <FormControl fullWidth className={classes.margin}>
            <OutlinedInput
              id="filter-by-title"
              value={startCase(inputTitle)}
              name="first_name"
              onChange={handleInputChange}
              aria-describedby="title"
              inputProps={{
                "aria-label": "title",
              }}
              autoFocus
              placeholder="Title"
              aria-placeholder="Title"
            />
          </FormControl>
        </form>
      </Box>
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
    </div>
  );
};
export default MoviesSearchForm;
