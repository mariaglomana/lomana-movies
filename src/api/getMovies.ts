import axios from "axios";
import { APIMovieData, MoviePreviewData, MoviesQueryParams } from "../types";
import { BASE_URL, BASE_POST_USER_DATA } from "../host_backend";
import { getFormattedPreviewMovies } from "../utils";

async function getMovies(
  moviesQueryParams?: MoviesQueryParams,
): Promise<MoviePreviewData[] | null> {
  const authToken = window.sessionStorage.getItem("planet_token");

  if (!authToken) return null;

  const fetchedMovies: APIMovieData[] | undefined = await fetchMovies(
    authToken,
    moviesQueryParams,
  );
  if (!fetchedMovies) return null;

  const filteredMovies = getFormattedPreviewMovies(fetchedMovies);
  return filteredMovies as MoviePreviewData[];
}

async function fetchMovies(
  authToken: string,
  moviesQueryParams?: MoviesQueryParams,
): Promise<APIMovieData[] | undefined> {
  const url = `${BASE_URL}/movies`;
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
    console.error("Unable to get movies: ", error);
  }
}
export default getMovies;
