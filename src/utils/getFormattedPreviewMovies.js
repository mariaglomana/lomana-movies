/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { map } from "lodash";

const PREVIEW_MOVIE_KEYS = ["id", "title", "year", "poster_url"];

const getFormattedPreviewMovies = (rawMovies) => {
  const fetchedMovieKeys = Object.keys(rawMovies[0]);

  const getFormattedMovie = (movie) =>
    fetchedMovieKeys
      .filter((key) => PREVIEW_MOVIE_KEYS.includes(key))
      .reduce((obj, key) => {
        obj[key] = movie[key];
        return obj;
      }, {});

  const formattedPreviewMovies = map(rawMovies, getFormattedMovie);
  return formattedPreviewMovies;
};

export default getFormattedPreviewMovies;
