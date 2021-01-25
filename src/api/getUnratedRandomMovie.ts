import axios from "axios";
import { APIMovieData, MoviePreviewData, MoviesQueryParams } from "../types";
import { BASE_URL, BASE_POST_USER_DATA } from "../host_backend";
import { getFormattedPreviewMovies } from "../utils";

async function getUnratedRandomMovie(
  moviesQueryParams?: MoviesQueryParams,
): Promise<MoviePreviewData | null> {
  const authToken = window.sessionStorage.getItem("planet_token");

  if (!authToken) return null;

  const fetchedMovie: APIMovieData | undefined = await fetchUnratedRandomMovie(
    authToken,
    moviesQueryParams,
  );
  if (!fetchedMovie) return null;

  const filteredMovies = getFormattedPreviewMovies([fetchedMovie]);
  return filteredMovies[0] as MoviePreviewData;
}

async function fetchUnratedRandomMovie(
  authToken: string,
  moviesQueryParams?: MoviesQueryParams,
): Promise<APIMovieData | undefined> {
  const url = `${BASE_URL}/movies/random_unrated`;
  const params = JSON.stringify({
    ...BASE_POST_USER_DATA,
    ...moviesQueryParams,
  });
  const headers = { Authorization: `Bearer ${authToken}` };
  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    if (response?.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error("Unable to get unrated random movie: ", error);
  }
}
export default getUnratedRandomMovie;
