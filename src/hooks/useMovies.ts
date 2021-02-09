import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { filter, includes, toLower, concat } from "lodash";

import { getMovies } from "api";
import { MoviePreviewData } from "types";

interface useMoviesReturn {
  loading: boolean;
  moviesToDisplay: MoviePreviewData[];
  title: string;
  handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadMovies: () => void;
}

export default function useMovies(): useMoviesReturn {
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();

  const [title, setTitle] = useState<string>("");
  const [movies, setMovies] = useState<MoviePreviewData[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<MoviePreviewData[]>([]);
  const [numPages, setNumPages] = useState<number>(1);

  const moviesToDisplay = !title ? movies : filteredMovies;

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

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    setTitle(inputText);
    filterMovies(inputText);
  };

  useEffect(() => {
    filterMovies(title);
  }, [movies]);

  const loadMovies = async () => {
    setLoading(true);
    const fetchedMovies = await getMovies(numPages);
    if (!!fetchedMovies) {
      const newMovies = movies.length
        ? concat(movies, fetchedMovies)
        : fetchedMovies;
      setMovies(newMovies as MoviePreviewData[]);
      setNumPages(numPages + 1);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, [history]);

  return { loading, moviesToDisplay, title, handleChangeTitle, loadMovies };
}
