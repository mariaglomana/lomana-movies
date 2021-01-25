import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { MoviesSearchForm } from "../layout";
import { MoviePreviewData } from "../types";
import { PageContainer } from "../components";
import { getMovies } from "../api";

const Movies: React.FC = () => {
  const history = useHistory();

  const [allMovies, setAllMovies] = useState<MoviePreviewData[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await getMovies();
      if (movies) {
        setAllMovies(movies as MoviePreviewData[]);
      } else {
        history.push("/welcome");
      }
    };

    loadMovies();
  }, [history]);

  return (
    <PageContainer title="Your movies">
      <MoviesSearchForm movies={allMovies} />
    </PageContainer>
  );
};
export default Movies;
