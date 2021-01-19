import React, {useState, useEffect} from "react";
import { useHistory} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import theme from "../../assets/theme";
import {ImageGridList} from "../../layout";

import {getMovies } from "../../api";
import {MoviePreviewData, APIMovieData } from "../../types";
import {getFormattedPreviewMovies} from "../../utils";

const useStyles = makeStyles({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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



interface SearchProps {

}

const Search: React.FC<SearchProps> =() => {
  const classes = useStyles();

  let history = useHistory();
  const [allMovies, setAllMovies] = useState< MoviePreviewData[]>([]);
  // const [filterdMovies, setFilterdMovies] = useState< MoviePreviewData[]>(allMovies);
  
  async function fetchMovies() {
    const authToken = localStorage.getItem("planet_auth_token");
  
    if (authToken){
      const fetchedMovies: APIMovieData[] | undefined = await getMovies(authToken);
      if (fetchedMovies){
        const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
        setAllMovies(filteredMovies as MoviePreviewData[]);
      }
    }else {
      history.push("/welcome");
    }
  }

  useEffect(()=>{
    fetchMovies();
  },[]);

  return (
    <Container maxWidth="lg" >
      <div className={classes.paper}>
        <Typography variant="h3" color="textPrimary">
          Your movies
        </Typography>
        <ImageGridList title="All the available movies" data={allMovies} />
      </div>
    </Container>
  );
};
export default Search;
