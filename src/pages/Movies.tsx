import React, { useState, useEffect } from "react";
import { concat } from "lodash";
import { useHistory } from "react-router-dom";

import { MoviesSearchForm } from "../layout";
import { MoviePreviewData } from "../types";
import { PageContainer } from "../components";
import { getMovies } from "../api";

const Movies: React.FC = () => {
  const history = useHistory();

  const [movies, setMovies] = useState<MoviePreviewData[]>([]);
  const [numPages, setNumPages] = useState<number>(1);

  const loadMovies = async () => {
    const fetchedMovies = await getMovies(numPages);
    if (fetchedMovies) {
      console.log("numPages", numPages);
      console.log("movies", movies);
      const newMovies = movies.length
        ? concat(movies, fetchedMovies)
        : fetchedMovies;
      setMovies(newMovies as MoviePreviewData[]);
      setNumPages(numPages + 1);
    }
  };

  useEffect(() => {
    loadMovies();
  }, [history]);

  return (
    <PageContainer title="Your movies">
      <MoviesSearchForm movies={movies} loadMovies={loadMovies} />
    </PageContainer>
  );
};
export default Movies;
