import React from "react";
import { startCase } from "lodash";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";

import theme from "assets/theme";

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

interface MoviesInputSearchProps {
  title: string;
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MoviesInputSearch: React.FC<MoviesInputSearchProps> = ({
  title,
  handleChangeTitle,
}) => {
  const classes = useStyles();
  return (
    <Box m={3}>
      <Typography component="h6" paragraph>
        Filter your movies by title:
      </Typography>
      <form className={classes.form} noValidate>
        <FormControl fullWidth className={classes.margin}>
          <OutlinedInput
            id="filter-by-title"
            value={startCase(title)}
            name="first_name"
            onChange={handleChangeTitle}
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
  );
};
export default MoviesInputSearch;
