import React, {useState} from "react";
import {startCase, filter, includes, toLower} from "lodash";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";

import theme from "../assets/theme";
import {MoviePreviewData } from "../types";
import {ImageGridList} from "./index";


const useStyles = makeStyles({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    maxWidth: 600
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
  textField: {
    width: "25ch",
  },
});


interface SearchFormProps {
    movies: MoviePreviewData[];
    }
    
const SearchForm: React.FC<SearchFormProps> =({movies}) => {
  const classes = useStyles();
  const [inputTitle, setInputTitle] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState< MoviePreviewData[]>([]);

  const imgGridTitle = !inputTitle ? "All the available movies" : "Filtered results";
  const moviesToDisplay = !inputTitle ? movies : filteredMovies;

  const filterByTitle = (text: string)=> {
    return filter(movies, (movie) => includes(toLower(movie.title), toLower(text)));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setInputTitle(inputText);
    const newFiltered = filterByTitle(inputText);
    setFilteredMovies(newFiltered);
  };

  return (
    <div >
      <Box m={3}>
        <Typography component="h6" paragraph>
          Filter your movies by title:
        </Typography>
        <form className={classes.form} noValidate >
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

    </div>
  );
};
export default SearchForm;
